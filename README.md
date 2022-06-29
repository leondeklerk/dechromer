# Dechromer

A simple browser extensions for chromium based browsers that uses native messaging to redirect any opened tab to the default system browser.
Mainly intended (and currently working) for Windows where some links are always opened in Edge instead of in the default browser.

Requires you to install a native OS client and side load the extension in your browser.

Tested on Windows 11 with Chrome and Edge.

## Install

1. Clone the repository to a known directory (e.g. `C:/dechromer/`)
2. Open your Chromium based browser and go to Extensions > Manage Extensions
3. On the extension page enable Developer mode
4. Select `Load unpacked` and select the `/path/to/dechromer/extension` folder
5. Copy the generated extension ID
6. In an editor open `/path/to/dechromer/host/manifest.json`
7. Replace `YOUR_EXTENSION_ID` with the copied ID from the Browser extension page
8. Run `path/to/dechromer/host/install.bat`
9. Everything should now function as intended.

## Temporarily disable

All links opened in the configured browser will be redirect and the tabs are automatically closed.
To (Temporarily) disable the extension: remove the `allowed_origins` entry from `/path/to/dechromer/host/manifest.json`.

Reenabling can be done by re-adding the `allowed-origins` entry.

## Uninstall

In your chromium based browser:

 1. Navigate to Extensions > Manage Extensions
 2. Click `remove` on the `dechromer` extension
  
In your installation folder:

 1. run `host/uninstall.bat` to remove the registry keys.
 2. Remove the installation folder (`/path/to/dechromer`)
