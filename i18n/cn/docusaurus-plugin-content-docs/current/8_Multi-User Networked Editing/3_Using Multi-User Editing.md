## Using Multi-User Editing {#using-multi-user-editing .unnumbered}

### Upload project to Network Server (First Time only) {#upload-project-to-network-server-first-time-only .unnumbered}

In order to let your team get into your project, you need to upload the project first.

Click **Upload** to upload a project and input the infomation of the online project. 
<center><img src="/img/Networking/ClickUploadButton.png" alt=""/></center>


Click **Upload to Server** to upload the project to server.
<center><img src="/img/Networking/UploadProjectToServer.png" alt=""/></center>

### Editing projects on Network Server {#editing-projects-on-network-server .unnumbered}

In the Network Edit page, you can edit objects with your teammates, however, import new asset is not permitted in this function, and users cannot edit same item at the same time. Meanwhile, you will be able to do voice chat while doing multi-user editing.

1.  Select project from **the project list**.
<center><img src="/img/Networking/SelectProject.png" alt=""/></center>

2.  Select project and click **Host/Join Session** to enter multi-user edit.
<center><img src="/img/Networking/HostOrJoinSession.png" alt=""/></center>

3.  Screenshot of Networking Panel showing project details, including project name, user list and description.
<center><img src="/img/Networking/ProjectDetails.png" alt=""/></center>

4.  In scene, there will be another user in scene.

<center><img src="/img/Networking/NetworkPlayer.png" alt=""/></center>

5.  User can **edit together** in the scene (including the configuration and behaviour of an object) but **cannot** edit the **same** object or behaviour simultaneously.

<center><img src="/img/Networking/BlockerForBehaviour.png" alt=""/></center>

<mark>*Note: User cannot use the asset management features in Networked Project.*</mark>

### Debug networked project in Play Mode {#debug-networked-project-in-play-mode .unnumbered}

User can click the **play** button to debug the project in similar way to a local project.

<center><img src="/img/Networking/PlayButton.png" alt=""/></center>

<mark>*Note: Multi-user is not available in XRCC PC play mode, user will need to use the XRCC XR\'s Play Session to perform multi-user playback.*</mark>

### Export Networked Project {#export-networked-project .unnumbered}

The networked project is **auto-saved** and there\'s no need to manually save the project. However, if you need an **offline or individual copy**, follow these steps:

1.  **Find \'Save Project As\':** Look for this button or option within your project\'s interface, often under the File menu.

2.  **Select a Location:** A dialog will pop up. Choose where on your computer you\'d like to save the project.

3.  **Rename (Optional):** To distinguish your local copy from the networked one, consider renaming it.

4.  **Save:** Click \"Save\" or \"OK\" to finalize.

Your local copy is now ready. Remember, changes to this won\'t automatically update the networked version and vice versa. Keep both versions updated to avoid discrepancies.

### Start Multi-User Debugging {#start-multi-user-debugging .unnumbered}

Press debug button to start debug mode.
<center><img src="/img/Networking/MutiPlayerDebug.png" alt=""/></center>
User can choose to debug the project with all players in the server or debug the project individually.

<center><img src="/img/Networking/MutiPlayerDebugInvitation.png" alt=""/></center>
When the first user try to start mutiplayer debugging, an invitation of mutiplayer debugging will be sent to all player. All user can choose to accept or cancel the invitation.
<center><img src="/img/Networking/MutiPlayerDebugWaitInvitation.png" alt=""/></center>
Before all user press the accept button, the user who send the invitation will wait until other users make a decision.

### Exit Multi-User Editing {#exit-multi-user-editing .unnumbered}

Use the **Close Project button (Ctrl + H)** to exit the networked
project.

<center><img src="/img/Networking/BeforeCloseProjectButton.png" alt=""/></center>

<center><img src="/img/Networking/AfterCloseProjectButton.png" alt=""/></center>

<mark>*Note: user is encouraged to keep the network server running while there is still user in the networked project, otherwise unexpected issue may occur.*</mark>