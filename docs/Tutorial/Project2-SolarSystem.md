---
sidebar_position: 2
sidebar_label: Project 2 - Solar System
---

# XRCC Tutorial - Solar System

## Overview

You will build a simulated Solar System using XRCC in this tutorial.
This tutorial builds on top of the last Museum tutorial to teach you
more advanced scene building and behaviour techniques. You will learn
how to build a multi-scene XR project with gravity by going through this
tutorial. We recommend that you do this tutorial after finishing the
Museum tutorial.

### Techniques Covered

You will learn the following techniques in this tutorial:

<table>
    <thead>
        <tr>
            <th>Technique</th>
            <th>Specific Techniques Covered</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Basic Scene Operation</td>
            <td>
                <ul>
                    <li>Set scene skybox</li>
                    <li>Toggle scene gravity setting</li>
                    <li>Create scene</li>
                    <li>Duplicate scene</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Advanced Scene Building</td>
            <td>
                <ul>
                    <li>Using Link tool to create parent / child relationship</li>
                    <li>Using Offset tool to make object rotate about an external tool</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Configure 3D Object</td>
            <td>
                <ul>
                    <li>Set 3D object material</li>
                    <li>Setting physics for 3D objects</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Advanced Behaviour Building</td>
            <td>
                <ul>
                    <li>Using physics behaviour</li>
                    <li>Using variables in behaviour</li>
                    <li>Change scene using behaviour block</li>
                    <li>Using control flow behaviour blocks</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Tutorial Project

The project used for this tutorial comes in two formats: a starter
project for use in this step-by-step tutorial, and a completed project
for your reference after you've completed the tutorial.

Project files for the solar system tutorial can be found at:

:::tip[Download Project]
[Project files for the Solar System tutorial can be download here](https://votanic-my.sharepoint.com/:f:/p/tobey/EkSA27w8KLtOrulMquMY_y0B2GCx4g57sAkc03xgXYl4MQ?e=cNQiKl)
:::
<!-- -   **Starter project**:

    -   XRCC 2/Docs/Tutorial/Starter/02_SolarSystem_Starter.ccdata

-   **Completed project**:

    -   XRCC 2/Docs/Tutorial/Completed/02_SolarSystem_Completed.ccdata -->

For this tutorial, the starter project will be used to guide you build
the Solar System in a step-by-step manner. All the necessary assets
required for the tutorial are already included in the project, so just
open the starter project in XRCC and you are ready to go with the
tutorial.

<!-- A complimentary video for this tutorial is available from the below link
to assist your learning process:

<https://www.youtube.com/playlist?list=PLzGRE7auiS2ZDRx1JkXcqVhAsjr_9vZc-> -->

### Gameplay Flow
1.  The player can observe the orbit of the entire solar system in the main scene.

2.  The player can select a planet to transition to the corresponding scene of the selected planet.

3.  In the planet's scene, the player can experience the gravity of that planet by grabbing 
    and releasing objects or performing similar actions.

4.  The player can press the return button to go back to the main scene and explore all planets.

### Assets Provided in the Starter Project
The starter project for the Solar System tutorial provides a comprehensive set of assets and functionalities to get you started. This includes images of different planets in the solar system like Earth and Mars. There are also 3D models of planets like Saturn and the Sun, as well as objects like a rabbit. Inside the project, the entire Solar System is almost fully configured except for the Earth and the Moon.

## Set the Scene Environment

In this section, we configured the basic scene settings to create an environment for the Solar System. By setting the default tool to Wand and extending its interaction scope, users can easily interact with planets from a distance. Disabling gravity creates a realistic space-like environment where users can float freely.

### Configure Scene's Gameplay Setting

1.  Select "**User Setting**" and press "**Inspector**", set the Default Tool to "**Wand**"
    at "XR Setting" tab.

![](/img/Tutorial/SolarSystem/06.png)

2.  Select "Play Mode" tab and set "**Interaction Scope (Wand Length)**" to "**50**", *this allows you to use a longer wand
    to interact with the virtual environment and teleport to different
    positions in the scene*. Then deselect the "**Use Gravity**" option
    so user can float in space during game play.

![](/img/Tutorial/SolarSystem/07.png)

## Create the SOLAR SYSTEM

In this section, we will create the Earth and Moon objects to complete the solar system. We'll use basic 3D sphere models and apply textures to make them look realistic. By following these steps, you will learn how to add, position, scale and texture 3D objects in XRCC.

### Add Earth using Sphere Model

1.  We will use the Sphere 3D Model to create the Earth, open the
    "**Asset Panel**" and from the "**3D Model**" tab, select
    and add the "**Sphere**" object to the scene.

![](/img/Tutorial/SolarSystem/08.png)

2.  With the sphere selected, use the **transform tools** to set up
    the Earth or reposition the sphere at position to (34, 0, 0) and set the 
    scale to (5, 5, 5) in the "**Inspector**".

![](/img/Tutorial/SolarSystem/09.png)

3.  Select the sphere in the scene and open the "**Inspector**", 
    under the Model section set the "**Material**" texture to
    the "**earth.jpg**" image in your asset library. 
    Rename the planet to "Earth" in the Inspector.

![](/img/Tutorial/SolarSystem/10.png)

4. Duplicate the sphere and change the texture to "moon.jpg" and rename the planet to Moon.

![](/img/Tutorial/SolarSystem/10-1.png)

5.  Reposition the sphere at position (38, 0, 0) and set the scale to (2, 2, 2).

![](/img/Tutorial/SolarSystem/10-2.png)

## Make the Solar System Orbit and Rotate

In this section, we created a realistic orbital system where the Earth rotates around its axis while orbiting the Sun, and the Moon orbits around the Earth. We used XRCC's behavior system to control the rotation and orbital speeds of celestial bodies, making them move in a coordinated way. By using empty objects as orbital pivots and linking objects together, we created a hierarchical system that mimics the real solar system's movements. The speed control variables allow users to adjust the simulation speed to better observe the planetary motions.

1.  Select the **Sun** object and click on the "**Behaviour**" tab to
    switch to its behaviour panel. *As gravity keeps all planets orbit
    around the sun, we will use the Sun object to store the planets'
    orbital and rotational speed data.*

![](/img/Tutorial/SolarSystem/13.png)

2.  Select the "**Variables**" button to open the "**Instance Variable Panel**". You can see there are 
    different type of variable for each planets.
    
![](/img/Tutorial/SolarSystem/13-1.png)

    (Planet Name)OrbitalPeriod: the orbital period of the specific planet.

    (Planet Name)RotationPeriod: the rotation period of the specific planet.
    
    OrbitSpeedControl: to control the orbit speed of all planets. Feel free to change to a different number. 
    
    RotateSpeedControl: to control the rotational speed of all planets. Feel free to change to a different number. 

### Set the Earth to Rotate

1.  Select the **Earth** object and click on the "**Behaviour**" tab
    to switch to its behaviour panel.

![](/img/Tutorial/SolarSystem/21.png)

2.  In the "**General Event**" category, drag and drop the "**Start**"
    event trigger block onto the behaviour canvas. Then switch to the
    "**Flow Control**" category, drag and drop the "**Repeat**" block
    onto the behaviour canvas, and add the "**Rotate**" block from
    "**Motion**" category to the behaviour canvas as well. Connect the
    "**Start**" block's out flow node with the "**Repeat**" block's in
    flow node, and "**Repeat**" block's out flow node with "**Rotate**"
    block's in flow node. *This sets up the basic logic for the Earth
    object to repeatedly rotate when the scene starts.*

![](/img/Tutorial/SolarSystem/22.png)

3.  We then specify how much the object will rotate. In the "**Math**"
    category, drag and drop the "**Vector3**" block onto the behaviour
    canvas. Then, set the **Y** value of the "**Vector3**" block to
    **360** and connect its **Output** node with the "**Rotate**"
    block's **Angle** node. *We set the planets to rotate 360 degrees
    repeatedly, yet the rotation will not happen with the Time set to
    0.*

![](/img/Tutorial/SolarSystem/22-1.png)

4.  Drag and drop a "**Multiply**" block from the "**Math**" category,
    then switch to the "**Variable**" category, drag and drop **two**
    "**Get Number**" blocks onto the behaviour canvas. For both "**Get
    Number**" blocks, select "**sun**" as the "**Target**", then set one
    "**Key**" to "**EarthRotationPeriod**" and the other to
    "**RotateSpeedControl**". Connect one "**Get Number**" block's
    **Output** node with the "**Multiply**" block's **A** node and
    connect the other "**Get Number**" block's **Output** node with
    "**Multiply**" block's **B** node. Finally, connect "**Multiply**"
    block's **Output** node with "**Rotate**" block's **Time** node.

![](/img/Tutorial/SolarSystem/22-2.png)

5.  This is the close-up of the whole behaviour flow of the Earth.
    *This sets the Earth object to rotate 360 degrees against its
    centre of origin every period, which value is defined as the product
    of the "EarthRotationPeriod" and the "RotateSpeedControl" values.*

![](/img/Tutorial/SolarSystem/23.png)

6.  Press the "**Play**" button to enter play mode, move or
    teleport to near the Earth planet and check if it's rotating as
    expected. Then use the "**Esc**" button to return to scene editing.

### Set the Earth to Orbit

1.  We will use an empty object **Linked to a Planet** to create the
    Orbit effect. First, add an "**Empty Object**" to the scene and make
    sure it's **spawned at the origin** (same position as the Sun).
    Rename it as "earthEmpty"

![](/img/Tutorial/SolarSystem/24.png)

2. Hide all objects by clicking the "hide All button". Unhide the "earthEmpty" 
    and the "Earth". 

![](/img/Tutorial/SolarSystem/25.png)
    

3. Select the "**Earth**" object, press the "**Link to another
    item**" button then point and click the **earthEmpty** object to
    make earthEmpty a **parent** of the **Earth** object. *Now the
    Earth object will move together with the earthEmpty parent
    object while keeping the same relative position / rotation between
    them.*

![](/img/Tutorial/SolarSystem/26.png)

5.  To confirm the two objects are linked successfully, you can select
    the "earthEmpty" parent object in the scene and observe that the
    "Earth" child object is also selected.

![](/img/Tutorial/SolarSystem/27.png)

6.  With the **earthEmpty** object still selected, click on the
    "**Behaviour**" tab to switch to its behaviour panel.

![](/img/Tutorial/SolarSystem/28.png)

7.  Drag and drop a "**Start**" event trigger block, a "**Repeat**"
    block and a "**Rotate**" block onto the behaviour canvas in the same
    way as you did for the Earth object, then connect the blocks
    sequentially.

![](/img/Tutorial/SolarSystem/29.png)

8.  Following the same logic for rotating the "Earth" object, drag and
    drop a "**Vector3**" block and a "**Multiply**" blocks, then add
    **two** "**Get Number**" blocks onto the behaviour canvas. Set the
    **Y** value of the "**Vector3**" block to **360** and connect its
    **Output** node with the "**Rotate**" block's **Angle** node. For
    both "**Get Number**" blocks, select "**sun**" as the "**Target**",
    then set one "**Key**" to "**EarthOrbitalPeriod**" and the other
    to "**OrbitSpeedControl**". Connect one "**Get Number**" block's
    **Output** node with the "**Multiply**" block's **A** node and
    connect the other "**Get Number**" block's **Output** node with
    "**Multiply**" block's **B** node. Finally, connect "**Multiply**"
    block's **Output** node with "**Rotate**" block's **Time** node.

![](/img/Tutorial/SolarSystem/30.png)

9.  This is the close-up of the whole behaviour flow of the
    earthEmpty. *This sets the earthEmpty object to rotate 360
    degrees against its centre of origin every period, which value is
    defined as the product of the "EarthOrbitPeriod" and the
    "OrbitSpeedControl" values.*

![](/img/Tutorial/SolarSystem/31.png)

10. Now we can link the moon to the earth.

![](/img/Tutorial/SolarSystem/31-1.png)

11. After linking the Moon to the Earth, open the Item Panel, and 
    you should see the Moon become a child of the Earth, which is 
    also a child of earthEmpty.

![](/img/Tutorial/SolarSystem/31-2.png)

12. Press the "**Play**" button to enter play mode, Earth is rotating 
    and orbiting. The Moon is orbiting along the earth. 
    Then use the "**Esc**" button to return to scene editing.


##  Create New Planet Scene

In this section, you can learn how to create interactive scenes for both the Earth and Moon, complete with grabbable objects, custom gravity settings. we will also implement scene transitions to allow the player to travel between the solar system view and detailed planet scenes. Also, adding outline effects to provide clear visual feedback for interactive elements, enhancing the user experience.

### Add the Welcome Text

1.  Open the "**Asset Panel**" and from the "**Special Objects**"
    tab, select and add the "**Text**" to the scene to create a
    Welcome Textbox.

![](/img/Tutorial/SolarSystem/32.png)

2.  Use the **transform tools** (move / rotate / scale) to reposition
    the text object. Then open the "**Inspector**" to set up the
    text content, font size, and colour of the text object.

![](/img/Tutorial/SolarSystem/33.png)

### Set up the Moon Scene

1.  Open the "**Scene Menu**", select the "**Empty Scene**" and click 
    the "**Select**" button to create a new scene.

![](/img/Tutorial/SolarSystem/34.png)

2.  Rename the Empty Scene as "**Moon Scene**" and press "**Change
    to**" to open the new Moon Scene.

![](/img/Tutorial/SolarSystem/35.png)

3.  In the Moon Scene, open the "**Asset Panel**" and add a
    "**Ground**" to the scene.

![](/img/Tutorial/SolarSystem/36.png)

4.  Modifying the "**Scale**" of the Ground object using either the
    **transform tools** or directly in the "**Inspector**". *We
    want to have a large enough area for the player to move around.*

![](/img/Tutorial/SolarSystem/37.png)

5.  Add a "**2D Image**" to the scene. *We will be using this 2D
    Image to simulate the appearance of Moon in the scene.*

![](/img/Tutorial/SolarSystem/38.png)

6.  Open the "**Inspector**" and modify the "**Scale**" of the 2D
    Image so it's in similar size as the Ground. Then,
    click the selector next to the "**Choose Image**" option to open the
    Asset Selection Panel and select the "**Moon.jpg**" image in your asset
    library to simulate Moon's ground appearance. *This is the same
    image used for the Sphere of Moon planet, but shown in 2D format
    instead.*

![](/img/Tutorial/SolarSystem/39.png)

7.  Click at any empty space in the scene to select the **Scene** and
    open its "**Inspector**". Here we use the same
    "**stars_milky.jpg**" in your asset library to set the skybox 360
    image.

![](/img/Tutorial/SolarSystem/40.png)

8.  Open the "**Asset Panel**" and press the "**3D Model**"
    button, select and add the 3 "**rabbit**" objects to the scene. Use the
    **transform tools** (move / rotate / scale) to adjust the size and
    position of the rabbit objects.

![](/img/Tutorial/SolarSystem/41.png)

9. Select one of the rabbits object and open its "**Inspector**".
    Make sure both the "**Interactable**", "**Grabbable**" and "**Collider**" options
    are selected. Then, "**Enable**" the Physics setting as well as the
    "**Use Gravity**" option . Repeat these procedures for the other
    rabbit objects.

![](/img/Tutorial/SolarSystem/42.png)

10. Click the scene and in the scene's "Inspector", change the gravity to -1.62 (gravity of moon). 

![](/img/Tutorial/SolarSystem/43.png)

11. You have now finished setting up the grab interaction and enabled
    gravity for the rabbit objects. Press the "**Play**" button and **press the right mouse
    button** to grab the rabbits to test. *They should fall to the ground
    with simulated Moon gravity when you release the mouse button.*

12. Press "**Esc**" to exit play mode after you've done testing your
    scene.

### Set up the Earth Scene

1.  Open the "**Scene Menu**", select the "**Cartoon Village**" scene and click 
    the "**Select**" button to create a new scene.

![](/img/Tutorial/SolarSystem/44.png)

2.  Similar to the moon scene, you can add some assets which belong to the earth 
    props, like the chair and the table in our "3D Model" CCPackage. 

![](/img/Tutorial/SolarSystem/45.png)

3.  Select one of the objects and open its "**Inspector**". Make sure both 
    the "**Interactable**" and "**Grabbable**" options are selected. Then, "Enable" the Physics 
    setting as well as the "Use Gravity" option . Repeat these procedures for the other objects. 

![](/img/Tutorial/SolarSystem/46.png)

4.  As the default gravity is -9.81 (the Earth gravity), we don't need to change the gravity.

![](/img/Tutorial/SolarSystem/47.png)

### Add Welcome Text and Return Button when Clicked

1.  Open the "**Asset Panel**" and from the "**Special Objects**"
    tab, select and add the "**Text**" to the scene.

![](/img/Tutorial/SolarSystem/48.png)

2.  Use the **transform tools** (move / rotate / scale) to reposition
    the text. Then open the "**Inspector**" to set up the
    text content, font size, and colour of the text.

![](/img/Tutorial/SolarSystem/49.png)

3.  Open the "**Asset Panel**" and from the "**Special Objects**"
    tab, select and add the "**Button**" to the scene.

![](/img/Tutorial/SolarSystem/50.png)

4.  Use the **transform tools** (move / rotate / scale) to reposition
    the button. Then open the "**Inspector**" to set up the
    text content, font size, and colour of the button object.

![](/img/Tutorial/SolarSystem/51.png)

5.  Select the button object and open its behaviour panel. Under
    "**Groups**", add a new behaviour group named "**return**" and
    toggle the "**Action**" button to make it an action that can be
    called by other objects. An "**Action Start**" event trigger block
    will appear on the canvas.

![](/img/Tutorial/SolarSystem/52.png)

6.  Switch to behaviour Library, under the "**Scene**" category drag the
    "**Change Scene**" block and append it behind the "**Action Start**"
    block. Select the "**Solar System**" scene under "Change Scene"
    block's "**Scene**" option, then connect the "**Action Start**"
    block and the "**Change Scene**" block. *When this action is called,
    the scene will be changed back to the Solar System.*

![](/img/Tutorial/SolarSystem/53.png)

7.  Select the "**Button**" and open its "**Inspector**"
    select the "**Action**" option for the button at "**Action**" tab. On the
    "**Select Instance Panel**", select the button object from the item list on the
    left side, then choose the "**return**" action on the right and
    select the action. *This will set up the "Click here to return solar
    system" button object to call the "return" action to change back to
    the "Solar System" scene when the button is clicked.*

![](/img/Tutorial/SolarSystem/54.png)

8.  Duplicate the Text and Button to the Moon Scene. 

![](/img/Tutorial/SolarSystem/54-1.png)

9.  Go to the Solar System Scene, select the Earth and open the behaviour panel.

![](/img/Tutorial/SolarSystem/55.png)

10. In behaviour Library, under the "**Item Event**" category drag the
    "**Click**" block.

![](/img/Tutorial/SolarSystem/56.png)

11. under the "**Scene**" category drag the "**Change Scene**" block. Select the 
    "**Earth**" scene under "Change Scene" block's "**Scene**" option, then 
    connect the "**Click**" block and the "**Change Scene**" block.

![](/img/Tutorial/SolarSystem/57.png)

12. Then repeat the same procedure in Moon's behaviour Main layer canvas.

![](/img/Tutorial/SolarSystem/57-1.png)

13. Select "**User Setting**" in the scene and open the "**Inspector**" 
    to configure the scene settings. Select "**Wand**" as the
    "**Default Tool**". This sets the Wand tool as the default
    interaction tool in XR mode. Then change the "**Interaction Scope (Wand Length)**" into
    "**50**".

    ![](/img/Tutorial/SolarSystem/64.png)

### Add Outline Effect to Objects

1.  In the Earth scene, open the behaviour panel for one of the items.
    Construct a behaviour flow using "**Start**" event trigger block,
    "**Color**" Math block and "**Outline**" Effect block. Set the
    "**R**" (red) value of the Color block to **255** and the "**A**"
    (alpha) value of the Color block to **255**, and all other values to
    0, the color preview under the "**Output**" node should show a red
    color. Connect all the blocks in the same manner as shown below.
    *This gives the items a red outline when scene starts.*

![](/img/Tutorial/SolarSystem/58.png)

2.  Drag the behaviour canvas to an empty space, create another
    behaviour flow using "**Start Pointing**" event trigger block, a
    "**Color**" Math block and an "**Outline**" Effect block. Set the
    "**G**" (green) value of the Color block to **255** and the "**A**"
    (alpha) value of the Color block to **255**, and all other values to
    0, the color preview under the "**Output**" node should show a green
    color. Connect all the blocks in the same manner as shown below.
    *This gives the rocks a green outline when pointed at with the
    Wand.*

![](/img/Tutorial/SolarSystem/59.png)

3.  Copy and paste the above behaviour blocks to another empty space on
    the canvas, then replace the "**Start Pointing**" block with a
    "**Stop Pointing**" block. Set the "**Color**" block value to red
    for this behaviour flow. *This time, the rocks will again show a red
    outline when the Wand stops pointing at it.*

![](/img/Tutorial/SolarSystem/60.png)

4.  Select the whole outline effects behaviour flow, Copy (**Ctrl + C**) and Paste
    (**Ctrl + V**) all the behaviour
    flows to the other items.

5.  You have now finished setting up the outline effects for the items. 
    Press the "**Play**" button and test your scene. The items
    would show a green outline when pointed and a red outline in other
    circumstances. Press "**Esc**" to exit play mode after you've done
    testing your scene.

6.  We can apply the same technique to add outline to the planets in the
    "Solar System" scene. Use the Earth object as an example, we first
    select it and open its behaviour panel.

![](/img/Tutorial/SolarSystem/61.png)

7.  Paste (**Ctrl + V**) the whole outline
    effects behaviour flow onto the Earth object's Main layer canvas. Then  
    repeat the same procedure to Moon's behaviour Main layer canvas.

![](/img/Tutorial/SolarSystem/62.png)

8.  Repeat the same procedure to Moon's behaviour Main layer canvas.

![](/img/Tutorial/SolarSystem/62-1.png)

9. You have now finished setting up the outline effects for the Earth
    and moon planet. Press the "**Play**" button and test your scene, then use the
    Wand to click the "**Earth**" planet to enter the Earth scene.

    ![](/img/Tutorial/SolarSystem/65.png)

10. Press "**Esc**" to exit play mode after you've done testing the
    change scene feature.

