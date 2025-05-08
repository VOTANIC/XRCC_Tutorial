---
sidebar_position: 2
sidebar_label: Set up Entity in XR Configuration File
---

# Set up Entity in XR Configuration File

## Locate the VotanicXR Configuration File

### For CAVE

Go to **VotanicXR Suite's installation directory,** typically it's located at "**C:\\Program Files\\Votanic**". Open the Configs folder and double-click to open the **ConfigCAVE.vrxc** file (or the CAVE config file you will use to run XRCC).

<center>![](/img/media/media/image299.png)</center>

### For HMD 

:::note
Only VRPN device is supported for HMD, to convert other tracker to VRPN device, please refer to [**Set up VRPN Device**](/docs/PCMode/AppendixB/SetupVRPNDevice.md).
:::

Go to **XRCC 3's installation directory,** typically it's located at "**C:\\Program Files\\Votanic\\XRCC 3**". Navigate to the "XRCC (XR)\\VotanicXR\\Configs" director and double-click to open the **ConfigHMD.vrxc** file.

<center>![](/img/media/media/image300.png)</center>

## Associate Entity with Tracker

We will use the CAVE configuration as an example here.

1.  With the CAVE config opened, select \"**XR Objects**\" then click \"**Edit \--\> Generate Entities**\". This will add all Entities in XRCC.

<center>![](/img/media/media/image301.png)</center>

2.  Select \"**Devices**\" and create a **new VRPN Device** for the Entity object you are going to use. Here we use the example of the Entity1Tracker as an example, assuming that you've already have the Entity1Tracker configured in the motion capture system.

<center>![](/img/media/media/image302.png)</center>

3.  Now go back to the XR Objects tab, select the Entity1 object and confirm the "**Linked Tracker**" is having the same name as the new VRPN device you've created in the previous step. Now save the configuration and you are ready to use the Entity object with tracking capability.

<center>![](/img/media/media/image303.png)</center>

## Enable the tracker in your XRCC Project

1.  In the XRCC project, find **Entity Setting** in the top menu. The **Tracking Entity Setting Panel** will show up.

<center>![](/img/XRConfiguration/EnableEntity.png)</center>

2.  Enable the **Entity 1** in the Tracking Entity Setting Panel will connect XRCC entity setting to the Entity1 object in VotanicXR configuration.

:::note
For the usage of the tracking entity, please refer to the chapter [**UI Screen in Entity**](/docs/PCMode/SceneCreation/UISceneInEntity.md).
:::