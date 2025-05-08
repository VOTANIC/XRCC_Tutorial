import AddAssetsIcon from '/img/XR/Icon/AddAssets.svg';
import GlobalSpaceIcon from '/img/XR/Icon/GlobalSpace.svg';
import LocalSpaceIcon from '/img/XR/Icon/LocalSpace.svg';
import MoveIcon from '/img/XR/Icon/Move.svg';
import RotateIcon from '/img/XR/Icon/Rotate.svg';
import ScaleIcon from '/img/XR/Icon/Scale.svg';
import OffsetIcon from '/img/XR/Icon/Offset.svg';
import SaveIcon from '/img/XR/Icon/Save.svg';
import DeleteIcon from '/img/XR/Icon/Delete.svg';
import DuplicateIcon from '/img/XR/Icon/Duplicate.svg';

## Object {#object .unnumbered}

Objects are the main building blocks of a scene; they are 3D models with different configurable properties based on their object type.

### Add Object to Scene

Open the main menu and click "**Spawn Item**"<AddAssetsIcon Icon className="XRCCIconXRMode"/>to show the New Item Panel in front of your view. The panel displays all 3D model assets in accordance with their theme. Click on the tab at the right of the panel to select the theme and click on the object's picture to spawn the object. The new object will spawn in front of your view.

![](/img/XR/Object/AddObjectToScene.png)

### Editing Object

#### Object Editing Menu

By pointing at the object and pressing the "**Select**" button, the Object Editing Menu of the pointed object will appear in the form of a ring-shaped menu, and the object will have a green outline.

| Tool                     | Icon                                                        | Function                                              |
|:------------------------:|:-----------------------------------------------------------:|-------------------------------------------------------|
| *Toggle Transform Space* | <LocalSpaceIcon className="XRCCIconXRMode"/> <GlobalSpaceIcon className="XRCCIconXRMode"/> | Toggle Transform Space between local and global space |
| *Move*                   | <MoveIcon className="XRCCIconXRMode"/>                               | Switch to Move Tool                                   |
| *Rotate*                 | <RotateIcon className="XRCCIconXRMode"/>                               | Switch to Rotate Tool                                 |
| *Scale*                  | <ScaleIcon className="XRCCIconXRMode"/>                               | Switch to Scale Tool                                  |
| *Offset*                  | <OffsetIcon className="XRCCIconXRMode"/>                               | Switch to Offset Tool                                  |
| *Close Menu*             | <SaveIcon className="XRCCIconXRMode"/>                               | Close the menu                                        |
| *Delete*                 | <DeleteIcon className="XRCCIconXRMode"/>                               | Delete the object                                     |
| *Duplicate*              | <DuplicateIcon className="XRCCIconXRMode"/>                               | Duplicate the object                                  |

![](/img/media2/media/image68.png)

#### Object Transform Tool

The Object Editing Menu provides 3 transform tools: **Move Tool**, **Rotate Tool**, and **Scale Tool**. When a transform tool is enabled, a gizmo will appear for you to control the chosen transform operation. All gizmos have 3 arms pointing to the X, Y, and Z axis. Click and drag the arm with the **Select** button to transform the object in the indicated axis.

| Tool | Icon | Gizmo | Description |
|:----:|:----:|:-----:|-------------|
| Move Tool | <MoveIcon className="XRCCIconXRMode"/> | ![](/img/media2/media/image70.png) | Move the object position. Click and drag the square to move in 2 axes at once. |
| Rotate Tool | <RotateIcon className="XRCCIconXRMode"/> | ![](/img/media2/media/image72.png) | Rotate the object. |
| Scale Tool | <ScaleIcon className="XRCCIconXRMode"/> | ![](/img/media2/media/image74.png) | Scale the object. Click and drag the cube to scale in all axes. |
| Offset Tool | <ScaleIcon className="XRCCIconXRMode"/> | ![](/img/media2/media/image74.png) | Scale the object. Click and drag the cube to scale in all axes. |

#### Toggle Transform Space

Click "**Toggle Transform Space**"<LocalSpaceIcon className="XRCCIconXRMode"/> in the Object Editing Menu to toggle the transform space from Local Space<LocalSpaceIcon className="XRCCIconXRMode"/> and Global Space<GlobalSpaceIcon className="XRCCIconXRMode"/>. In Local Space, the gizmo and the 3 axes for Move Tool and Rotate Tool follow the rotation direction of the object, whereas in Global Space the gizmo always anchors at the centre point of the object and faces the same direction (0°).

#### Duplicate Object

Click "**Duplicate**"<DuplicateIcon className="XRCCIconXRMode"/>in the Object Editing Menu to duplicate the object. As the duplicated object have the exact same position, rotation, and scale, you might need to move one of the objects to notice the duplication effect.

#### Delete Object

Click "**Delete**"<DeleteIcon className="XRCCIconXRMode"/> in the Object Editing Menu to delete the object from the scene.