# Vector SIL Kit Dashboard

Vector SIL Kit Dashboard is a solution that collects, saves, and displays simulation data from SIL Kit systems. 

This package contains the distribution of the Vector SIL Kit Dashboard as a framework-dependent cross-platform binary.


## Requirements

For running the Vector SIL Kit Dashboard 1.0.0 you need an ASP.NET Core Runtime.

This application is compatible with ASP.NET Core Runtime starting from version 8.0.


## Compatibility Information

Vector SIL Kit Dashboard 1.0.0 is compatible with SIL Kit starting from version 4.0.29. See https://github.com/vectorgrp/sil-kit.


## Package Contents

The following files are part of this distribution:

* README.md

  This file. Contains general information and installation instructions.

* vector-sil-kit-dashboard-1.0.0.zip

  Zip archive of the Vector SIL Kit Dashboard.


## Installation Instructions

This sections describes how to install the Vector SIL Kit Dashboard.

Extract the content of the "vector-sil-kit-dashboard-1.0.0.zip" archive to the desired location.


## Operating Instructions

This sections describes how to operate the Vector SIL Kit Dashboard.

To start the application use the "dotnet SILKitDashboard.Backend.dll" command.

To stop the application press Ctrl+C in the application console.

The dashboard is delivered with a predefined configuration.
With this configuration, the dashboard is accessible only locally at http://localhost:8080/dashboard.
Database and log files are created in the user's local app data directory under the "sil-kit-dashboard" directory.

To change the dashboard configuration, edit the appsettings.Production.json file located in the installation directory and restart the application.

Further information on how to configure and operate the application can be found in the "doc" directory.


## Accessing the web frontend

Use your browser to navigate to http://localhost:8080/dashboard.

Online help is accessible via the information context menu.


## Configuring SIL Kit

The communication between SIL Kit and the dashboard gets enabled by configuring the dashboard URI for the SIL Kit registry.
The default value for this endpoint is http://localhost:8082.

- If configured using a registry configuration file, add "DashboardUri: http://localhost:8082" to this configuration file
- Else add "--dashboard-uri http://localhost:8082 --enable-dashboard" to the command line parameters used to start the registry

Please refer to the SIL Kit documentation for more details.


## Copyright

Released under the Vector Free Software License.
