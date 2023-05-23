using DefaultNamespace;
using IWorld.ContractDefinition;
using mud.Unity;
using UnityEngine;
using System.Collections.Generic;
using UniRx;

using ObservableExtensions = UniRx.ObservableExtensions;

public class PlayerManager : MonoBehaviour
{
	private CompositeDisposable _disposers = new();
	public GameObject playerPrefab;
	public GameObject otherPlayerPrefab;
    private NetworkManager net;
	private HashSet<string> players = new HashSet<string>();

	// Start is called before the first frame update
	void Start()
	{
		net = NetworkManager.Instance;
		net.OnNetworkInitialized += Spawn;
	}

	async void Spawn(NetworkManager nm)
	{
		Debug.Log("Sending spawn request to MUD " + net.addressKey);
		var addressKey = net.addressKey;
		var currentPlayer = PlayerTable.GetTableValue(addressKey);
		// if (currentPlayer == null)
		// {
		// 	if (PlayerController.IsPositionTableSigned())
		// 	{
		// 		await nm.worldSend.TxExecute<SpawnFunction>(0, 0);
		// 	}
		// 	else
		// 	{
		// 		await nm.worldSend.TxExecute<SpawnFunction>(0u, 0u);
		// 	}
		// }

		var a = PlayerTable.OnRecordInsert().ObserveOnMainThread();

        var playerSub = PlayerTable.OnRecordInsert().ObserveOnMainThread().Subscribe(OnUpdatePlayers);
        _disposers.Add(playerSub);
		var sub = PositionTable.OnRecordInsert().Merge(PositionTable.OnRecordUpdate());
		var _disposer = ObservableExtensions.Subscribe(sub.ObserveOnMainThread(), OnChainPositionUpdate);
        _disposers.Add(_disposer);
	}

    private void OnChainPositionUpdate(PositionTableUpdate update)
    {
		if (players.Contains(update.Key)) return;
        //if (_player.key == null || update.Key != _player.key) return;
        //if (_player.IsLocalPlayer()) return;
        var currentValue = update.TypedValue.Item1;
        if (currentValue == null) return;
        var x = System.Convert.ToSingle(currentValue.x);
        var y = System.Convert.ToSingle(currentValue.y);
        var playerSpawnPoint = new Vector3(x, 0, y);
		Debug.Log("Spawning from movement " + update.Key);
        var player = Instantiate(otherPlayerPrefab, playerSpawnPoint, Quaternion.identity);
		players.Add(update.Key);
        player.GetComponentInChildren<PlayerSync>().key = update.Key;
    }

    // TODO: Callback for PlayerTable update
    private void OnUpdatePlayers(PlayerTableUpdate update)
	{
		Debug.Log("Spawn confirmed, drawing player " + net.addressKey);
		var currentValue = update.TypedValue.Item1;
		if (currentValue == null) return;
		var playerPosition = PositionTable.GetTableValue(update.Key);
		if (playerPosition == null) return;
		var playerSpawnPoint = new Vector3((float)playerPosition.x, 0, (float)playerPosition.y);
		// add to CameraControl's Targets array
		// var cameraControl = GameObject.Find("CameraRig").GetComponent<CameraControl>();
		// cameraControl.m_Targets.Add(player.transform);
		players.Add(update.Key);
		if (update.Key != net.addressKey)
		{
			Debug.Log("Spawning other player " + net.addressKey);
            var player = Instantiate(otherPlayerPrefab, playerSpawnPoint, Quaternion.identity);
            player.GetComponentInChildren<PlayerSync>().key = update.Key;
            return;
		}
		else
		{
			Debug.Log("Skipping spawning self");
   //         var player = Instantiate(playerPrefab, playerSpawnPoint, Quaternion.identity);
   //         player.GetComponentInChildren<PlayerSync>().key = update.Key;
			//PlayerSync.localPlayerKey = update.Key;
        }
    }

	private void OnDestroy()
	{
		_disposers?.Dispose();
	}
}
