---
sidebar_position: 2
sidebar_label: Edit Mode
---

import NetworkingIcon from '/img/XR/Icon/Networking.svg';
import AddAssetsIcon from '/img/XR/Icon/AddAssets.svg';
import ItemListIcon from '/img/XR/Icon/ItemList.svg';
import AutoIcon from '/img/XR/Icon/Auto.svg';
import SceneListIcon from '/img/XR/Icon/SceneList.svg';
import CloseMenuIcon from '/img/XR/Icon/CloseMenu.svg';
import SaveIcon from '/img/XR/Icon/Save.svg';
import UndoIcon from '/img/XR/Icon/Undo.svg';
import RedoIcon from '/img/XR/Icon/Redo.svg';

import DocCardList from '@theme/DocCardList';

# Edit Mode

XRCC provides the features to create, edit, and debug their project in an XR environment. By creating/loading a project file, the user can manage the scenes and objects in the scene.

:::note
Note that editing of object behaviour is not available in XR, please use PC mode instead to edit behaviour and refer to the XRCC PC user guide for details.
:::

The Edit Mode main menu gives you more options on the content creation aspect in XRCC XR, allowing you to construct the scene and test the
project in the XR scene.


| Button         | Icon                               | Function                              |
|:--------------:|:----------------------------------:|---------------------------------------|
| *Networking*   | <NetworkingIcon className="XRCCIconXRModeTable"/> | Exit the application                  |
| *File*         | <SaveIcon className="XRCCIconXRModeTable"/> | Save/Exit the project                 |
| *Scene List*   | <SceneListIcon className="XRCCIconXRModeTable"/> | Add/Change the current scene          |
| *Close Menu*   | <CloseMenuIcon className="XRCCIconXRModeTable"/> | Close the main menu                   |
| *Undo/Redo*    | <UndoIcon className="XRCCIconXRModeTable"/><RedoIcon className="XRCCIconXRModeTable"/> | Undo/Redo the last action             |
| *Item List*    | <ItemListIcon className="XRCCIconXRModeTable"/> | Open the Item List panel              |
| *Spawn Item*   | <AddAssetsIcon className="XRCCIconXRModeTable"/>  | Add object to the scene               |
| *Select Tool*  | <AutoIcon className="XRCCIconXRModeTable"/> | Switch between the tools              |

<DocCardList />