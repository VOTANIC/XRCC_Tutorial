---
sidebar_position: 6
sidebar_label: AnimalBuster Part 1 - Create a Slingshot
---

import InspectorIcon from '/img/Icon/InspectorToggle.svg';
import PlayModeIcon from '/img/Icon/PlayMode.svg';
import ImportAssetIcon from '/img/Icon/more.svg';

# AnimalBuster Part 1 - Create a Slingshot

## Overview
You will build an interactive VR shooting game using XRCC in this tutorial. This tutorial demonstrates some more advanced ways to control the game throw using behaviours, especially with the math behaviour blocks and flow control behaviour blocks. If you are new to XRCC, we recommend that you complete tutorials 1 - 4 first before going through this tutorial.


## Resources Download

The project used for this tutorial comes in two formats: a starter project for use in this step-by-step tutorial, and a completed project for your reference after you've completed the tutorial.

Project files for the Animal Buster tutorial can be found at:
:::tip[Download Project]
[Click Here to Download](https://votanic-my.sharepoint.com/:f:/p/tobey/Esx9Ohu6EoZMiitJmN-eCBUBOkllMPvF3jpoJ2z5STJUCw?e=noJcfc)
:::

For this tutorial, the starter project will be used to guide you build the VR game in a step-by-step manner. All the necessary assets required for the tutorial are already included in the project, so just open the starter project in XRCC and you are ready to go with the tutorial.

A complimentary video for this tutorial is available from the below link to assist your learning process:

## Step 0: Setup
1. Create a project with a Cartoon Village scene.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/10.png)

2. Open the **Asset Panel**, click the **Select File** Button and import all the assets in our supported materials file.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/11.png)

3. After Import Success, click **No**, because we have already adjusted a good center to the model.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/12.png)

4. There are 4 models in total.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/13.png)


## Step 1: Spawn the Slingshot Model
1. Open the **Asset Panel**.
2. Navigate to the **3D Model** category.
3. Find the **Slingshot model** and spawn it at the **World Center**.
4. Ensure the unit is set to **meters**.
5. Set the Slingshot model's **Z-position** to **1**.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/1.png)

## Step 2: Create the Slingshot Pad
1. In the **Asset Panel**, spawn a **cube** at the **World Center**.
2. Click the **LockScale** button and set the scale to **0.1, 0.1, 0.1**.
3. Set the position to **0, 1.2, 1**.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/2.png)

## Step 3: Define Slingshot Actions
1. Switch to the **Behaviour** tab.
2. Click the **Groups** tab and create two new actions:
   - **Draw the Slingshot**
   - **Release the Slingshot**

![](/img/Tutorial/AnimalBuster/AnimalBuster1/3.png)

## Step 4: Configure the Draw Action
1. Select the **Draw the Slingshot** action.
2. Drag the **Equip** block from the **User** section onto the canvas.
3. Connect it to the **Action Start** node.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/4.png)

## Step 5: Configure the Release Action
1. Select the **Release the Slingshot** action.
2. Drag the following nodes onto the canvas:
   - **Unequip** node from the **User** section.
   - **Vector3** node from the **Math** section.
   - **Set Position** node from the **Motion** section.
3. Set the value of the **Set Position** node to **0, 1.2, 1**. This resets the Slingshot to its default position upon release.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/5.png)

## Step 6: Set Up Controller Input
1. Switch to the **Main behaviour** page.
2. Drag the **Controller Press** node and set the **button index** to **1** (right mouse button).
3. Drag the **Call Action** node and set the action to **Draw the Slingshot**.
4. Drag the **Controller Release** node and change the **button index** to **1**.
5. Drag another **Call Action** node and set the action to **Release the Slingshot**.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/6.png)

## Step 7: Create the Left Band
1. In the **Asset Panel**, spawn a cube at the **World Center** and rename it to **Left Band**.
2. Open the **LockScale** button and set the scale to **0.1, 0.1, 0.1**.
3. Set the offset to **0, 0, 0.5** and position it to the left of the slingshot **-0.5, 1.2, 1**.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/7.png)

## Step 8: Configure Left Band Behavior
1. Switch to the **Behaviour** tab.
2. Drag the **Repeat** node from the **Flow Control** section.
3. Drag the **Look At** node from the **Motion** section.
4. Drag the **Get Position** node from the **Variable** section and set the target to **Slingshot Pad**. Connect this to the **Look At** node's target.
5. Close the **Lock X, Y, and Z** options to allow rotation.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/8.png)

## Step 9: Scale the Left Band
1. Drag the **Set Scale** node from the **Motion** section.
2. Use two **Get Position** nodes from the **Variable** section, targeting **Left Band** and **Slingshot Pad**.
3. Close the **Relative** option to get their local position.
4. Use the **Vector3Distance** node from the **Math** section to calculate the distance between the two positions.
5. Drag a **Vector3** node from the **Math** section and set the result to its **Z** value.
6. Connect the output to the **Set Scale** node's target.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/8.png)

## Step 10: Duplicate the Left Band
1. Duplicate the **Left Band** and rename it to **Right Band**.
2. Set its position to the right corner of the slingshot.

![](/img/Tutorial/AnimalBuster/AnimalBuster1/9.png)

Congratulations! You've successfully created a functioning slingshot for the Animal Buster game.