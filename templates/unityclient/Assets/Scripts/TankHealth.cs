﻿using System;
using UniRx;
using DefaultNamespace;
using UnityEngine;
using UnityEngine.UI;
using ObservableExtensions = UniRx.ObservableExtensions;

public class TankHealth : MonoBehaviour
{
    public float m_StartingHealth = 100f;
    private float m_CurrentHealth;

    public Slider m_Slider;
    public Image m_FillImage;
    public Color m_FullHealthColor = Color.green;
    public Color m_ZeroHealthColor = Color.red;
    public GameObject m_ExplosionPrefab;
    public GameObject shell;

    private PlayerSync _player;

    private ParticleSystem m_ExplosionParticles;
    private bool m_Dead;
    private CompositeDisposable _disposable = new();


    private void Awake()
    {
        m_ExplosionParticles = Instantiate(m_ExplosionPrefab).GetComponent<ParticleSystem>();
        m_ExplosionParticles.gameObject.SetActive(false);
        _player = GetComponent<PlayerSync>();
        _disposable.Add(ObservableExtensions.Subscribe(HealthTable.OnRecordUpdate().ObserveOnMainThread(),
            OnHealthChange));
        _disposable.Add(ObservableExtensions.Subscribe(HealthTable.OnRecordDelete().ObserveOnMainThread(),
            OnPlayerDeath));
    }


    private void OnEnable()
    {
        m_CurrentHealth = m_StartingHealth;
        m_Dead = false;

        SetHealthUI();
    }

    private void OnHealthChange(HealthTableUpdate update)
    {
        if (update.Key != _player.key) return;
        var initialShellPosition = transform.position;
        initialShellPosition.y += 10;
        Instantiate(shell, initialShellPosition, Quaternion.LookRotation(Vector3.down));

        var currentValue = update.TypedValue.Item1;

        m_CurrentHealth = Convert.ToSingle(currentValue.value);
        SetHealthUI();
    }

    private void OnPlayerDeath(HealthTableUpdate update)
    {
        if (update.Key != _player.key) return;
        var currentValue = update.TypedValue.Item1;

        if (update.Value.Item1 == null)
        {
            var d = update.Value.Item2.TryGetValue("value", out var deletedEntity);
            if ((string)deletedEntity == _player.key)
            {
                OnDeath();
            }

            return;
        }
    }

    private void SetHealthUI()
    {
        // Adjust the value and colour of the slider.
        m_Slider.value = m_CurrentHealth;
        m_FillImage.color = Color.Lerp(m_ZeroHealthColor, m_FullHealthColor, m_CurrentHealth / m_StartingHealth);
    }

    private void OnDeath()
    {
        m_Dead = true;
        m_ExplosionParticles.transform.position = transform.position;
        m_ExplosionParticles.gameObject.SetActive(true);
        m_ExplosionParticles.Play();
        gameObject.SetActive(false);
    }

    private void OnDestroy()
    {
        _disposable?.Dispose();
    }
}
