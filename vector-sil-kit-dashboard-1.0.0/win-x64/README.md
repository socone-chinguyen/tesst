# Vector SIL Kit Dashboard

Vector SIL Kit Dashboard is a solution that collects, saves, and displays simulation data from SIL Kit systems. 

This package contains the distribution of the Vector SIL Kit Dashboard as a background service-type application for Windows.


## Compatibility Information

Vector SIL Kit Dashboard 1.0.0 is compatible with SIL Kit starting from version 4.0.29. See https://github.com/vectorgrp/sil-kit.


## Package Contents

The following files are part of this distribution:

* README.md

  This file. Contains general information and installation instructions.

* Vector SIL Kit Dashboard-1.0.0.msi

  The Vector SIL Kit Dashboard Microsoft Windows installer.


## Installation Instructions

This sections describes how to install the Vector SIL Kit Dashboard.

You need to be signed in as an administrator.
To install the program, just double-click the "Vector SIL Kit Dashboard-1.0.0.msi" file.

This will install the Vector SIL Kit Dashboard and register the application launcher as a background service-type application. 

The Vector SIL Kit Dashboard is installed to the following directories:

* C:\Program Files\Vector SIL Kit Dashboard 1.0.0

  Directory containing the executable application and a .NET Runtime Environment.

* C:\ProgramData\Vector SIL Kit Dashboard

  Directory containing the configuration of the application.


## Operating Instructions

The Vector SIL Kit Dashboard gets started automatically during the installation process using a predefined configuration.
With this configuration, the dashboard is accessible only locally at http://localhost:8080/dashboard.
Database and log files are created in the system user's local app data directory "C:\Windows\System32\config\systemprofile\AppData\Local" under the "sil-kit-dashboard" directory.

To change the dashboard configuration, edit the properties file located in the "C:\ProgramData\Vector SIL Kit Dashboard" directory and restart the service using the Task Manager or the Services app.

Further information on how to configure and operate the application can be found in the "C:\Program Files\Vector SIL Kit Dashboard 1.0.0\doc" directory.


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
