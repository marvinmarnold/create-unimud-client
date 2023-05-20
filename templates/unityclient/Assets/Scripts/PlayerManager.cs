using DefaultNamespace;
using IWorld.ContractDefinition;
using mud.Unity;
using UniRx;
using UnityEngine;

public class PlayerManager : MonoBehaviour
{
    private CompositeDisposable _disposers = new();
    public GameObject playerPrefab;
    private NetworkManager net;

    // Start is called before the first frame update
    void Start()
    {
        net = NetworkManager.Instance;
        net.OnNetworkInitialized += Spawn;
    }

    async void Spawn(NetworkManager nm)
    {
        var addressKey = net.addressKey;
        var currentPlayer = PlayerTable.GetTableValue(addressKey);
        if (currentPlayer == null)
        {
            // spawn the player
            Debug.Log("Spawning player...");
            await nm.worldSend.TxExecute<SpawnFunction>(0, 0);
        }

        var playerSub = PlayerTable.OnRecordInsert().ObserveOnMainThread().Subscribe(OnUpdatePlayers);
        _disposers.Add(playerSub);
    }

    private void OnUpdatePlayers(PlayerTableUpdate update)
    {
        var currentValue = update.TypedValue.Item1;
        if (currentValue == null) return;

        var playerPosition = PositionTable.GetTableValue(update.Key);
        if (playerPosition == null) return;
        var playerSpawnPoint = new Vector3((float)playerPosition.x, 0, (float)playerPosition.y);

        var player = Instantiate(playerPrefab, playerSpawnPoint, Quaternion.identity);
        player.GetComponent<PlayerSync>().key = update.Key;

        // add to CameraControl's Targets array
        var cameraControl = GameObject.Find("CameraRig").GetComponent<CameraControl>();
        cameraControl.m_Targets.Add(player.transform);

        if (update.Key != net.addressKey) return;
        Debug.Log("Setting local player key to " + update.Key + "...");
        PlayerSync.localPlayerKey = update.Key;
    }

    private void OnDestroy()
    {
        _disposers?.Dispose();
    }
}
