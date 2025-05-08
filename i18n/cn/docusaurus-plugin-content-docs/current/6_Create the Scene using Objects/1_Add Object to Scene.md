import AddAssetIcon from '/img/Icon/addAsset.svg';
import WorldCenterIcon from '/img/Icon/worldCenter.svg';

## Add Object to Scene {#add-object-to-scene .unnumbered}

In the Toolbar, press "**Assets Menu**" (**Shift + A**) in the Project tab to open the Assets Menu or press "**Add Assets**" (**+**) in the tool bar at the left side.

![](/img/AddObject/AddObject.png) 

The panel displays all 3D model assets grouped by their theme. Select a model and press **"Add Asset"** (<AddAssetIcon className="XRCCIcon"/>), **"World Center"** (<WorldCenterIcon className="XRCCIcon"/>) or double-click the model to spawn it in the scene as an object.

-  **\"Add Asset / Double Click\"**: The new object will spawn in front of you
-  **\"World Center\"**: The new object will spawn at the world center (0, 0, 0)

Additionally, there are two options available to further control the placement of the spawned objects:

-   **\"Lock Rotation\"**: When enabled, this option sets the rotation of the spawned item to (0, 0, 0), effectively locking its rotation. This means that the spawned object will maintain a fixed orientation when being spawned.

-   **\"Lock Position\"**: When enabled, this option sets the world position of the spawned item to (0, 0, 0), effectively locking its position. This means that the spawned object will always appear at the world origin coordinates when being spawned.

![](/img/AddObject/LockPosition.png)                                   

### Special Object Type {#special-object-type .unnumbered}

Several pre-configured Special Objects are provided in XRCC with dedicated functions for use under different special use cases. The Special Objects can be accessed from the New Item Panel under

"**Specialize Objects**".

| Object Type    | Description                                         |
|----------------|-----------------------------------------------------|
| *Ground*        | An invisible standing ground for user to walk on during play mode when gravity is turned on in the scene.       |
| *Empty Object*   | A versatile 3D model object that will be invisible during play mode. It can be used in various ways in the scene, e.g. parent object, sound source, etc.   |
| *Empty Cylinder*  |A Cylinder 3D model object that will be invisible during play mode. It can be used as a invisible wall in the scene|
| *Empty Sphere*   |A Sphere 3D model object that will be invisible during play mode. It can be used as a invisible wall in the scene|
| *Empty Cube*   |A Cube 3D model object that will be invisible during play mode. It can be used as a invisible wall in the scene|
| *Text Object*    | For text display in the scene. Basic font settings are available for configuration. |
| *2D Image Object*| For display of image assets in the scene using a flat rectangular plane. |
| *2D Video Object*      | For display of video assets in the scene using a flat rectangular plane.|
| *3D Image Object*      | For display of 360° image assets in the scene using a spherical object.|
| *3D Video Object*      | For display of 360° video assets in the scene using a spherical object.|
| *Document Object*      | For display of pdf document in the scene using a flat rectangular plane.|
| *Point of Interest Object* | A pre-defined waypoint object for use as teleport spots. <br/>(You can only test this in XRCC XR.)              |
| *Button Object*  | A text-based button object with pre-defined properties that allows players to trigger an action when clicking it. <br/>For details, please refer to the topic on <u>**Create Re-usable Behavior using Action**</u>. It can be found in a later chapter.  |
| *Slideshow 2D Object*  | For display of 2D images as slideshow with configurable effects in the scene using a flat rectangular plane.<br/>（Maximum10 slides per object）  |
| *Slideshow 3D Object*  | For display of 360° images as slideshow in the scene with configurable effects using a spherical object.<br/>（Maximum10 slides per object） |
| *Light Object*   | An object that emits light in all directions equally (point light), in a cone shape (spot light) or in one direction only (directional light). 
| *Option Box Object*    | A text-based option box object with pre-defined properties that allows players to trigger an action when clicking buttons on it.  |
| *Character*| Several animated characters are provide for user to use in the scene, player can create a simple interaction with the character in the behaviour system.|
| *Startpoint <br/>(the robot)*   | For representing the user starting position. <br/> This object comes with a newly created scene and <u>cannot be spawn or deleted</u> by the user or add behaviour to it. |

For the application of Special Objects in a project, please refer to the [Project Example Guide](https://connecthkuhk-my.sharepoint.com/:p:/g/personal/u3605729_connect_hku_hk/EQdulRdU_ytEvlqr6nybQ3MB5efZtyvXTlaQf0UpixDPAA?e=HUkUjk).

For more details about configurating the setting of special object type using the Configuration Panel, please refer to the [Inspector part](#configuration-tool) of this section.