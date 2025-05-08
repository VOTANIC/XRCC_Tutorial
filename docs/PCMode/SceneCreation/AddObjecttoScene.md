---
sidebar_position: 1
sidebar_label: Add Object to Scene
---

import AddAssetIcon from '/img/Icon/addAsset.svg';
import WorldCenterIcon from '/img/Icon/worldCenter.svg';

# Add Object to Scene

![](/img/AddObject/OpenAssetMenu.png) 

In the Main Menu, select "**Project** -> [**Asset Menu**](/PCMode/AssetsManagement/AssetManagementPanel)" to open the Asset Panel or press "**More**" (**+**) in the toolbar at the left side.

![](/img/AddObject/AddObject.png) 

With the Asset Panel opened, select an object in the panel first, then press **"Add Asset"** (<AddAssetIcon className="XRCCIcon"/>) or **"World Center"** (<WorldCenterIcon className="XRCCIcon"/>) to add the selected object to scene. Alternatively, you can double-click the selected object to spawn it in the scene, double-clicking works in the same manner as pressing the **"Add Asset"** (<AddAssetIcon className="XRCCIcon"/>) button.

-  **\"Add Asset / Double Click\"**: The new object will spawn at the center of the screen in front of you
-  **\"World Center\"**: The new object will spawn at the world center (0, 0, 0) with a rotation of (0, 0, 0).

Additionally, there are two options available to further control the placement of the spawned objects:

-   **\"Lock Rotation\"**: When enabled, the object will keep its original rotation values when spawned into the scene. Useful when you spawn objects with pre-defined rotation that needs to be enforced when added to the scene.

-   **\"Lock Position\"**: When enabled, the object will keep its original position values when spawned into the scene. Useful when your objects have pre-defined relative positions that needs to be kept when added to the scene.

![](/img/AddObject/LockPosition.png)                                   

## Special Object Type

Several pre-configured Special Objects are provided in XRCC with dedicated built-it functions for different purposes. The Special Objects can be accessed from the Asset Panel under "**Specialize Objects**".

| Object Type    |Thumbnail| Description                                         |
|:---------------:|:-:|-----------------------------------------------------|
| *Ground*        |![](/img/AddObject/Thumbnail/Ground.png)| An invisible standing ground for user to walk on during play mode when gravity is turned on in the scene.       |
| *Empty Object*   |![](/img/AddObject/Thumbnail/EmptyObject.png)| Versatile 3D model object of different shapes (e.g., cylinder, sphere, cube) that will be invisible during play mode. They can be used in various ways in the scene, e.g., parent object, sound source, invisible wall, etc.   |
| *Text*    |![](/img/AddObject/Thumbnail/TextObject.png)| For text display in the scene. Basic font settings are available for configuration. |
| *2D Image*|![](/img/AddObject/Thumbnail/Image2D.png)| For display of image assets in the scene using a flat rectangular plane. |
| *2D Video*      |![](/img/AddObject/Thumbnail/Video2D.png)| For display of video assets in the scene using a flat rectangular plane.|
| *3D Image*      |![](/img/AddObject/Thumbnail/Image3D.png)| For display of 360° image assets in the scene using a spherical object.|
| *3D Video*      |![](/img/AddObject/Thumbnail/Video3D.png)| For display of 360° video assets in the scene using a spherical object.|
| *Document*      |![](/img/AddObject/Thumbnail/Document.png)| For display of pdf document in the scene using a flat rectangular plane.|
| *Point of Interest* |![](/img/AddObject/Thumbnail/PointOfInterest.png)| A pre-defined waypoint object for use as teleport spots. You can only interact with this object with Teleport Tool             |
| *Button*  |![](/img/AddObject/Thumbnail/Button.png)| A text-based button object with pre-defined properties that allows players to trigger an action when clicking it. <br/>For details, please refer to the topic on <u>**[Create Re-usable Behaviour using Action](/PCMode/BehaviourManagement/CreateReusableBehaviourUsingAction)**</u>. |
| *Slideshow 2D*  |![](/img/AddObject/Thumbnail/Slideshow.png)| For display of 2D images as slideshow with configurable effects in the scene using a flat rectangular plane.<br/>（Maximum 10 slides per object）  |
| *Slideshow 3D*  |![](/img/AddObject/Thumbnail/3DSlideshow.png)| For display of 360° images as slideshow in the scene with configurable effects using a spherical object.<br/>（Maximum10 slides per object） |
| *Light*   |![](/img/AddObject/Thumbnail/Light.png)| An object that emits light in all directions equally (point light), in a cone shape (spot light) or in one direction only (directional light). 
| *Option Box*    |![](/img/AddObject/Thumbnail/OptionBox.png)| A text-based option box object with pre-defined properties that allows players to trigger an action when clicking buttons on it.  |
| *Startpoint <br/>(the robot)*   |No Thumbnail| For representing the user starting position. <br/> This object comes with a newly created scene and <u>cannot be spawn or deleted</u> by the user or add behaviour to it. |

For the application of Special Objects in a project, please refer to the [Project Example Guide](/Tutorial/Introduction).

For more details about configurating the setting of special object type using the Configuration Panel, please refer to the [Inspector part](/PCMode/SceneCreation//Inspector.md) of this section.