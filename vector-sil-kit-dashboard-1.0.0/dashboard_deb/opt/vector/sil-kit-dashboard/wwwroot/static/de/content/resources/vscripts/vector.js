	function startVPHCall(parameter, cmd)
	{
		vphParameter = parameter + "&cmd=\"" + encodeURIComponent(cmd) + "\"";

		if (window.parent != window)
		{
			window.parent.postMessage({
				vphParameter: vphParameter             
			}, "*");
		}
		else
		{
			myUri = "vph://context=" + window.location.href;
			
			idParam = new URLSearchParams(window.location.search).get("id");
			if (idParam)
			{
				myUri += "&productId=" + idParam;
			}
			myUri += vphParameter;
	
			window.location = myUri;
		}
	}

	function startDemoLoader(cmd)
	{
		startVPHCall("", cmd);
	}

	function startVTTLauncher(cmd) 
	{
		vphParameter = "&product=vVIRTUALtarget";
	
		startVPHCall(vphParameter, cmd);
	} 

	function startCANoeLauncher(cmd) 
	{
		vphParameter = "&product=CANoe";

		startVPHCall(vphParameter, cmd);
	} 

	function startCANoeLauncherDE(cmd) 
	{
		vphParameter = "&lang=DE&product=CANoe";

		startVPHCall(vphParameter, cmd);
	}

	function startCANoeLauncherEN(cmd) 
	{
		vphParameter = "&lang=EN&product=CANoe";

		startVPHCall(vphParameter, cmd);
	}

	function startCANoeMedTechLauncher(cmd)
	{
		vphParameter = "&product=CANoeMedTech";

		startVPHCall(vphParameter, cmd);		
	}
	
	function startCANoeMedTechLauncherDE(cmd)
	{
		vphParameter = "&lang=DE&product=CANoeMedTech";

		startVPHCall(vphParameter, cmd);	
	}
	
	function startCANoeMedTechLauncherEN(cmd)
	{
		vphParameter = "&lang=EN&product=CANoeMedTech";

		startVPHCall(vphParameter, cmd);	
	}

	function startCANalyzerLauncher(cmd) 
	{
		vphParameter = "&product=CANalyzer";

		startVPHCall(vphParameter, cmd);	
	} 

	function startCANalyzerLauncherDE(cmd) 
	{
		vphParameter = "&lang=DE&product=CANalyzer";

		startVPHCall(vphParameter, cmd);	
	} 

	function startCANalyzerLauncherEN(cmd) 
	{
		vphParameter = "&lang=EN&product=CANalyzer";

		startVPHCall(vphParameter, cmd);	
	} 

	function startCANoe4SWLauncher(cmd) 
	{
		vphParameter = "&product=CANoe4SW";

		startVPHCall(vphParameter, cmd);	
	} 

	function startCANoe4SWLiteLauncher(cmd) 
	{
		vphParameter = "&product=CANoe4SWLite";

		startVPHCall(vphParameter, cmd);		
	} 

	function startCANoeOEMLauncher (oem, cmd)
	{
		vphParameter = "&product=CANoe&oem=\"" + encodeURIComponent(oem) + "\"";

		startVPHCall(vphParameter, cmd);	
	}

	function startCANoeSubToolLauncherDE (tool, cmd)
	{ 
		vphParameter = "&product=CANoe&lang=DE&tool=\"" + encodeURIComponent(tool) + "\"";

		startVPHCall(vphParameter, cmd);
	}

	function startCANoeSubToolLauncherEN (tool, cmd)
	{ 
		vphParameter = "&product=CANoe&lang=EN&tool=\"" + encodeURIComponent(tool) + "\"";

		startVPHCall(vphParameter, cmd); 
	}

	function startCANoeSubToolLauncher (tool, cmd)
	{ 
		vphParameter = "&product=CANoe&tool=\"" + encodeURIComponent(tool) + "\"";

		startVPHCall(vphParameter, cmd);
	}