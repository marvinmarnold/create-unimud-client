using System;
using System.Collections.Generic;
using Cysharp.Threading.Tasks;
using IWorld.ContractDefinition;
using mud.Unity;
using UnityEngine;

public class TankShooting : MonoBehaviour
{
    private bool _rangeVis;
    public bool RangeVisible => _rangeVis;
    private Camera _camera;
    private Renderer _renderer;

    private bool _fired;

    // Start is called before the first frame update
    void Start()
    {
        _camera = Camera.main;
        _renderer = GetComponent<Renderer>();
        _renderer.enabled = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.E))
        {
            if (!_rangeVis)
            {
                _renderer.enabled = true;
                _rangeVis = true;
            }

            var ray = _camera.ScreenPointToRay(Input.mousePosition);
            if (!Physics.Raycast(ray, out var hit)) return;
            var dest = hit.point;
            dest.x = Mathf.Floor(dest.x);
            dest.y = Mathf.Floor(dest.y);
            dest.z = Mathf.Floor(dest.z);

            transform.position = dest;

            if (Input.GetMouseButtonDown(0) && !_fired)
            {
                _fired = true;
                SendFireTx(Convert.ToInt32(dest.x), Convert.ToInt32(dest.z)).Forget();
                _fired = false;
            }
        }
        else
        {
            if (!_rangeVis) return;
            _renderer.enabled = false;
            _rangeVis = false;
        }
    }
    
    private async UniTaskVoid SendFireTx(int x, int y)
    {
        try
        {
            await NetworkManager.Instance.worldSend.TxExecute<AttackFunction>(x, y);
        }
        catch (Exception ex)
        {
            Debug.LogException(ex);
        }
    }
}