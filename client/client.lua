local status = nil
Citizen.CreateThread(function()
    local minimap = RequestScaleformMovie("minimap")
    SetRadarBigmapEnabled(false, false)
    while true do
        Citizen.Wait(1000)
        TriggerEvent('esx_status:getStatus', 'hunger', function(status) comida = status.val / 10000 end)
        TriggerEvent('esx_status:getStatus', 'thirst', function(status) bebida = status.val / 10000 end)
        stamina = 100 - GetPlayerSprintStaminaRemaining(PlayerId())
        SendNUIMessage({
            health = GetEntityHealth(GetPlayerPed(-1)) - 100,
            armor = GetPedArmour(GetPlayerPed(-1)),
            stamina = 100 - GetPlayerSprintStaminaRemaining(PlayerId()),
            bebida = bebida;
            comida = comida;
            stamina = stamina;
        })
        Wait(0)
        BeginScaleformMovieMethod(minimap, "SETUP_HEALTH_ARMOUR")
        ScaleformMovieMethodAddParamInt(3)
        EndScaleformMovieMethod()
        local sleepThread = 500

		local radarEnabled = IsRadarEnabled()

		if not IsPedInAnyVehicle(PlayerPedId()) and radarEnabled then
			DisplayRadar(false)
		elseif IsPedInAnyVehicle(PlayerPedId()) and not radarEnabled then
			DisplayRadar(true)
		end
		Citizen.Wait(sleepThread)
    end
end)