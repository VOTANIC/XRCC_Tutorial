---
sidebar_position: 4
sidebar_label: Project 3 - Pinball
---

import InspectorToggleIcon from '/img/Icon/InspectorToggle.svg';
import PlayModeIcon from '/img/Icon/PlayMode.svg';
import CopyIcon from '/img/Tutorial/PinBall/Copy.svg';
import PasteIcon from '/img/Tutorial/PinBall/Paste.svg';

# XRCC Tutorial - Pinball

## Overview

You will build an interactive Pinball Machine using XRCC in this
tutorial. This tutorial will focus on using the XRCC's physics features
to create the pinball game, you will learn how to use physics settings
and physics-type behaviour blocks to create a physics-based game. This
is an advanced level XRCC tutorial, if it's your first time using the
XRCC, we recommend that you finish tutorials 1 - 2 first.

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
            <td>Using Physics Setting & Behaviour</td>
            <td>
                <li>Using constraints to limit physics calculation</li> 
                <li>Using the Add Force Physics behaviour</li>
            </td>
        </tr>
        <tr>
            <td>Advanced Behaviour Setting</td>
            <td>
                <li>Using Start Contact block</li>
                <li>Get and set variables</li>
                <li>Using Flow Control behaviour blocks</li>
                <li>Constructing and using Behaviour Actions</li>
            </td>
        </tr>
    </tbody>
</table>


### Tutorial Project

The project used for this tutorial comes in two formats: a starter
project for use in this step-by-step tutorial, and a completed project
for your reference after you've completed the tutorial.

Project files for the pinball tutorial can be found at:

:::tip[Download Project]
[Project files for the Pinball tutorial can be download here](https://votanic-my.sharepoint.com/:f:/p/tobey/EksItvEmOg5JgBEXqqQYxeEB9BxRLrFCxLQSSRyDvGWz2g?e=7BUnsB)
:::

For this tutorial, the starter project will be used to guide you build
the Pinball Machine in a step-by-step manner. All the necessary assets
required for the tutorial are already included in the project, so just
open the starter project in XRCC and you are ready to go with the
tutorial.

A complimentary video for this tutorial is available from the below link
to assist your learning process:

<!-- <https://www.youtube.com/playlist?list=PLzGRE7auiS2ZDRx1JkXcqVhAsjr_9vZc-> -->

### Gameplay Flow
1.  The player press the "Shoot" button to launch the ball into play.

2.  As the ball moves inside the machine, the player's score can be increased by 1 for each contact 
    with bumpers and slingshots.

3.  The player need to deflect the ball from preventing the ball falling out of play by pressing "Rotate" 
    button to control the flippers.

4.  If the ball falls through the bottom, the round ends.

### Assets Provided in the Starter Project
The starter project for the Pinball tutorial provides a comprehensive set of assets and functionalities to get you started. This includes 3D models of different components
of a pinball machine including the playfield, flippers, slingshots, and bumpers.

## Enable Physics and Interactable

In this section, you will set up the physics and interactivity settings for the key components of the pinball machine. This includes configuring the ball's physics behavior, setting up static colliders for walls, and making buttons interactive.

### Enable Ball Physics

1.  First, we select the ball and open the "**Inspector**". Deselect "Interactable" for it then 
set its physics setting to "Enable Physics" and "Use Gravity". Finally, freeze the Z 
position under Constraint.

:::note
The Z position physics constraint limits the ball's physics 
movement to only the X and Y direction, so that it won't bounce off the playfield.
:::

![](/img/Tutorial/PinBall/18.png)

### Enable Wall Physics

1.  We will use the Empty Object as the walls. Select the Empty Objects and open the "**Inspector**"
Then select "Enable Physics" and "Static" under physics setting in the Inspector.
![](/img/Tutorial/PinBall/19.png)

2.  Remember to set the Empty Object to be a wall.

![](/img/Tutorial/PinBall/20.png)

### Enable Bumpers and Slingshots Physics

1.  For the bumpers and the slingshots at the pinball machine middle, we want them to 
contact the ball and have fixed positions. Select the machine's bumpers and slingshots then 
open the "**Inspector**". Select "Enable Physics" and "Static" under physics tab.

![](/img/Tutorial/PinBall/21.png)

### Enable Buttons Interactable

1.  For each of the buttons, open the "Inspector" and enable Interactable.

![](/img/Tutorial/PinBall/22.png)

## Create the Behaviour Flow for Pinball

In this section, you will learn how to create the core gameplay mechanics for a pinball machine. You will implement ball shooting mechanics, flipper controls with proper cooldown timing, and collision behaviors between the ball and various pinball machine elements.

### Shooting and Resetting the Ball

1.  Open the **Ball** object's behaviour panel. Under "**Group**", create 
    an action and rename it to "Shoot". Then toggle the "**Action**" button 
    to make it an action that can be called by other objects.

![](/img/Tutorial/PinBall/23.png)

2. Then switch to the behaviour Library, under the "Physics" category drag the 
    "**Add Force**" block and append it behind the "**Action Start**" block and deselect 
    the "Relative" option, it will add force using the scene's X, Y, Z direction, 
    as opposed to using the Ball object's, which is changing constantly. Add a 
    "**Vector3**" block to the "**Add Force**" block's Force node, then set its Y value 
    to 12. When the "Shoot" button is clicked, we add an upward force to the ball.

![](/img/Tutorial/PinBall/24.png)

3.  Back to the scene and select "Shoot" button. Open the "**Inspector**" and select 
    the "**Action**" option. On the "**Select Instance Panel**", select the Ball object and
    choose the "Shoot" action we have just created. Click the "Select" button.

![](/img/Tutorial/PinBall/25.png)

4.  We want to add force on the ball when it contact with "Collision1". 
    Open the **Ball** object's behaviour panel. Under "**Library**",
    switch to the "**Item Event**" category, find and drag the "**Start
    Contact**" behaviour block onto the behaviour canvas and select
    "**Collision1**" as the "**Target**". Then switch to the
    "**Physics**" category, drag and drop the "**Add Force**" behaviour
    block onto the behaviour canvas. Connect the "**Start Contact**"
    block's out flow node with the "**Add Force**" block's in flow node.
    
    :::note
    *This sets up the behaviour for the ball when it comes into contact
    with the deflector plate. When the contact happens, we will add a
    force on top of the ball's physics calculation to amplify the
    bouncing effect.*
    :::

![](/img/Tutorial/PinBall/26.png)

5.  Add a "**Vector3**" and a "**Random Number**" block to the canvas,
    then connect "**Vector3**" block with the "**Add Force**". Set the
    "**Random Number**" block to generate a random number between **Min
    -2** and **Max -5**, and connect it to the "**Vector3**" block.
    
    :::note
    *This adds a varied force to the X direction every time the ball
    touches the deflector, so the ball will drop to different positions
    for every gameplay.*
    :::

![](/img/Tutorial/PinBall/27.png)

6. On the **Ball** object's Main behaviour layer. Add another "**Start
    Contact**" block onto the behaviour canvas and select "**Trough**"
    as the "**Target**". Then append a "**Set Position**" block to it
    and use a "**Vector3**" block to set its Target position. Copy the
    **X**, **Y**, **Z position** of the Ball from the "**Inspector**" 
    and paste them onto the respective field of the
    "**Vector3**" block. *This behaviour flow will reset the position of
    the Ball when it contacts the Trough.*

![](/img/Tutorial/PinBall/28.png)

7.  Press the "**Play**" button
    <PlayModeIcon className="XRCCIcon"/> and test the shooting function 
    by clicking the "Shoot" button. When the ball contact with object 
    "Collision1" it will bounce away. Finally when it touch the object 
    "Trough", the position will be reset.

### Hitting the Ball with Flippers

1.  Open the left flipper object's behaviour panel.

![](/img/Tutorial/PinBall/29.png)

2.  Under "**Groups**", add a new behaviour group and rename it to "**Rotate**".
    Toggle the "**Action**" button to make it an action that can be
    called by other objects. An "**Action Start**" event trigger block
    will appear on the canvas.

![](/img/Tutorial/PinBall/30.png)

3.  Select the "**Show Item Variables**" button to open the item
    variables panel. Add a new variable named "**rotate**", set the
    variable type to "**Boolean**" and set its default value to
    **False**.

![](/img/Tutorial/PinBall/31.png)

4.  For the "Rotate" action, add a "**Rotate**" block behind the
    "**Action Start**", set the "Rotate" **Time** to **0.1**, then use a
    "**Vector3**" block to set the rotation Angle. Finally, set the
    "**Vector3**" block's **Z** value to **60**.

![](/img/Tutorial/PinBall/32.png)

5.  Select both the "**Vector3**" and "**Rotate**" blocks, Copy
    "<CopyIcon className="XRCCIcon"/>" (**Ctrl + C**) and Paste
    "<PasteIcon className="XRCCIcon"/>" (**Ctrl + V**) or Duplicate
    (**Ctrl + D**) them on the canvas.

![](/img/Tutorial/PinBall/33.png)

6.  Connect the previous "**Rotate**" block's out flow node with the
    copied "**Rotate**" block's in flow node. Then set the **Time** on
    the other "Rotate" block to **0.2** and the **Z** value of the
    "**Vector3**" to **-60**. 
    
    :::note
    *When this action is called, the left
    flipper will rotate 60 degrees clockwise for 0.1 seconds and then
    anticlockwise for 0.2 seconds to its original rotation.*
    :::

![](/img/Tutorial/PinBall/34.png)


7.  Select the "**Rotate**" button and click the selector next to the 
    Rotate button's "**Action**" in the "**Inspector**" and select the **Flipper Left** 
    object's "**Rotate**" action to assign the action to the **Rotate** 
    button. 
    
    :::note
    *This will set up the "Rotate" button to call the "Rotate" 
    action when the button is clicked.*
    :::

![](/img/Tutorial/PinBall/35.png)

8.  Press the "**Play**" button
    <PlayModeIcon className="XRCCIcon"/> and test the flippers by clicking
    the "Rotate" button. The left flipper would rotate and return back
    to its original state, but its rotation would look off if you click
    the button too much and too fast. Now return to behaviour editing to
    fix this issue.

### Set a Cool down Time for Flipper

1.  Return to the "**flipper left**" object's "**Rotate**" action.
    First, we add a "**Set Rotation**" block and after the last
    "**Rotate**" block and set **Time** to **0**, then add a
    "**Vector3**" to set its **Target**. This will instantly set the
    flipper back to its original rotation. Then add a "**Wait For**"
    block after the "**Set Rotation**" block, and set the **Time** to
    **0.1**. *When this action is called, the rotation of the left
    flipper will reset to 0 after it rotates back and wait for 0.1s to
    cool down.*

![](/img/Tutorial/PinBall/36.png)

2.  We then break the connection between the "**Action Start**" block
    and the "**Rotate**" block by dragging and releasing the "Action
    Start" block's out flow node, the connection wire will disappear.
    Then append a "**Branch**" block to the "Action Start" block
    followed by a "**Set Boolean**" block linked to the **False** node
    of the "Branch" block, then connect the "**Set Boolean**" block back
    to the original "**Rotate**" block. For the Branch block's
    Condition, we retrieve the "**flipper left**" object's "**rotate**"
    variable state. Then in the "**Set Boolean**" block, we set the
    "flipper left" object's "rotate" variable to **True**. Lastly, after
    the "**Wait For**" block, we again set the "flipper left" object's
    "rotate" variable to **False** using a "**Set Boolean**" block. *By
    modifying the "Rotate" action this way, the left flipper will only
    start to rotate when the flipper is not currently in rotating
    motion, and it will wait for 0.1 seconds after it's able to be
    called to rotate again.*

![](/img/Tutorial/PinBall/37.png)

3.  Enter play mode and test the newly modified rotate behaviour and
    observe the subtle difference.

4.  Now you can repeat the whole procedure on the right flipper object.
    First create the "**Rotate**" action on the right flipper.

![](/img/Tutorial/PinBall/38.png)

5.  Back to the left flipper and select the whole behaviour flow, 
    copy them and paste them to the flipper right object's "**Rotate**" action.

![](/img/Tutorial/PinBall/39.png)

6.  On the right flipper's behaviour panel, open the "**Show Item Variables**" and 
    add a new variable named "**rotate**", set the variable type to "Boolean" and 
    set its default value to False.

![](/img/Tutorial/PinBall/39-1.png)

7.  After pasting the behaviour flow, change all Target to
    "flipper right" and reverse the **Z** values in the "**Vector3**"
    blocks.

![](/img/Tutorial/PinBall/40.png)

8.  Open the **Flipper Left** object's behaviour panel. Break the
    connection between the "Action Start" and "Branch" block and add a
    "**Parallel**" block between them. Connect one of "**Parallel**"
    block's out flow node with the "Branch" block and add a new "**Call
    Action**" block behind the other node. Finally, set the "**Target
    Action**" of the "**Call Action**" block to "**flipper right.fbx :
    Rotate**". *When this action is called, both sides of the flippers
    will rotate simultaneously.*

![](/img/Tutorial/PinBall/41.png)

### Create Behaviour to the Ball when it Touches the Flippers

1.  From the "**Ball**" object's behaviour panel. Select the behaviour
    flow **outlined below**, then **duplicate** it **2** more times on the
    canvas.

![](/img/Tutorial/PinBall/42.png)

2.  For the first duplicated "**Start Contact**" block, set the Target
    to "**flipper left.fbx**" and change the **X** and **Y** Value of
    the "**Vector3**" blocks to **1** and **5** respectively. Repeat the
    process for the other duplicated "**Start Contact**" block, this
    time set the Target to "**flipper right.fbx**" and change the **X**
    and **Y** Value to -**1** and **5**.

![](/img/Tutorial/PinBall/43.png)

3.  Next, we will add a condition to the flipper object's "Start
    Contact" behaviour flow, so the "Add Force" is only applied to the
    ball if the flipper is rotating. To do so, insert a "**Branch**"
    block between the "**Start Contact**" and the "**Add Force**" block.
    We set a Condition to check the "flipper left" object's "**rotate**"
    variable, and only proceed to "Add Force" if "rotate" is **True**.
    With the "**Ball**" object is selected then open its behaviour
    panel. Remember to set "**Relative**" to false in "**Add Force**" block. 
    Repeat the same procedure for the right flipper. *When
    this action is called, force will only be added when the flippers
    are rotating.*

![](/img/Tutorial/PinBall/44.png)

4.  Now, enter the play mode and test the behaviour. The flippers should
    rotate together when you click the "Rotate" button. When the ball
    hits the rotating flippers, it should bounce off with an added
    force.

![](/img/Tutorial/PinBall/45.png)

## Create the Counting System

In this section, you will learn how to implement a scoring system for your pinball game. You will set up score tracking using variables, created score display functionality, and implemented score incrementing when the ball hits various game elements like bumpers and slingshots. You will also added score reset functionality when the ball falling through the bottom.

1.  Open the **Ball** object's behaviour panel and add a new variable
    named "**Count**", set the variable type to "**Number**" and default
    value to **0**.

![](/img/Tutorial/PinBall/46.png)

2.  Select the Score object and open its behaviour panel. Under
    "**Groups**", create a new action name "UpdateScore". An "**Action
    Start**" event trigger block will appear on the canvas.

![](/img/Tutorial/PinBall/47.png)

3.  Switch to behaviour Library, append a "**Set Text**" block to the
    "**Action Start**" block. Use a "**Get Number**" block to retrieve
    the "**ball**" object's "**Count**" variable value, then use a
    "**Number To Text**" block to convert the number to Text format for
    display by the "Set Text" block. *When this action is called, the
    score will be updated.*

![](/img/Tutorial/PinBall/48.png)

4.  We want to give some score to the player if the ball hits the
    bumpers and slingshots in the playfield. Using the left bumper as an
    example, open its behaviour panel and add a "**Start Contact**"
    block onto the canvas, set the Target to "**Ball**". Then add a
    "**Set Number**" block to update the score. To do so, use a "**Get
    Number**" block to retrieve the current score on the "**Ball**"
    object's "**Count**" variable then use an "**Add**" block to
    increment the score by **1**. Finally, add a "**Call Action**" block
    and set its "**Target Action**" to the "**Score**" object's
    "**UpdateScore**" action, so the updated score will be displayed.

![](/img/Tutorial/PinBall/49.png)

5.  Copy this behaviour flow and paste it to the other Bumpers and
    Slingshots canvas.

![](/img/Tutorial/PinBall/50.png)

6.  Lastly, we want to reset the score to 0 when the ball hits the
    Trough. Open the **Ball** object's behaviour panel, add a "**Set
    Number**" block behind the "**Set Position**" block and use it to
    set the "Count" variable on the "Ball" object to 0. Then switch to
    the "**Flow Control**" category, drag and drop the "**Call Action**"
    block and set its "**Target Action**" to the "**Score**" object's
    "**UpdateScore**" action. *When the ball contacts the Trough, the
    score will be reset to 0.*

![](/img/Tutorial/PinBall/51.png)

7.  Finally, press the "Play" button
    <PlayModeIcon className="XRCCIcon"/> and test the counting system by
    pressing the "Shoot" button to shoot the ball and deflecting the
    ball with the flippers by pressing the "Rotate" button. Notice that if the
    ball makes contact with bumpers or slingshots, the score text should
    increase by one.