import PlayModeIcon from '/img/Icon/PlayMode.svg';

# Scene View

The Scene View is accessible under the **Edit** tab, it visualizes the Scene in 3D space. While in **Edit Mode**, the Scene View allows you to navigate and edit the scene, and interact with different objects in the scene. While in **Play Mode**, the Scene View simulates the final visual representation of the created XR scene in first-person perspective, where you can test out the interactions designed for the scene. 

A collection of **Assets** arranged on the left side of the interface, with the **Edit Tools** positioned at the bottom of the frame. The Edit Tools section displays your current editing tool and enables you to choose a different tool through a simple mouse click.

![](/img/Workspace/WorkspaceWithoutArrow.png)

## Edit Mode {#edit-mode .unnumbered}

To navigate the user's view in **Edit Mode**, different navigation tools can be used.

### Mouse Control {#mouse-control .unnumbered}

| Action                    | Control                                                              |
|:-------------------------:|----------------------------------------------------------------------|
| *Move the view*           | Drag with Middle Mouse Button (or Left Mouse Button with Look Tool). |
| *Rotate the view*         | Drag with Right Mouse Button.                                        |
| *Move forward / backward* | Scroll with Scroll Wheel.                                            |

### Flythrough Mode {#flythrough-mode .unnumbered}

By clicking and holding the **Right Mouse Button** on the scene, the control enters **Flythrough mode**, allowing the user to control the view using the keyboard.



<table>
    <thead>
        <tr>
            <th colspan='2'>While holding Right Mouse Button</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="FirstCell"><center><i>Move forward</i></center></td>
            <td><center>W</center></td>
        </tr>
        <tr>
            <td class="FirstCell"><center><i>Move backward</i></center></td>
            <td><center>S</center></td>
        </tr>
        <tr>
            <td class="FirstCell"><center><i>Move left</i></center></td>
            <td><center>A</center></td>
        </tr>
        <tr>
            <td class="FirstCell"><center><i>Move right</i></center></td>
            <td><center>D</center></td>
        </tr>
        <tr>
            <td class="FirstCell"><center><i>Move up</i></center></td>
            <td><center>Space</center></td>
        </tr>
        <tr>
            <td class="FirstCell"><center><i>Move down</i></center></td>
            <td><center>Shift</center></td>
        </tr>
    </tbody>
</table>

### Scene Gizmo {#scene-gizmo .unnumbered}

The **Scene Gizmo** can be found in the upper-right corner of the scene; the 6 conical arms are always aligned to the **X, Y, and Z axis**, with the 3 labelled colored arms representing the positive direction.

![](/img//media/media/image13.png)

By clicking on the **conical arm**, the viewing angle will **snap to the axis** represented by the arm.

## Play Mode {#play-mode .unnumbered}

The Play Mode can be initiated by pressing "**Play Mode**" (<PlayModeIcon className="XRCCIcon"/>) in the Edit tab. During Play Mode, you assume the perspective of the robot in the scene and use the keyboard to control.

### Play Mode Control {#play-mode-control .unnumbered}

 | Action                                               |     Key    |
 |:----------------------------------------------------:|:----------:|
 | *Move forward*                                       |      W     |
 | *Move backward*                                      |      S     |
 | *Move left*                                          |      A     |
 | *Move right*                                         |      D     |
 | *Look*                                               |    Mouse   |
 | *Interact*                                           |     LMB    |
 | *Grab*                                               |     RMB    |
 | *Button 2*                                           |     MMB    |
 | *Jump (when Gravity is Enabled)*                     |    Space   |
 | *Move up (when Gravity is Disabled)*                 |    Space   |
 | *Move down (when Gravity is Disabled)*               |    Shift   |

To return to Edit Mode, press **Esc**.