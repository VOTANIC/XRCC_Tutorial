---
sidebar_position: 5
sidebar_label: Tool
---

import CameraIcon from '/img/XR/Icon/Camera.svg';
import ZoomOut from '/img/XR/Icon/Zoom-out.svg';
import TeleportIcon from '/img/XR/Icon/Teleport.svg';
import RemoveIcon from '/img/Icon/remove.svg';
import LaserPointerIcon from '/img/XR/Icon/LaserPointer.svg';
import AutoIcon from '/img/XR/Icon/Auto.svg';
import WandIcon from '/img/XR/Icon/Wand.svg';
import MeasurerIcon from '/img/XR/Icon/Measurer.svg';

# Tool

XRCC provides 7 tools for you to interact with the XR environment. Once you enter a scene, the default tool of the scene will attach to your controller, providing you with the function of your current tool.

To switch tools, click "**Select Tool**" in the scene. Click on the button of the respective tool in the Tool Menu to select the tool (except the current tool).


| Tool | Icon | Function |
|:----:|:----:|----------|
| *Auto* | <AutoIcon className="XRCCIconXRModeTable"/> | Displays Wand tool when pointing upright and automatically switch to Teleport tool when pointing to the ground.|
| *Wand* | <WandIcon className="XRCCIconXRModeTable"/> | Allow the user to interact with interactable object. Point and press **Select** button to interact with the object, press **Grab** button to Grab if object is Grabbable.|
| *Teleport* | <TeleportIcon className="XRCCIconXRModeTable"/> | Allow the user to teleport to places with a ground or point of interest object. Press **Select** button to teleport to position where the Teleport tool is blue. |
| *Camera* | <CameraIcon className="XRCCIconXRModeTable"/> | Allow the user to capture the image in the scene. |
| *Zoom* | <ZoomOut className="XRCCIconXRModeTable"/> | Allow the user to zoom in/out the scene. |
| *Measurer* | <MeasurerIcon className="XRCCIconXRModeTable"/> | Allow the user to conduct in-game measurements in the scene. Press **Select** to create a starting point in the scene. Press again to create 2^nd^ point and measure the distance between the 2 markings. Point and click on the line with Wand tool to remove the measurement. |
| *Laser Pointer* | <LaserPointerIcon className="XRCCIconXRModeTable"/> | Allow the user to interact with far away objects using a pointer object. The pointer object changes from white to green when in contact with an interactable object, press **Select** button to interact with the object. |

<img src="/img/XR/Tool/UtilityTool.png" alt="" />
<img src="/img/XR/Tool/ControlTool.png" alt="" />

The Tool Menu is available in Edit Mode, Debug Mode, and during play
sessions.