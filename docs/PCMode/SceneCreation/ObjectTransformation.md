---
sidebar_position: 4
sidebar_label: Object Transformation
---

import GlobalSpaceIcon from '/img/Icon/GlobalSpace.svg';
import LocalSpaceIcon from '/img/Icon/LocalSpace.svg';

# Object Transformation

XRCC PC provides a set of object transform tools to control the **position**, **rotation**, **scale** and **offset** of selected object(s) in the scene.

![](/img/ObjectTransformation/EditToolbar.png)

## Object Transform Tool

When an object is selected, a gizmo will appear for you to control the chosen transform operation. All gizmos have 3 arms pointing the X, Y, and Z axis. Click and drag the arm to transform the object in the indicated axis.

|Tool|Icon|Shortcut|Gizmo|Pop-up Menu|Description|
|----|----|--------|:---:|:-:|-----------|
|*Look Tool*|![](/img/ObjectTransformation/HandTool.png) |Q key|/|/|Provide a clearer view to look and find the objects in the scene.|
|*Move Tool*|![](/img/ObjectTransformation/MoveTool.png) |W key|![](/img/ObjectTransformation/MoveGizmo.png) |![](/img/ObjectTransformation/MovePopUp.png)|Move the object position. Click and drag the square to move in 2 axes at once.|
|*Rotate Tool*|![](/img/ObjectTransformation/RotateTool.png) |E key|![](/img/ObjectTransformation/RotateGizmo.png) |![](/img/ObjectTransformation/RotatePopUp.png) |Rotate the object.|
|*Scale Tool*|![](/img/ObjectTransformation/ScaleTool.png) |R key|![](/img/ObjectTransformation/ScaleGizmo.png) | ![](/img/ObjectTransformation/ScalePopUp.png)|Scale the object. Click and drag the cube to scale in all axes.|
|*Offset Tool*|![](/img/ObjectTransformation/OffsetTool.png) |T key|![](/img/ObjectTransformation/OffsetGizmo.png) |![](/img/ObjectTransformation/OffsetPopUp.png) |Offset the object’s anchor point (centre). Click and drag the arc to offset in 2 axes at once.|


## Toggle Transform Space

<center>![](/img/ObjectTransformation/ToggleTransformSpaceToggle.png)</center>

Press "**Toggle Transform Space**" (<LocalSpaceIcon className="XRCCIcon"/>) (**Tab key**) in the Edit tab to toggle the transform space from **Local Space** (<LocalSpaceIcon className="XRCCIcon"/>) and **Global Space** (<GlobalSpaceIcon className="XRCCIcon"/>). In Local Space, the gizmo and the 3 axes for Move Tool and Rotate Tool follow the rotation direction of the object from the object's anchor point, whereas in Global Space the gizmo always anchor at the centre point of the object and face the same direction (0°).

|Local Space|World Space|
|:---------:|:---------:|
|![](/img/ObjectTransformation/LocalSpace.png)|![](/img/ObjectTransformation/WorldSpace.png)|
|Object with offset (1, 0, 0) in Local Space|Object with offset (1, 0, 0) in World Space|