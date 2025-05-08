---
sidebar_position: 7
sidebar_label: Inspector
---

import InspectorToggleIcon from '/img/Icon/InspectorToggle.svg';
import RenameIcon from '/img/Icon/Rename.svg';
import EntitySettingIcon from '/img/Icon/EntitySetting.svg';
import LinkIcon from '/img/Icon/Link.svg';

# Inspector

Press "**Inspector Tool**" (<InspectorToggleIcon className="XRCCIcon"/>) (**I**) in the top menu or press "**Inspector**" under the "**View**" tab in the drop-down menu to toggle the inspector panel. The panel displays the detail of the selected object and allows you to modify various object properties. Some special objects have more unique settings that can only be accessed through the panel.

## Common Configuration

Some configuration settings are common among all objects.
<center>![](/img/Inspector/InspectorCommonSettings.png)</center>

-   **Basic Information**: The panel allows the user to change the object's name and modify the object transform values directly. Press "**Rename**" (<RenameIcon className="XRCCIcon"/>) and type to rename the object.

:::tip

to precisely modify object transform, select the corresponding text box and enter the new value in the box.

:::

-   **Hide In Play**: You can toggle the "**Hide in Play**" option to **disable the object in Play Mode**. If "**Hide in Play**" is enabled, the object cannot be interacted with by the user directly in Play Mode.

-   **Hide in Editor**: You can toggle the "**Hide in Editor**" option to **disable the object in Edit Mode**. If "**Hide in Editor**" is enabled, the object cannot be edited by the user in Edit Mode while it still enabled in Play Mode. It is equivalent to "**Hide**" button in Item Menu.

-   **Interactable**: You can toggle the "**Interactable**" checkbox to allow object interactivity during Play Mode. If "**Interactable**" is enabled, the object will be visible and accessible to the user during Play Mode. If \"Interactable\" is not enabled, the object will still be displayed in Play Mode, but users will not be able to interact with it.

-   **Grabbable**: You can toggle the "**Grabbable**" checkbox to allow a built-in grabbing interaction in **Play Mode**. However, "Interactable" need to be enabled to make the object grabbable. 
:::note
If "Grabbable" is enabled, the user can grab and hold the object by long-press the right mouse button.
- Grab in PC Mode: You can grab and hold the object by long-press the **right mouse button**.
- Grab in XR Mode: You can grab and hold the object by pressing the **[Grap Button](/XRMode/Introduction/BasicControl.md)**.
:::
-   **Transform:** You can configure the parameters of position, rotation, scale, offset to adjust the value of an object. Both aspects can be configure the X, Y and Z dimensions value. You can also press the average scale button to ensure the object can maintain the same size ratio when you adjusting the scale of the object. You can also press the reset button to let all parameters return to the default value. 

:::note
Please refer to the XR Mode user guide for details of the grabbing action.
:::

## Physics Configuration

<center> ![](/img/Inspector/InspectorPhysicsPanel.png) </center>

-   **Physics:** You can toggle the "**Enable**" check box to allow physics-based interactions. If "Physics" is enabled, you can configure parameters like gravity, friction, bounciness, and mass to simulate physics in your Project to ensure that the objects correctly accelerate and respond to collisions, gravity, and various other forces.

| Physics settings    | Description                                    |
|:-------------------:|------------------------------------------------|
| **Use Gravity**| The object will be affected by the **gravitational force**, causing it to fall or move downward.                                                      |
| **Static**     | The object remains **fixed in place** and does not move or react to physics forces.|
| **Friction**   | Friction determines the friction, or the resisting force of the object when sliding on another surface. There are four levels in Configuration:Zero, Low, Mid and High. |
| **Bounciness** | Bounciness determines the bounciness, or the degree of elasticity exhibited by an object when it collides with a surface or another object There are four levels in Configuration: Zero, Low, Mid and High.|
| **Mass**       | The mass value for a object indicates **how heavy or light it is** compared to other objects in the scene.|
| **Constraint** | Constraints **restrict movement along certain axes**. You can toggle “Freeze Position” or “Freeze Rotation” check box to disable movement or rotation in certain axes. Constraints restrict movement along certain axes.|

## Text Object Configuration

[Text Object](/PCMode/SceneCreation/AddObjecttoScene/#special-object-type) has the extra configuration of the display text, font size, padding, font color, and background color.

<center> ![](/img/Inspector/InspectorTextPanel.png) </center>

| Text settings     | Description                                             |
|:-----------------:|---------------------------------------------------------|
| Text              | The text shown in the text box.                         |
| Font Size         | Adjust font size.                                       |
| Padding           | Adjust the margin length between the text and the edge. |
| Font Color        | Adjust font color.                                      |
| Background Color  | Adjust background color.                                |

You can click on the color to launch the Color Panel for color selection. The font Color is preset as White (Hex-color: #FFFFFFFF, RGBA: 255,255,255,255). The Background Color is preset as Transparent Black (Hex-color: #00000000, RGBA: 0,0,0,0).
:::tip
There is an 6 digit color code in the Hex-color box to set the color value. First two digit codes relate to Red color value. The third and fourth digit codes represent Green Color value. The last two digit codes represent Blue colour value. The text box next to the Hex-color box takes value of percentage which is the extent of transparency.
:::

<center> ![](/img/Inspector/InspectorColourPanel.png) </center>

## 2D Image/Video Configuration

[2D Image and 2D Video Object](/PCMode/SceneCreation/AddObjecttoScene/#special-object-type) both has the extra configuration of Keep Aspect Ratio and Two-Sided.

<center> ![](/img/Inspector/Inspector2DImagePanel.png) </center>

If **Keep Aspect Ratio** is enabled, the default size of the object will follow the aspect ratio of the media asset instead of a square. If **Two-Sided** is enabled, the user can also see a mirrored image/video when viewed from the back instead of a transparent object.

<center> ![](/img/Inspector/Inspector2DVideoPanel.png) </center>

By default, the 2D Video Object has an extra configuration of "**Control Button**". You can toggle the "Control Button" option to enable the control buttons shown in the **Play Mode**.

<center> ![](/img/Inspector/VideoControlButton.png) </center>

|  Button in Play Mode|                  Functions                      |
|:---------------------:|-------------------------------------------------|
|![](/img/Inspector/Button/Fastback.png) |Rewind a portion of the video                  |
|![](/img/Inspector/Button/PlayVideo.png) |Play the video. After the “Play” button is clicked, it will automatically change to the “Pause” button.                             |
|![](/img/Inspector/Button/PauseVideo.png) | Pause the video. After the “Pause” button is clicked, it will automatically change the “Play” button                                  |
|![](/img/Inspector/Button/StopVideo.png) | Stop the video.                                 |  
|![](/img/Inspector/Button/FastForward.png) |  Fast forward a portion of the video|                               

## 3D Image/Video Configuration
[3D Image/Video](/PCMode/SceneCreation/AddObjecttoScene/#special-object-type) has the extra configuration of setting its Image/Video Asset. The 3D Image/Video is represented with a sphere with a radius of 500m. It is better to spawn the 3D Image/Video at world origin to keep it aligned properly.

<center>![](/img/Inspector/Inspector3DImagePanel.png)</center>
<br> </br>
<center>![](/img/Inspector/Inspector3DVideoPanel.png)</center>

In **Edit Mode**, the 3D Image/Video spawned in the scene represents the 360 object. This is used for easy selection and will not be shown in Play Mode.

<center>![](/img/Inspector/3DVideoEditMode.png)</center>

## Document Configuration

[Document Object](/PCMode/SceneCreation/AddObjecttoScene/#special-object-type) has the extra configuration of Keep Aspect Ratio, Two-Sided, Selected Page and Show Button.

<center>![](/img/Inspector/InspectorDocumentPanel.png)</center>

If **Keep Aspect Ratio** is enabled, the default size of the object will follow the aspect ratio of the media asset instead of a square. If **Two-Sided** is enabled, the user can also see a mirrored document when viewed from the back instead of a transparent object. The **Page** list controls the starting page in Play Mode. If "**Show Button**" is enabled, the user can see control buttons in Play Mode.

## Point of Interest Configuration

<center>![](/img/Inspector/InspectorPointOfInterestPanel.png)</center>

You can toggle the "Set Active" option to activate the status of Point of Interest. If "Set Active" is enabled, the object will be shown in green color and the user can travel to the destination of Point of Interest. Otherwise, it will be greyed out. The Orientation of robot represents the direction the user will face after teleportation.

## Button Configuration

| Action | Text | Background | SoundEffect |
|--------|------|------------|-------------|
|![](/img/Inspector/InspectorButtonActionPanel.png) |![](/img/Inspector/InspectorButtonTextPartPanel.png)| ![](/img/Inspector/InspectorButtonBackgroundPanel.png)|![](/img/Inspector/InspectorButtonSoundEffectPanel.png)|

By default, Button object provides "Click" event in Play Mode. When it is clicked, it will trigger designed reusable action (See in Section "[Action Configuration](#action-configuration)"). User can define Text content, background color and sound effect of the button. The configuration is shown below:

<table>
    <thead>
        <tr>
            <th>Configuration</th>
            <th>Function</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan='4'><i><b><center>Text</center></b></i></td>
            <td>Text</td>
            <td>You can change the text of button in Text Box.</td>
        </tr>
        <tr>
            <td>Font Size</td>
            <td>You can change the Font Size of the text.</td>
        </tr>
        <tr>
            <td>Font Padding</td>
            <td>There are four options of Font Padding: <b>None</b>, <b>Small</b>, <b>Medium</b> and <b>Large</b>. This setting determines the margin length between the Text and the edge of the Button.</td>
        </tr>
        <tr>
            <td>Font Color</td>
            <td>You can open the Color Panel to change the color setting of Button text.</td>
        </tr>
        <tr>
            <td rowspan='3'><i><b><center>Background</center></b></i></td>
            <td>Color</td>
            <td>You can open the Color Panel to change the color setting of Button. The default color is white.</td>
        </tr>
        <tr>
            <td>Hover Color</td>
            <td>The Hover Color provides an overlay color effect when the user starts pointing the Button.</td>
        </tr>
        <tr>
            <td>Select Color</td>
            <td>The Select Color provides an overlay color effect when the user clicks the Button.</td>
        </tr>
        <tr>
            <td rowspan='2'><i><b><center>Sound Effect</center></b></i></td>
            <td>Hover Audio</td>
            <td>The Hover Audio provides a sound effect when the user starts pointing the Button.</td>
        </tr>
        <tr>
            <td>Select Audio</td>
            <td>The Select Audio provides a sound effect when the user clicks the Button.</td>
        </tr>
        <tr>
            <td><i><b><center>Action</center></b></i></td>
            <td></td>
            <td>Action configuration determines which action will be applied to the Button Click event.
            This part refers to Action Configuration in the following part.</td>
        </tr>
    </tbody>
</table>





<!-- | Configuration | Function         | Description                       |
|---------------|------------------|-----------------------------------|
|               | Text             | You can change the text of button in Text Box. |
|    **Text**   | Font Size        | You can change the Font Size of the text.   |
|               | Font Padding     | There are four options of Font Padding: None, Small, Medium and Large. This setting determines the margin length between the Text and the edge of the Button.|
+--------------+------------------+-----------------------------------+
| **Background**| Font Color       | You can open the Color Panel to change the color setting of Button text.|
|              | Color             | You can open the Color Panel to change the color setting of Button. The default color is white.|
|              | Hover Color      | The Hover Color provides an overlay color effectwhen the user starts pointing the Button. |
|              | Select Color     | The Select Color provides an overlay color effect when the user clicks the Button.|
+--------------+------------------+-----------------------------------+
|**Sound Effect**| Hover Audio      | The Hover Audio provides a sound effect when the user starts pointing the Button.|
|              | Select Audio     | The Select Audio provides a sound effect when the user clicks the Button.|
+--------------+------------------+-----------------------------------+
| **Action**   |                  | Action configuration determines which action will be applied to the Button Click event. This part refers to Action Configuration in the following part.| -->

## Slideshow 2D Configuration

| Page List | Edit Page | Advanced Settings |
|--------|------|------------------------|
| <center>![](/img/Inspector/InspectorSlideShow2DPageListPanel.png)</center> | <center>![](/img/Inspector/InspectorSlideShow2DEditPagePanel.png)</center> | <center>![](/img/Inspector/InspectorSlideShow2DAdvancedSettingPanel.png)</center> |

This object can provide a [2D slide show](/PCMode/SceneCreation/AddObjecttoScene/#special-object-type). The properties of the various settings are shown below.

<table>
    <thead>
        <tr>
            <th>Configuration</th>
            <th>Function</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan='2'><i><center>Slide</center></i></td>
            <td><center>![](/img/Inspector/SlideShowAddPage.png)</center> </td>
            <td>User can add and delete slides. The maximum number of the slides is 10.</td>
        </tr>
        <tr>
            <td>
            <center>![](/img/Inspector/SlideShowDropDown.png)</center>
            </td>
            <td>
            Using dropdown in edit page, user can switch to configuring different slides.
            </td>
        </tr>
        <tr>
        </tr>
        <tr>
            <td><i><center>Slide Image</center></i></td>
            <td></td>
            <td>User can add Image Assets to Slide.</td>
        </tr>
        <tr>
            <td><i><center>Duration</center></i></td>
            <td></td>
            <td>Duration time is the time interval between slides.</td>
        </tr>
        <tr>
            <td><i><center>Transition</center></i></td>
            <td>The Transition determines which animation will be applied for the transition of Slides </td>
            <td>There are 6 animation which can be chosen:
            <li>Dissolve</li>
            <li>Wipe Left</li>
            <li>Wipe Right</li>
            <li>Push Up</li>
            <li>Push Down</li>
            <li>None: no transition animation</li></td>
        </tr>
        <tr>
            <td><i><center>Keep Aspect Ratio</center></i></td>
            <td></td>
            <td>If <b>Keep Aspect Ratio is enabled</b>, the default size of the object will follow the aspect ratio of the media asset instead of a square.</td>
        </tr>
        <tr>
            <td rowspan='5'><i><center>Advanced settings</center></i></td>
            <td>Two Sided</td>
            <td>If <b>“Two-Sided”</b> is enabled, the user can also see a mirrored image/video when viewed from the back instead of a transparent object.</td>
        </tr>
        <tr>
            <td>Control Button</td>
            <td>If <b>“Control Button”</b> is enabled, the control buttons will be shown in the <b>Play Mode</b>, including Play, Pause, Stop, Last Slide and Next Slide. </td>
        </tr>
        <tr>
            <td>Progress Bar</td>
            <td>If <b>“Progress Bar”</b> is enabled, there will be a bar displaying the progress of Slide show. The duration time is the same as “Duration” configuration. </td>
        </tr>
        <tr>
            <td>Auto</td>
            <td>If <b>“Auto”</b> is enabled, the slides will be shown automatically and repeatedly.</td>
        </tr>
        <tr>
            <td>Enable Caption </td>
            <td>If <b>“Enable Caption”</b> is enabled, the caption text will be shown below the 2D images in Play Mode.</td>
        </tr>
    </tbody>
</table>




<!-- | Configuration  | Function             | Description                  |
|----------------|----------------------|------------------------------|
| Slide          | ![](./media/media/image193.png) | User can add and delete slides. The maximum number of the slides is 10. Using ![](./media/media/image194.png) and ![](./media/media/image195.png) , user can switch to configuring different slides. |
| Slide Image    |                      | User can add Image Assets to Slide. |
| Duration       |                      | Duration time is the time interval between slides. |
| Transition     | The Transition determines which animation will be applied for the transition of Slides.       | There are 6 animation which can be chosen:  Dissolve  Wipe Left  Wipe Right  Push Up  Push Down  None: no transition animation  |
| Keep Aspect Ratio    |                      | If **Keep Aspect Ratio** is enabled, the default size of the object will follow the aspect ratio of the media asset instead of a square.  |
| Advanced settings      | Two Sided            | If **“Two-Sided”** is enabled, the user can also see a mirrored image/video when viewed from the back instead of a transparent object.       |
|                | Control Button       | If **“Control Button”** is enabled, the control buttons will be shown in the **Play Mode**, including Play, Pause, Stop, Last Slide and Next Slide.    |
|                | Progress Bar         | If **“Progress Bar”** is enabled, there will be a bar displaying the progress of Slide show. The duration time is the same as “Duration” configuration.     |
|                | Auto                 | If **“Auto”** is enabled, the slides will be shown automatically and repeatedly.     |
|                | Enable Caption       | If **“Enable Caption”** is enabled, the caption text will be shown below the 2D images in Play Mode.   | -->

## Slideshow 3D Configuration

The function of [Slideshow 3D](/PCMode/SceneCreation/AddObjecttoScene/#special-object-type) Configuration could refer to 3D Image Configuration, except Slideshow 3D Configuration could provide slide show of multiple images.

<center>![](/img/Inspector/InspectorSlideShow3DEditPagePanel.png)</center>
<br> </br>
<center>![](/img/Inspector/InspectorSlideShow3DAdvancedSettingPanel.png)</center>

This object can provide a 3D slide show. The properties of the various settings are shown below.

  <!-- |Configuration       |Function                                                      |Description|
  |:------------------:|--------------------------------------------------------------|-----------|
  |*Slide*             |![](./media/media/image193.png) |   User can add and delete slides. The maximum number of the slides is 10.  Using ![](./media/media/image194.png) and ![](./media/media/image195.png) , user can change the starting slide in Play Mode. |
  |*Slide Image*        |                       |User can add 3D Image or Skybox Assets to Slide. |
  |*Duration*           |                     |Duration time is the time interval between slides.|
  |*Advanced settings*  |Auto  |If **“Auto”** is enabled, the slides will play automatically and looping. | -->

<table>
    <thead>
        <tr>
            <th>Configuration</th>
            <th>Function</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan='2'><i><center>Slide</center></i></td>
            <td><center>![](/img/Inspector/SlideShowAddPage.png)</center> </td>
            <td>User can add and delete slides. The 
            maximum number of the slides is 10.</td>
        </tr>
        <tr>
            <td>
            <center>![](/img/Inspector/SlideShowDropDown.png)</center>
            </td>
            <td>
            Using dropdown in edit page, user can switch to configuring different slides.
            </td>
        </tr>
        <tr>
        </tr>
        <tr>
            <td><i><center>Slide Image</center></i></td>
            <td></td>
            <td>User can add 3D Image or Skybox Assets to Slide</td>
        </tr>
        <tr>
            <td><i><center>Duration</center></i></td>
            <td></td>
            <td>Duration time is the time interval between slides. </td>
        </tr>
        <tr>
            <td><i><center>Advanced settings</center></i></td>
            <td>Auto</td>
            <td>If <b>“Auto”</b> is enabled, the slides will play automatically and looping.</td>
        </tr>
    </tbody>
</table>


Under 3D Slide Show, users can add slides and add slide images. Duration time could be set to control the time interval between slides.

<center>![](/img/Inspector/3DSlideShowEditMode.png)</center>

The 3D Slide show is represented with a sphere with a radius of 500m as shown in the image.

## Light Configuration

[Light](/PCMode/SceneCreation/AddObjecttoScene/#special-object-type) Configuration provides light resources in the play mode.

<!-- <center>![](/img/Light/LightObjectInPlayMode.png)</center> -->
<center>![](/img/Inspector/InspectorLight.png)</center>

There are three types of light.
<table>
    <thead>
        <tr>
            <th>Light Type</th>
            <th>Description</th>
            <th colspan="2">Common Feature</th>
            <th>Unique Feature</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>![](/img/Light/SpotLight.png) <center>Spot Light</center></td>
            <td>It creates a cone-shaped region of illumination with a specified angle and range.</td>
            <td rowspan="4" colspan="2"><center>Light intensity Color</center></td>
            <td><center>Range, Angle</center></td>
        </tr>
        <tr>
            <td>![](/img/Light/DirectionalLight.png)<center>Directional Light</center></td>
            <td>It behaves like the sun, illuminating all objects in the scene from the same direction without diminishing over distance.</td>
            <td></td>
        </tr>
        <tr>
            <td>![](/img/Light/PointLight.png)<center>Point Light</center></td>
            <td>It sends light out in all directions equally.The intensity diminishes with distance from the light, reaching zero at a specified range.</td>
            <td><center>Range</center></td>
        </tr>
    </tbody>
</table>

<!-- | Light Type     | Description        | Common Feature | Unique Feature|
|:----------------:|--------------------|----------------|--------------|
| ![](/img/Light/SpotLight.png) Spot Light  | It creates a cone-shaped region of illumination with a specified angle and range.       | Light intensity Color          | Range, Angle |
| ![](/img/Light/DirectionalLight.png) Directional Light | It behaves like the sun, illuminating all objects in the scene from the same direction without diminishing over distance.    |                |              |
| ![](/img/Light/PointLight.png) Point Light | It sends light out in all directions equally.The intensity diminishes with distance from the light, reaching zero at a specified range. |                | Range        | -->

:::tip
Light is resource-intensive object and might largely impact playback performance, especially in XR
:::

## Option Box Configuration

[Option Box](/PCMode/SceneCreation/AddObjecttoScene/#special-object-type) allows users to create an info panel (when option set to None), a selection menu, a MCQ panel.

<center>![](/img/Inspector/InspectorOptionBox.png)</center>
<center> ![](/img/OptionBoxStructure.png) </center>

<br> </br>
Option Box is composed of three sections, **Title**, **Content** and **Option**.

<table>
    <thead>
        <tr>
            <th>Tab</th>
            <th>Function</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="6"><center>Title</center></td>
            <td><center>*Text*</center></td>
            <td>The text shown in the title box.</td>
        </tr>
        <tr>
            <td><center>*Font Size*</center></td>
            <td>Adjust font size.</td>
        </tr>
        <tr>
            <td><center>*Padding*</center></td>
            <td>Adjust the margin length between the text and the edge.</td>
        </tr>
        <tr>
            <td><center>*Font Color*</center></td>
            <td>Adjust font color.</td>
        </tr>
        <tr>
            <td><center>*Background Image*</center></td>
            <td>Image could be set as image background.</td>
        </tr>
        <tr>
            <td><center>*Background Color*</center></td>
            <td>Adjust background color.</td>
        </tr>
        <tr>
            <td rowspan="6"><center>Content</center></td>
            <td><center>*Content*</center></td>
            <td>The text shown in the content box.</td>
        </tr>
        <tr>
            <td><center>*Font Size*</center></td>
            <td>Adjust font size.</td>
        </tr>
        <tr>
            <td><center>*Padding*</center></td>
            <td>Adjust the margin length between the text and the edge.</td>
        </tr>
        <tr>
            <td><center>*Font Color*</center></td>
            <td>Adjust font color.</td>
        </tr>
        <tr>
            <td><center>*Background Image*</center></td>
            <td>Image could be set as image background.</td>
        </tr>
        <tr>
            <td><center>*Background Color*</center></td>
            <td>Adjust background color.</td>
        </tr>
        <tr>
            <td><center>Content Image</center></td>
            <td><center>*Content Image (Image asset, aspect ratio, fit)*</center></td>
            <td>Optional: The Image shown in the content box.</td>
        </tr>
        <tr>
            <td rowspan="13"><center>Options Detail</center></td>
            <td><center>*Option Arrangement*</center></td>
            <td>The arrangement of the option could be list or grid.</td>
        </tr>
        <tr>
            <td><center>*Action*</center></td>
            <td>The action to trigger when the option is clicked.</td>
        </tr>
        <tr>
            <td><center>*Text*</center></td>
            <td>The text shown in the option box.</td>
        </tr>
        <tr>
            <td><center>*Font Size*</center></td>
            <td>Adjust font size.</td>
        </tr>
        <tr>
            <td><center>*Padding*</center></td>
            <td>Adjust the margin length between the text and the edge.</td>
        </tr>
        <tr>
            <td><center>*Font Color*</center></td>
            <td>Adjust font color.</td>
        </tr>
        <tr>
            <td><center>*Background Image*</center></td>
            <td>Image could be set as image background.</td>
        </tr>
        <tr>
            <td><center>*Background Color*</center></td>
            <td>Adjust background color.</td>
        </tr>
        <tr>
            <td><center>*Normal Color*</center></td>
            <td>Color of the box when it is not selected or clicked.</td>
        </tr>
        <tr>
            <td><center>*Hover Color*</center></td>
            <td>Color of the box when it is pointed at with the wand tool.</td>
        </tr>
        <tr>
            <td><center>*Select Color*</center></td>
            <td>Color of the box when it is clicked.</td>
        </tr>
        <tr>
            <td><center>*Hover Audio*</center></td>
            <td>Audio played when the box is pointed at with the wand tool.</td>
        </tr>
        <tr>
            <td><center>*Select Audio*</center></td>
            <td>Audio played when the box is clicked.</td>
        </tr>
    </tbody>
</table>

## Action configuration

Actions are events that can be remotely triggered by other objects. More detail can be found in [**Create Re-usable Behaviour using Action**](/PCMode/BehaviourManagement/CreateReusableBehaviourUsingAction) session.

## Add Real-World Tracked Entity to Scene

An Entity is an object that can follow the position and rotation of trackers in the real world, such as Vive Tracker, Controller and HMD. We can connect an entity with a given tracker so the entity will always update its position and rotation with the tracker. However, an entity is an empty object. It does not include any model. We still need to link the model we want to the entity.

### Add Entity to Scene

Launch the Tracking Entity Setting Panel by clicking the **\"Entity Setting\"** (<EntitySettingIcon className="XRCCIcon"/>) icon.

In Tracking Entity Setting Panel, toggle the Entity 0 switch to turn it on. Also, the user can change name using the rename button.

<center>![](/img/EntityPanel.png)</center>


### Attach Object to Entity

Select an Object, then use the **\"Link to another item\"** (<LinkIcon className="XRCCIcon"/>) **(Ctrl + L)** to link it with the Entity. It can link up multiple items to a single Entity.

<center>![](/img/Entity/LinkObjecToEntity.png)</center>

### Configure Entity

Select the Entity and open the **Inspector**. You will see the properties we can modify, including the position, rotation, and collider, as well as the list of linked items.

<center>![](/img/Inspector/InspectorEntitTransformPanel.png)</center>
<br> </br>
<center>![](/img/Inspector/InspectorEntityLinkedItemPanel.png)</center>

-   **Linked Items**: A list of items linked to the entity.

<!-- |  ***Linked Items***    | Attribution|
|:----------------:|------------|
|  ***Show Type***   |'Auto' means the linked items will hide in CAVE and Dome but will show in HMD and PC environment during playback. 'On' means the linked items are always shown. 'Off' means the linked items are always hidden.| -->

<table>
    <thead>
        <tr>
            <th>***Linked Items***</th>
            <th>Attribution</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan='3'><i><center>***Show Type***</center></i></td>
            <td><center>Auto</center> </td>
            <td>The linked items will hide in CAVE and Dome but will show in HMD and PC environment during playback</td>
        </tr>
        <tr>
            <td>
            <center>On</center>
            </td>
            <td>The linked items are always shown.</td>
        </tr>
        <tr>
            <td>
            <center>Off</center>
            </td>
            <td>The linked items are always hidden.</td>
        </tr>
    </tbody>
</table>

## Scene and User Configuration

For the detail of scene and user configuration, please refer to [Configure Scene Setting](/PCMode/SceneManagement/ConfigureSceneSetting.md).
