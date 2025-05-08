## Object Transformation {#object-transformation .unnumbered}

XRCC PC provides a set of object transform tools to control the **position**, **rotation**, **scale** and **offset** of selected object(s) in the scene.

<img src="/img/ObjectTransformation/EditToolbar.png" alt=""/>

### Object Transform Tool {#object-transform-tool .unnumbered}

When an object is selected, a gizmo will appear for you to control the chosen transform operation. All gizmos have 3 arms pointing the X, Y, and Z axis. Click and drag the arm to transform the object in the indicated axis.

|Tool|Icon|Shortcut|Gizmo|Pop-up Menu|Description|
|----|----|--------|:---:|:-:|-----------|
|*Look Tool*|![](/img/ObjectTransformation/HandTool.png) |Q key|/|/|Provide a clearer view to look and find the objects in the scene.|
|*Move Tool*|![](/img/ObjectTransformation/MoveTool.png) |W key|<img src="/img/ObjectTransformation/MoveGizmo.png" alt="" style={{width:100}}/> |![](/img/ObjectTransformation/MovePopUp.png)|Move the object position. Click and drag the square to move in 2 axes at once.|
|*Rotate Tool*|![](/img/ObjectTransformation/RotateTool.png) |E key|<img src="/img/ObjectTransformation/RotateGizmo.png" alt="" style={{width:100}}/> |![](/img/ObjectTransformation/RotatePopUp.png) |Rotate the object.|
|*Scale Tool*|![](/img/ObjectTransformation/ScaleTool.png) |R key|<img src="/img/ObjectTransformation/ScaleGizmo.png" alt="" style={{width:100}}/> | ![](/img/ObjectTransformation/ScalePopUp.png)|Scale the object. Click and drag the cube to scale in all axes.|
|*Offset Tool*|![](/img/ObjectTransformation/OffsetTool.png) |T key|<img src="/img/ObjectTransformation/OffsetGizmo.png" alt="" style={{width:100}}/> |![](/img/ObjectTransformation/OffsetPopUp.png) |Offset the object’s anchor point (centre). Click and drag the arc to offset in 2 axes at once.|


### Toggle Transform Space {#toggle-transform-space .unnumbered}

![](/img/media/media/image159.png)

Press "**Toggle Transform Space**" (![](/img/media/media/image160.png)) (**Tab key**) in the Edit tab to toggle the transform space from **Local Space** (![](/img/media/media/image160.png)) and **Global Space** (![](/img/media/media/image161.png)). In Local Space, the gizmo and the 3 axes for Move Tool and Rotate Tool follow the rotation direction of the object from the object's anchor point, whereas in Global Space the gizmo always anchor at the centre point of the object and face the same direction (0°).