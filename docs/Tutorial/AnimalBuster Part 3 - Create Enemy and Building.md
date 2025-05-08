---
sidebar_position: 8
sidebar_label: AnimalBuster Part 3 - Create Enemy and Buildings
---

import InspectorIcon from '/img/Icon/InspectorToggle.svg';
import PlayModeIcon from '/img/Icon/PlayMode.svg';
import ImportAssetIcon from '/img/Icon/more.svg';

# AnimalBuster Part 3 - Create Enemy and Buildings

## Overview
You will build an interactive VR shooting game using XRCC in this tutorial. Please go through Animal Buster part 1 and part 2 before this tutorial.

## Step 1: Spawn the Enemy
1. **Open the Asset Panel**:
   - Spawn a **rabbit model** and rename it to **Enemy**.
2. **Set Enemy Attributes**:
   - Enable the following attributes:
     - **Interactable**
     - **Physics**
     - **Use Gravity**
   - Freeze the rotation.
   - Set the scale to **2, 2, 2**.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/1.png)

## Step 2: Define Enemy Variables
1. **Switch to the Behavior Tab**:
   - Open the **Variable Panel**.
2. **Create HP Variable**:
   - Define a number variable named **HP** with a default value of **10**.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/2.png)

## Step 3: Create Take Damage Action
1. **Define the Action**:
   - Create an action named **Take Damage**.
2. **Setup Damage Logic**:
   - Drag the following nodes to check if HP is 0 or above:
     - **Branch** node (from **Flow Control** section)
     - **Get Number** node (from **Variable** section)
     - **Compare** node (from **Math** section)
   - Then, drag the following nodes to subtract HP by 1:
     - **Set Number** node (from **Variable** section)
     - **Get Number** node (from **Variable** section)
     - **Subtract** node (from **Math** section)

![](/img/Tutorial/AnimalBuster/AnimalBuster3/3.png)

## Step 4: Create the Building
1. **Return to the Edit Tab**:
   - Spawn a **wood** in the Asset Panel.
2. **Set Building Attributes**:
   - Enable the following attributes:
     - **Physics**
     - **Use Gravity**

![](/img/Tutorial/AnimalBuster/AnimalBuster3/4.png)

## Step 5: Setup Building Behavior
1. **Go to Wood's Behavior**:
   - Drag the following nodes:
     - **Start Contact** node (from **Item Event** section)
     - **Call Action** node (from **Flow Control** section)
   - This setup will call the **Take Damage** action when the wood contacts the enemy.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/5.png)

## Step 6: Duplicate the Wood
1. **Return to the Edit Tab**:
   - Duplicate the wood object to build your game scene.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/6.png)

## Step 7: Copy Behavior to Bullet
1. **Go to Bullet Behavior**:
   - Copy the behavior from the wood to the bullet to ensure it can also deal damage to the enemy.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/7.png)

## Step 8: Add Protection to Enemy
1. **Open Enemy Behavior**:
   - Define a boolean variable named **Initialized** with a default value of **false** in the **Variable Panel**.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/8.png)

2. **Delay Initialization**:
   - Drag the following nodes:
     - **Wait For** node (from **Flow Control** section) and set it to **2 seconds**.
     - **Set Boolean** node (from **Variable** section) to change **Initialized** to **true**.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/9.png)

## Step 9: Update Take Damage Action
1. **Modify Take Damage Action**:
   - Drag a **Branch** node (from **Flow Control** section) and a **Get Boolean** node (from **Variable** section) into the **Take Damage** action.
   - Use these to check if **Initialized** is true before processing damage.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/10.png)

## Step 10: Create Win Message
1. **Open the Asset Panel**:
   - Spawn a **Text** object.
2. **Set Text Attributes**:
   - Set the position of the Text object to **0, 1.6, 0.5**.
   - Set the rotation of the Text object to **0, 180, 0**.
   - Change the text to **Congratulations**
   - Disable it in Play mode.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/11.png)

3. **Go to Text Behavior**:
   - Create a Action **Show Text** and drag the following nodes:
     - **Show** node (from **Effect** section).

![](/img/Tutorial/AnimalBuster/AnimalBuster3/12.png)

## Step 11: Pop out Message
1. **Modify Take Damage Action in Enemy Behaviour**:
   - Drag the following nodes to check if HP is 0:
     - **Branch** node (from **Flow Control** section)
     - **Get Number** node (from **Variable** section)
     - **Compare** node (from **Math** section)
   - Call the **Show Text** action if HP is 0:
     - Drag the **Call Action** node (from **Flow Control** section)

![](/img/Tutorial/AnimalBuster/AnimalBuster3/13.png)

## Step 12: Create HP Display
1. **Spawn a text object**.
   - Rename to **HP**
   - Parent to the Enemy.
   - Reset the transforms.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/14.png)

2. **Set Text Attributes**:
   - Change the text object attribute:
      - Move a bit upwards.
      - Set font size to 30
      - Set text to 0
   
![](/img/Tutorial/AnimalBuster/AnimalBuster3/15.png)

3. **Go to HP Behavior**:
   - Drag the following nodes:
     - **Start** node (from **Item Event** section)
     - **Repeat** node (from **Flow Control** section)
     - **Set Text** node (from **Text** section)
     - **Get Number** node (from **Variable** section)
     - **Number to Text** node (from **Variable** section)
   - This setup will repeatly update text with HP variable.

![](/img/Tutorial/AnimalBuster/AnimalBuster3/16.png)

## Conclusion
Congratulations! You've successfully created the enemy and building mechanics for the Animal Buster game. You can now interact with these elements in the game scene. Stay tuned for more tutorials!