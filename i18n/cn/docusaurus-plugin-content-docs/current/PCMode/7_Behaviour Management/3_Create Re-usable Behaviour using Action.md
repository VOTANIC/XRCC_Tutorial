import AddIcon from '/img/Icon/Add.svg';
import InspectorToggleIcon from '/img/Icon/InspectorToggle.svg';
import ChooseActionIcon from '/img/Icon/ChooseAction.svg';
import MagnifierIcon from '/img/Icon/Magnifier.svg';

## Create Re-usable Behaviour using Action {#create-re-usable-behaviour-using-action .unnumbered}

### Create New Action {#create-new-action .unnumbered}

#### Add New Behaviour Group {#add-new-behaviour-group .unnumbered}

To create new behaviour groups, simply press \'**Add new behaviour group**\' (<AddIcon className="XRCCIcon"/>). To view the behaviours within a specific group, click on its name from the list, and they will be displayed on the graph panel.

\'**Toggle Active**\' option could be used to enable or disable this Action layer.

**'Toggle Action'** icon could be used to enable or disable the Action Start block. User should click the **'Toggle Action'** option to enable the Action Start block to edit action.

Optionally, all groups, with the exception of the \'**Main**\' group, can be renamed, reordered, or deleted by clicking the corresponding icon, so it's easier to identify and use later. During gameplay, behaviours in higher-ranked groups take precedence and are executed first.

<center><img src="/img/Behaviour/AddNewBehaviourLayer.png" alt=""/></center>

<center><img src="/img/Behaviour/CreateNewAction.png" alt=""/></center>


| Number | Description            |
|:------:|:----------------------:|
| *1*    | Add new behaviour Group|
| *2*    | Rename                 |
| *3*    | Delete                 |
| *4*    | Drag to reorder        |
| *5*    | Toggle Active          |
| *6*    | Toggle Action          |

#### Set Layer as Action {#set-layer-as-action .unnumbered}

Once click the **\"toggle action\"** button, the graph panel will show **Action Start block**, which is exclusive inside an Action layer, and can't be moved or deleted. The **\"toggle action\"** button will show **\"tick\"**.

<center><img src="/img/Behaviour/SetLayerasAction.png" alt=""/></center>


#### Construct Action using Behaviour Block {#construct-action-using-behaviour-block .unnumbered}

Switch to "**Library**" and drag the behaviour blocks and connect them to the "**Action Start**" block to construct a new action.

<center><img src="/img/Behaviour/ConstructActionusingBehaviourBlock.png" alt=""/></center>

### Use Actions {#use-actions .unnumbered}

There are 2 ways to use the constructed actions: Use Actions in Specialized Objects, and use Actions in Behaviour.

#### Use Action in Specialized Objects {#use-action-in-specialized-objects .unnumbered}

There are several specialized objects that support "**calling action"** function in "**Inspector**", such as **Button Object** and **Option Box Object**. A Button Object is used in this guide to illustrate the process.
Add a new **Button Object** to scene through the Asset Panel.

<center><img src="/img/Behaviour/AddaNewButtonObject.png" alt=""/></center>

Select the Button Object and open the "**Inspector**" (<InspectorToggleIcon className="XRCCIcon"/>) **(I)**, go to the Action section and select action by clicking the selector <ChooseActionIcon className="XRCCIcon"/>.

<center><img src="/img/InspectorButtonActionPaenl.png" alt=""/></center>

Choose the Action you have just created: 1. Click choose action in inspector; 2. select the object on left; 3. select the created action or (alternatively) add a new action; 4. press select button to select action.

<center><img src="/img/Behaviour/ButtonChooseAction.png" alt=""/></center>

The action has been selected. During playback, the action will be triggered when the button is clicked.

<center><img src="/img/Behaviour/SelectedAction.png" alt=""/></center>

#### Use Action in Behaviour {#use-action-in-behaviour .unnumbered}

Action can be invoked in any behaviour flow from the **"Call Action"** block under **"Flow Control"**. To use an action, drag the **"Call Action"** block onto the Graph Panel and connect it to other behaviour blocks.

<center><img src="/img/Behaviour/UseActioninBehaviour.png" alt=""/></center>

To select an Action, click the **Target Action** <MagnifierIcon className="XRCCIcon"/>, then choose the **action** from the Action Panel to add.

<center><img src="/img/Behaviour/CallActionInBehaviour.png" alt=""/></center>

Once selected, the target action name will be shown in the Call Action block.
<center><img src="/img/Behaviour/CallActionInBehaviourFinished.png" alt=""/></center>