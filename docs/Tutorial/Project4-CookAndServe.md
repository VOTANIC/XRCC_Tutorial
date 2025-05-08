---
sidebar_position: 5
sidebar_label: Project 4 - Cook and Serve
---

import InspectorIcon from '/img/Icon/InspectorToggle.svg';
import PlayModeIcon from '/img/Icon/PlayMode.svg';
import ImportAssetIcon from '/img/Icon/more.svg';

# XRCC Tutorial - Cook and Serve

## Overview
You will build an interactive VR game about cooking and serving feed using XRCC in this tutorial. This tutorial demonstrates some more advanced ways to control the game throw using behaviours, especially with the Flow Control behaviour blocks. If you are new to XRCC, we recommend that you complete tutorials 1 - 3 first before going through this tutorial.

### Techniques Covered

You will learn the following techniques in this tutorial:

<table>
    <thead>
        <tr>
            <th><center>Technique</center></th>
            <th>Specific Techniques Covered</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><center>Using Special Objects</center></td>
            <td>
                <ul>
                    <li>Using Empty Object to trigger behaviour</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Object Physics Setting</center></td>
            <td>
                <ul>
                    <li>Limit physics calculation using Freeze rotation option</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Advanced Behaviour</center></td>
            <td>
                <ul>
                    <li>Changing 3D model</li>
                    <li>Using a series of Flow Control behaviours to branch out the game flow</li>
                    <li>Using Math behaviour blocks</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Tutorial Project

The project used for this tutorial comes in two formats: a starter project for use in this step-by-step tutorial, and a completed project for your reference after you've completed the tutorial.

Project files for the cook and serve tutorial can be found at:

:::tip[Download Project]
[Project files for the Cook and Serve tutorial can be download here](https://votanic-my.sharepoint.com/:f:/p/tobey/EqbS1mZDr4BEl7Io2RA53jEB4DP8mKiWnovch5_Ie7FLoQ?e=vhwkIq)
:::

For this tutorial, the starter project will be used to guide you build the VR game in a step-by-step manner. All the necessary assets required for the tutorial are already included in the project, so just open the starter project in XRCC and you are ready to go with the tutorial.

A complimentary video for this tutorial is available from the below link to assist your learning process:

### Gameplay Flow
1. You are role playing as a chef in a restaurant.
2. Customer will keep ordering food and you need to provide the wanted food to them.
3. Combine the ingredients on the table to make the required food.
4. Serve the food on the plate to the customer.

### Assets Provided in the Starter Project
The starter project for the cook and serve tutorial provides a comprehensive set of assets and functionalities to get you started. This includes a 3D model of a **restaurant** for bulding the scene. Additionally, the project includes a **female adult character** for the customer. You'll also find a **cup** object and **cup with the orange juice**, a **bread** object for making the **chicken burger**, a **chicken** object for cooking the chicken burger, and a **rubbish bin** object for discarding the food. With these assets and functionalities in place, you'll be able to build a complete example of the game flow.

<!--
## Build the Scene and Navigation Area

### Build the Scene

1.  From the Toolbar, press "**More**" (<ImportAssetIcon className="XRCCIcon"/>) to launch the **Asset Panel**, select the "**3D Model**" tab and select the "**restaurant.fbx**" 3D model to add it to the scene.

![](/img/Tutorial/CookAndServe/image4.jpeg)

2.  Open the "**Inspector**" (<InspectorIcon className="XRCCIcon"/>) and deselect "**Interactable**" for the art gallery object. 
    
:::note
As the restaurant is just a background environment in the scene, deselecting Interactable prevents the VR wand from interacting with the object.
:::

![](/img/Tutorial/CookAndServe/image6.jpeg)

### Lay Out the Navigation Area

1.  Open the "**Asset Panel**" and from the "**Special Objects**" tab, select and add a "**Ground**" object to the scene. 
    
:::tip
The ground object allows user to stand on and move/ teleport on the surface.
:::

![](/img/Tutorial/CookAndServe/image7.jpeg)

2.  Use the **transform tools** (move/ rotate/ scale) to adjust the size and position of the ground object, then open the "**Inspector**" and turn off "**Interactable**" for the ground object as well.

![](/img/Tutorial/CookAndServe/image8.jpeg)

3.  Next, spawn a few "**Empty Object**" to the scene. 

:::note
We will make use of the empty objects and configure them to act as virtual walls to prevent the user from moving outside the boundaries of the restaurant.
:::

![](/img/Tutorial/CookAndServe/image9.png)

4.  Adjust the size and position of the empty objects so that they completely cover the counter of the restaurant. Open the "**Inspector**" and deselect "**Interactable**" for the empty object. Then select "**Enable Physics**" and "**Static**" under physics setting in the Inspector. 

:::tip
Setting the empty object as a static physics object ensures the empty object will remain at same place when user collides with it.
:::

![](/img/Tutorial/CookAndServe/image10.png)

5.  Then add a few more empty objects placed directly outside the counter area, set them as static wall as well. 

:::note
This can help prevent objects falling off the counter during interaction.
:::

![](/img/Tutorial/CookAndServe/image11.png)

6.  You have now finished configuring the navigation area of the VR restaurant. Press the "**Play**" button (<PlayModeIcon className="XRCCIcon"/>) and test walking around in the scene. You should be able to stand on the ground and move using the **WASD** key, you will be restricted to just moving inside the Counter area in this project.

![](/img/Tutorial/CookAndServe/image13.png)

7.  Press "**Esc**" to exit play mode after you've done testing your scene.

8.  For a smoother scene building process, you can open the Item Panel and hide all empty objects you used as walls in the Editor, so that they won't be in the way during your later scene building process.

![](/img/Tutorial/CookAndServe/image14.png)
-->

## Create Introduction Message
Create an engaging introduction to the gameplay and background for players experiencing the game for the first time.

### Set Up the Introduction Text and Button Group

1.  Add a new "**Text Object**" to the scene. Reposition the Text Object to in front of the player, then open the "**Inspector**" to set up the text content, font size, and colour of the text object.

![](/img/Tutorial/CookAndServe/image15.png)

2.  Add a new "**Button Object**" to the scene. Reposition the button to under the Text Object, then open the "**Inspector**" to set up the basic properties of the button.

![](/img/Tutorial/CookAndServe/image16.png)

### Set up Behaviour to Hide the Introduction Message

1.  We would like to configure the Button object, so that it hides the Introduction Message when the button is clicked. This time, we will create a new action from the button object's "Action" option, then proceed to configure it in the behaviour panel.

2.  In the Button object's Inspector, open the "**Action**" selector, in the selection panel choose the "**Button Object**" and select "**Add New Action**". A "**New Action**" action will be created, double click it to assign this action to button.

![](/img/Tutorial/CookAndServe/image17.png)

3.  Then switch to the button object's behaviour panel, under "**Groups**", rename the "New Action" behaviour group action to **"Disable"**.

![](/img/Tutorial/CookAndServe/image18.png)

4.  Append a "**Show**" Effect Block to the "**Action Start**" block, then add a "**Call Action**" Flow Control block right after it. Set "**Show**" block's Enable to **false**. *When the button object's "Disable" action is called, we want to hide the button object in scene then call another action.*

![](/img/Tutorial/CookAndServe/image19.png)

5.  In the **"Call Action"** block, launch the selection panel and create a "**New Action**" for **Text Object** in the same manner as you did for the button object's new action.

![](/img/Tutorial/CookAndServe/image20.png)

6.  In the **Text** Object's behaviour panel, select the "New Action" and rename it to **"Disable"**. Append a "**Show**" Effect Block to the "**Action Start**" block, then set "Show" block's **Enable** to **false**. 

:::note
This action plays out in the same manner as the button object's "Disable" action, which hides the introduction text when called.
:::

![](/img/Tutorial/CookAndServe/image21.png)

7.  Press the "**Play**" button (<PlayModeIcon className="XRCCIcon"/>) and test clicking the button in the scene. The introduction message and button should both disappear after clicking the button.

![](/img/Tutorial/CookAndServe/image22.png)

8.  Press "**Esc**" to exit play mode after you've done testing your scene.

9.  As the introduction message objects are already set up, we follow the same principle to hide the text object and the button object in Editor as well.

:::tip
Hiding the text object is optional, but it's a good practice to do so to avoid cluttering the scene with unnecessary objects.
:::

![](/img/Tutorial/CookAndServe/image23.png)

## Create the Interactable Objects in Scene

To enable interaction with certain objects in the game, such as the egg, chicken, and orange, you must set them as interactable and enable physics. This allows for a more immersive experience with these objects.

### Add Interactable to the Plate

1.  Open the "**Asset Panel**" (**G**) and from the "**Special Objects**" tab, select and add an "**Empty Object**" to the scene. 

:::note
Since the plate is inseparable from the restaurant 3D, we will make use of an empty object to add interactivity to it to proxy the plate, so it acts as a virtual trigger point for food serving logic.
:::

![](/img/Tutorial/CookAndServe/image24.png)

2.  Use the **transform tools** (move/ rotate/ scale) to reposition the empty object to the same position as the plate. Open the "**Inspector**" and deselect "**Interactable**" for the empty object. Name the object as "**plate**". 

:::tip
Deselecting Interactable prevents the VR wand from interacting with the object.
:::

![](/img/Tutorial/CookAndServe/image25.png)

### Add and Configure the Ingredient Objects

1.  Open the "**Asset Panel**" (**G**) and from the **"3D Model"** tab, select and add a "**chicken.fbx**" to the scene.

![](/img/Tutorial/CookAndServe/image26.png)

2.  Use the **transform tools** to reposition the chicken onto the counter. Then open its "**Inspector**". Rename it to "**chicken**" and set it to **Grabbable**. Enable Physics and select the "**Use Gravity**" option. We want to limit its physics calculation to just the chicken's position, so it's more controllable during gameplay. This can be achieved with the **Freeze Rotation** options.

:::note
Freezing the rotation can prevents an object from rotating in a specific axis, maintaining its orientation. In this case, we freeze the rotation for both 3 axis, then the chicken will not rotate when you interact with it.
:::

![](/img/Tutorial/CookAndServe/image27.png)

3.  Duplicate the "chicken" model and place it next to the original chicken model.

![](/img/Tutorial/CookAndServe/image28.png)

4.  Change the "**Model Asset**" to "**cup.fbx**" and rename the object to **cup**.

![](/img/Tutorial/CookAndServe/image29.png)

5.  Repeat the same process 3 more times, after that you should have a **chicken**, a **cup**, an **egg**, an **orange**, and a **bread** on the counter.

![](/img/Tutorial/CookAndServe/image30.png)

6.  You have now finished adding the food ingredients to the scene. Press the "**Play**" button (<PlayModeIcon className="XRCCIcon"/>) and test grabbing food in the scene. All food should be grabbable and should drop back to the counter/ ground when you release it.

![](/img/Tutorial/CookAndServe/image31.png)

7.  Press "**Esc**" to exit play mode after you've done testing your scene.

## Create Behaviour To Cook Food

In this section, we will create the behavior to cook food by combining two ingredients and set the 3D model.

### Cooking Food by Combining Two Ingredients and Set 3D Model

1.  Select the chicken object and open its behaviour panel. Add a new **Boolean** variable and name it "**chickenBurger**". Set its default value to false.

![](/img/Tutorial/CookAndServe/image32.png)

2.  On the chicken object's behaviour canvas, add a "**Start Contact**" Item Event Trigger block followed by a "**Set Model**" 3D Model block and a "**Set Boolean**" Variable block, connect the blocks together. On the "Start Contact" block, set the **Target** to the **bread** object, then click the selector on the "Set Model" block and select the "**chicken burger.fbx**" 3D model from your asset library. Lastly, set the "chicken" object's "**chickenBurger**" Boolean variable to **true** using the "Set Boolean" block.

![](/img/Tutorial/CookAndServe/image33.png)

3.  You have now finished editing the chicken. Press the "**Play**" button (<PlayModeIcon className="XRCCIcon"/>) and test grabbing the chicken and use it to touch the bread. The chicken should become a chicken burger.


  ![](/img/Tutorial/CookAndServe/image34.png)


4.  Press "**Esc**" to exit play mode after you've done testing your scene.

5.  Repeat step 1 to step 3 and follow the same logic to create a similar behaviour flow on the "**cup**" object, so that it changes into the "**orange juice.fbx**" model when it comes to contact to the "**orange**" object.

6.  By the same token, Repeat step 1 to step 3 to construct the behaviour of the "**egg**" object, so it turns to an "**egg toast.fbx**" model when it touches the "**bread**" object.

7.  You have now finished creating the food cooking behaviour. Press the "**Play**" button (<PlayModeIcon className="XRCCIcon"/>) and test them by grabbing the ingredient objects and touching the relevant objects. 

:::note
The chicken should become a burger when it touches the bread object. The egg would become egg toast when touching the bread. Whereas when the cup touches the orange, it should become orange juice.
:::

![](/img/Tutorial/CookAndServe/image36.png)

8.  Press "**Esc**" to exit play mode after you've done testing your scene.

## Reset The Ingredients To Recycle Food

We will create a reset action for the ingredients to recycle the food. This will allow us to reuse the ingredients after they have been cooked into food.

### Create Reset Action for Ingredients

1.  We will again use the chicken object as an illustrative example to walk you through the steps to set up its "Reset" action. To start, open the chicken object's behaviour panel and create a "**Reset**" action. An "**Action Start**" event trigger block will appear on the canvas.

![](/img/Tutorial/CookAndServe/image37.png)

2.  Add both a "**Set Rotation**" and "**Set Position**" Motion block after the "**Action Start**" block. Then connect them to two **"Vector3"** blocks, respectively, to set its rotation and position values. For the "Set Rotation" block, copy and paste the chicken object's **Y rotation** value in the **Inspector** and it to the "Set Rotation" block's "Vector3" **Y** value. Then copy and paste the chicken object's **X, Y, Z position** values to the "Set Position" block's "Vector3" values.

![](/img/Tutorial/CookAndServe/image38.png)

3.  Add a "**Set Model**" 3D Model block followed by a "**Set Boolean**" variable block after the "**Set Position**" block in the "Reset" action. On the "Set Model" block, set "**chicken.fbx**" as the Model, then set the chicken object's "**chickenburger**" variable to **false** using the "Set Boolean" block.

![](/img/Tutorial/CookAndServe/image39.png)

4.  Repeat the same procedure to set up the "**Reset**" actions for the "**egg**" and "**cup**" objects.

### Create Recycle Bin

1.  We will use a recycle bin to trigger the "Reset" actions, but only reset the ingredients if they have been cooked into food. Open the "**Asset Panel**" (**G**)and from the "**Imported Assets**" tab, select and add the "**recycling bin.fbx**" to the scene.

![](/img/Tutorial/CookAndServe/image40.png)

2.  Use the **transform tools** (move/ rotate/ scale) to reposition the bin. Open the "**Inspector**" and deselect "**Interactable**" for the rubbish bin object to make sure it can't be interacted with the VR wand.

![](/img/Tutorial/CookAndServe/image41.png)

3.  Switch to the behaviour panel. Add a "**Start Contact**" Item Event Trigger block and set the target to "**chicken**". Then append a "**Branch**" block to the "Start Contact" block and use a "**Get Boolean**" block to check the "chicken" object's "**chickenBurger**" variable as the "Branch" block's **Condition**. Add a "**Call Action**" block and connect it to the **True** node of the "Branch" block. The chicken object's "Reset" action will only be called if the "chickenBurger" variable is **True**. 

:::tip
So the chicken burger will be reset to the chicken object and placed to its original position when the chicken burger comes into contact with the recycle bin object.
:::

![](/img/Tutorial/CookAndServe/image42.png)

4.  Duplicate the above behaviour flow two more times and modify them to set up the action call to the "**egg**" and "**cup**" object's "**Reset**" action.

![](/img/Tutorial/CookAndServe/image43.png)

5.  You have now finished setting up the recycle bin. Press the "**Play**" button (<PlayModeIcon className="XRCCIcon"/>) and test grab the chicken to bread. 

:::note
After it becomes a chicken burger, grab it to the rubbish bin. It should turn back to a chicken. When you grab other cooked foods, they should turn back to the original ingredient.
:::

![](/img/Tutorial/CookAndServe/image44.png)

6.  Press "**Esc**" to exit play mode after you've done testing your scene.

## Create the Customer Order Process

We will create the customer order process for our game. This process will involve generating a random order for the customer, displaying the order, and handling the completion of the order.

### Add A Customer

1.  Open the "**Asset Panel**" (**G**) and from the "**Default Assets**" tab, select and add a "**Female Adult 01**" to the scene.

![](/img/Tutorial/CookAndServe/image45.png)

2.  Use the **transform tools** (move/ rotate/ scale) to reposition the character to behind the counter. Then open the "**Inspector**" and rename the character to **customer**.

![](/img/Tutorial/CookAndServe/image46.png)

3.  Select the customer and open its behaviour panel. Add two Number type variables named "**orderFood**" and "**previousFood**".

![](/img/Tutorial/CookAndServe/image47.png)

4.  Create 2 new actions for the customer object, namely "**Generate Order**" and "**OrderCompleted**".

![](/img/Tutorial/CookAndServe/image48.png)

### Create the Order Food Logic

1.  Select the customer object's "**Generate Order**" action, then append a "**Set Number**" block to the "**Action Start**" block. Select the customer object's "**Generate Order**" variable and use a "**Random Number**\" block to randomly set its value to an integer number between **0** and **2**. 

:::note
Each number will be representing one type of food to serve. For instance, integer number 1 means the customer want a burger or integer number 2 means the customer want an orange juice.
:::

![](/img/Tutorial/CookAndServe/image49.png)

2.  Back to the scene, add a new **Text** object and rename it to "**orderDisplay**". Use the "**Inspector**" to set up the text content, font size, and colour of the text object. 

:::note
We will use it to display the name of the food the customer orders.
:::

![](/img/Tutorial/CookAndServe/image50.png)

3.  Create a new action named "**changeText**" for the **orderDisplay** object. Append a "**Branch**" Flow Control block to the "**Action Start**" block and use a "**Compare**" Math block as the **Condition**.

![](/img/Tutorial/CookAndServe/image51.png)

4.  Use a "**Get Number**" Variable block to retrieve the customer object's "**orderFood**" variable and connect to the **A** node of the "Compare" block, then set the **B** node to **0** and the **Operator** to "**==**". This will return **True** if the value in A node equals the value in B node, and **False** if otherwise. Lastly, add a "**Set Text**" Text block and connect it to the "Branch" block's **True** node, and set the text to "I want a glass of orange juice!". 

:::note
At this point, the behaviour flow checks the "orderFood" value, it shows a text to order an orange juice if the value is 0.
:::

![](/img/Tutorial/CookAndServe/image52.png)

5.  Copy and paste these 4 behaviour blocks and place them under the original behaviour flow, then connect the original "Branch" block's **False** node to the copied "Branch" block's in flow node. Change the new "Compare" block's **B** value to **1** and change the new "Set Text" block's **Text** to "I want a chicken burger!"

:::note
Index number 0 representing order of Orange Juice, Index number 1 representing order of Chicken Burger, Index number 2 representing order of Egg Toast
:::

![](/img/Tutorial/CookAndServe/image53.png)

6.  Copy and paste the behaviour blocks again. This time, set **B** value to **2** and **Text** to "I want an egg toast!"

![](/img/Tutorial/CookAndServe/image54.png)

7.  Switch back to the customer object's behaviour panel, choose the "**Generate order**" action. Add "**Call Action**" block to the end of the behaviour flow. Set the **Target** to the "orderDisplay" object's "**changeText**" action.

![](/img/Tutorial/CookAndServe/image55.png)

8.  You have now finished creating the food order logic. Press the "**Play**" button (<PlayModeIcon className="XRCCIcon"/>) and click start to see the food order text, repeat the play test a few times and you should see different food orders.

## Create the Order Fulfillment Process

In this section, we will establish the logic for fulfilling customer orders by checking if the correct food items are placed on the plate and managing the completion of those orders.

1.  The player will complete the customer order when they place a cooked food matching the customer order onto the plate. To create this behaviour flow, we begin by adding a "**Start Contact**" block to the "**plate**" empty object's behaviour canvas. Set the **Target** to **cup**. 

:::note
The behaviour flow that follows will only be triggered when the "plate" comes into contact with the "cup" object.
:::

![](/img/Tutorial/CookAndServe/image56.png)

2.  Append a "**Branch**" block to the "**Start Contact**" block. For the Branch **Condition**, we check if **A**: the customer has ordered an orange juice and **B**: the cup is processed into orange juice. The Condition is only **True** if both states are met. This checking can be done using an "**And**" Flow Control block. For its **A** node, we add a "**Compare**" block to check if the customer's "**orderFood**" variable retrieved using the "**Get Number**" Variable block is equal to **0**. For the **B** node, we use a "**Get Boolean**" block to get the cup object's "**orangeJuice**" variable value.

![](/img/Tutorial/CookAndServe/image57.png)

3.  Connect a "**Call Action**" block to "Branch" block's **True** node, set the Target to customer's "**orderComplete**" action. Then add one more "**Call Action**" block after it and set the Target to the cup's "**Reset**" action. 

:::note
The whole behaviour flow checks if the customer has ordered the orange juice and if the player has delivered the orange juice on the plate. If so, the customer's order is complete and the cup will reset from orange juice back to cup and re-appear at its original position.
:::

![](/img/Tutorial/CookAndServe/image58.png)

4.  You've completed creating the "orange juice" order fulfilment behaviour flow, now repeat step 1 to step 3 and do the same for the chicken burger and the egg toast. For chicken burger, copy and paste all 8 behaviour blocks on the canvas, then change all cup-related values to those of chicken's and change the "Compare" block's **B** value to **1**.

![](/img/Tutorial/CookAndServe/image59.png)

5.  For egg toast, repeat step 1 to step 3 and copy and paste all 8 behaviour blocks on the canvas, then change all cup-related values to those of egg's and change the "Compare" block's **B** value to **2** also.

![](/img/Tutorial/CookAndServe/image60.png)

6.  Now switch to the "Button Object" (start message button) and add a "**Call Action**" block to its end, set the Target to the customer object's "orderFood" action. 

:::note
So the food ordering process will start when player clicks the button.
:::

![](/img/Tutorial/CookAndServe/image61.png)

7.  Now press the "**Play**" button (<PlayModeIcon className="XRCCIcon"/>) and test the behaviour flow you've just created. Experiment with throwing different food onto the plate and confirm if the order only completes when a matching food is placed.

## Set More Complexed Behaviour for Customer

In this section, we will add more complex behavior to the customer when she makes an order. This will involve playing different motions and voices based on the type of food ordered, as well as ensuring that the customer does not order the same food consecutively.

1.  We will add more complexed behaviour to the customer when she makes an order. As a starting point, open the customer's "**OrderCompleted**" action, add a "**Play Motion**" block and append it to the "**Action Start**" block. Set the motion to "**Hello**". Then, set the loop to "**PlayOnceAndStop**" to make the motion play for one time and stop the motion immediately. 


![](/img/Tutorial/CookAndServe/image62.png)

2.  Now switch to the customer's "**Generate Order**" action, we will modify it so that the customer will not order the same food consecutively. First, insert a "**Set Number**" block between the "**Action Start**" block and the existing "**Set Number**" block. For this new "Set Number" block, we select the customer's "**previousFood**" variable as the Key, and set its **Value** using a "Get Number" block retrieving the current "**orderFood**" variable. 

:::note
As the "orderFood" will be set to a new value in the next "Set Number" block, we can make use of the "previousFood" variable to compare it with the new value.
:::

![](/img/Tutorial/CookAndServe/image63.png)

3.  Add a "**Repeat**" between last "**Set Number**" and the existing "**Call Action**" block. For the Condition, we set it to "**Compare**" the value of "**previousFood**" and the newly generated "**orderFood**" variable. 

:::note
If the two variable numbers are the same, it will trigger the Repeat block.
:::

![](/img/Tutorial/CookAndServe/image64.png)

4.  For the "**Repeat**" block, we copy and paste the "**Set Number**" and "**Random Number**" blocks in the previous step to re-generate the "**orderFood**" variable. Connect the "**Repeat**" blocks Finish node to the "**Call Action**" block to change the food order text. 

:::note
This step will be repeated until we get an "orderFood" number that's different from the "previousFood" value.
:::

![](/img/Tutorial/CookAndServe/image65.png)

5.  Next, copy and paste the "**Play Motion**" blocks from the "OrderCompleted" action and append them to the "Call Action" block.

![](/img/Tutorial/CookAndServe/image66.png)

6.  We will then make the customer speak out the order using the "**Play Voice**" block. Add a "**Branch**" block to follow the "Play Motion" block, and set its **Condition** to "**Compare**" the "**orderFood**" value to the value set in **B**, which is **0** in this case (orange juice). When this condition is met, add a "**Play Voice**" block to the "Branch" block's **True** node, set the **Audio** to "juice1.mp3" in your asset library.

![](/img/Tutorial/CookAndServe/image67.png)

7.  In case the condition (orange juice order) is not met, we check if the order is for burgers or toasts, then apply the same logic to play out "burger1.mp3" when "**orderFood**" is **1**, and "toast1.mp3" when "**orderFood**" is **2**.

![](/img/Tutorial/CookAndServe/image68.png)

8.  You have now completed the whole game, enter play mode to play test it.
