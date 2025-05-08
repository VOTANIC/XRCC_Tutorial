---
sidebar_position: 2
sidebar_label: Multiplayer Session
---

# Multiplayer Session

Starting a Multiplayer Session requires turning on the XRCC multiplayer **server**, then all users must first connect to the server to join multiplayer sessions hosted on the server.

## XRCC Multiplayer Server  

To turn on the XRCC multi-player server, navigate to "**XRCC (Server)**" folder in the XRCC directory. Double-click on the file "**XRCC (Server).exe**" to start the server. A console window will appear and display the information of the server. Note down the IP address of the server.

![](/img/media2/media/image83.png)

*It's recommended that you run the Multiplayer Server on a standalone machine to optimize the XR experience of the players.*

To shut down the multiplayer server, simply close the console window of the server.

### Connect to Multiplayer Server

To connect to the multiplayer server, go to the XRCC directory on the system which you will launch the XRCC XR, navigate to "**XRCC (XR)**" 🡪 "**XRCC (XR)\_Data**" 🡪 "**StreamingAssets**". In the text file "**networkConfiguration.json**", change the text inside to the server IP address. (You can use "localhost" if the server is started in the same computer.)

## Joining Networked Session

In XRCC, click "**Networking**" in Home.

<center>![](/img/XR/Networking/ClickNetworkingButton.png)</center>

A panel will appear and shows your project save files. Select your project.

<center>![](/img/XR/Networking/ShowProject.png)</center>

After selecting the project file, you can click on **Edit** or **Play** button to enter edit/play mode of the project. XRCC will start connecting to the server and loading the project.

<center>![](/img/XR/Networking/EditOrDebugMode.png)</center>

## Standard VS Co-Located Network Session

You can select either Standard Mode or Co-Located Mode after clicking "**Play**" on your project.
<center>![](/img/XR/Networking/ClickPlayButton.png)</center>
<center>![](/img/XR/Networking/StandardOrCo-Located.png)</center>

In standard mode, all users can independently move in the VR scene using their own controller.

In co-located mode, all users can independently move in the VR scene using their own controller.

In co-located mode, all users share the same space and need to physically walk inside the VR scene. During co-located mode, the session host is the only one who can initiate movement behaviour, which moves all users in the same direction together.

## Networked Session Host

In Networked Session, some features will only apply to the host.

1.  Behaviour blocks in User category can only affect the host, i.e. User Move Block, User Rotate Block, Set User Position Block, Set User Rotation Block, Travel to Destination Block, Show Tool Block, Equip Block, Unequip Block.

2.  The UI Entity will only follow the host.