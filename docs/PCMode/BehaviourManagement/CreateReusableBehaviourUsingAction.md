---
sidebar_position: 3
sidebar_label: Create Re-usable Behaviour using Action
---

import AddIcon from '/img/Icon/Add.svg';
import InspectorToggleIcon from '/img/Icon/InspectorToggle.svg';
import ChooseActionIcon from '/img/Icon/ChooseAction.svg';
import MagnifierIcon from '/img/Icon/Magnifier.svg';

# Create Re-usable Behaviour using Action

## Create New Action

### Add New Behaviour Group

To create new behaviour groups, simply press \'**Add new behaviour group**\' (<AddIcon className="XRCCIcon"/>). To view the behaviours within a specific group, click on its name from the list, and behaviours set up in the chosen group will be displayed on the graph panel.

\'**Toggle Active**\' option could be used to enable or disable this behaviour layer. The behaviours in a disabled layer will not be executed during play mode.

**'Toggle Action'** icon could be used to toggle setting the layer as a behaviour Action layer. An Action Start block will be created in the Action layer automatically when the layer is set up as an Action. 

Optionally, all groups, with the exception of the \'**Main**\' group, can be renamed, reordered, or deleted by clicking the corresponding icon, so it's easier to identify and use later. During gameplay, behaviours in higher-ranked groups take precedence and are executed first.

![](/img/Behaviour/AddNewBehaviourLayer.png)

![](/img/Behaviour/CreateNewAction.png)


| Number | Description            |
|:------:|:----------------------:|
| *1*    | Add new behaviour Group|
| *2*    |  Drag to reorder                 |
| *3*    |  Toggle Active                |
| *4*    |  Toggle Action |
| *5*    |  Rename         |
| *6*    |   Delete        |

### Set Layer as Action

Once click the **\"toggle action\"** button, the graph panel will show **Action Start block**, which is exclusive inside an Action layer, and can't be moved or deleted. The **\"toggle action\"** button will show **\"tick\"**. Once you have any blocks connected to the Action Start block, it's no longer possible to turn off the layer as an action.

![](/img/Behaviour/SetLayerasAction.png)


### Construct Action using Behaviour Block

Switch to "**Library**" and drag the behaviour blocks and connect them to the "**Action Start**" block to construct a new action.

![](/img/Behaviour/ConstructActionusingBehaviourBlock.png)

## Use Actions

There are 2 ways to use the constructed actions: Use **Actions in Special Objects**, and **use Actions in Behaviour**.

### Use Action in Special Objects

There are several special objects that support "**calling action"** function in "**Inspector**", such as **Button Object** and **Option Box Object**. A Button Object is used in this guide to illustrate the process.
Add a new **Button Object** to scene through the Asset Panel.

![](/img/Behaviour/AddaNewButtonObject.png)

Select the Button Object and open the "**Inspector**" (<InspectorToggleIcon className="XRCCIcon"/>) **(I)**, go to the Action section and select action by clicking the selector <ChooseActionIcon className="XRCCIcon"/>.

![](/img/Inspector/InspectorButtonActionPanel.png)

Choose the Action you have just created: 1. Click choose action in inspector; 2. select the object on left; 3. select the created action or (alternatively) add a new action; 4. press select button to select action.

![](/img/Behaviour/ButtonChooseAction.png)

The action has been selected. During playback, the action will be triggered when the button is clicked.

![](/img/Behaviour/SelectedAction.png)

### Use Action in Behaviour

Action can be invoked in any behaviour flow from the **"Call Action"** block under **"Flow Control"**. To use an action, drag the **"Call Action"** block onto the Graph Panel and connect it to other behaviour blocks.

![](/img/Behaviour/UseActioninBehaviour.png)

To select an Action, click the **Target Action** <MagnifierIcon className="XRCCIcon"/>, then choose the **action** from the Action Panel to add.

![](/img/Behaviour/CallActionInBehaviour.png)

Once selected, the target action name will be shown in the Call Action block.
![](/img/Behaviour/CallActionInBehaviourFinished.png)