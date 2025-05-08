## Behaviour Tab User Interface {#behaviour-tab-user-interface .unnumbered}

The Behaviour Tab is the main place for creating behaviours. It can be accessed by clicking the Behaviour tab on the Workspace. As shown in figure below, the Behaviour Panel is consisted of 3 main parts:

1.  **Toolbar**: contains buttons to perform various actions in the
    Behaviour Panel

2.  **Sidebar**: hosts the behaviour blocks library and the user-defined
    behaviour group list

3.  **Graph Panel**: the primary workspace to construct object behaviour

### Toolbar {#toolbar-1 .unnumbered}

The Toolbar hosts 7 buttons for your quick access to various behaviour management functions:

<center><img src="/img/Behaviour/BehaviourToolBar.png" alt=""/></center>

  |Icon |Name         |Description|
  |:-----:|:-----------:|-----------|
  |<img src="/img/Behaviour/Icon/Variables.png" alt=""/> |*Show Item Variables*|Open the "Item Variable" panel.|
  |<img src="/img/Behaviour/Icon/Copy.png" alt=""/> |*Copy Behaviour* | Copy selected behaviour blocks from the panel.|                             
  |<img src="/img/Behaviour/Icon/Paste.png" alt=""/> |*Paste Behaviour*| Paste previously copied behaviour blocks on the panel.|
  |<img src="/img/Behaviour/Icon/Remove.png" alt=""/> |*Remove Behaviour* | Remove selected behaviour blocks from the panel.|
  |<img src="/img/Behaviour/Icon/Undo.png" alt=""/> |*Undo Last Step*|   Cancel or reverse the last action in the Behaviour tab.|
  |<img src="/img/Behaviour/Icon/Redo.png" alt=""/> |*Redo Last Step*|Redo the last action in the Behaviour tab.|
  |<img src="/img/Behaviour/Icon/RemoteTrigger.png" alt=""/> |*Remote Trigger*|Setup a remote interface to trigger behaviour. <mark>*(add-on feature)*</mark>|

####  {#section-2 .unnumbered}

####  {#section-3 .unnumbered}

#### Item Variables {#item-variables .unnumbered}

Item variables provide a mean to store and record some simple data in play mode. Created variables can be assessed by Variable -\> Get/Set behaviour block. Press "**Show Item Variables**" to open the Variable Panel to manage the variables of the selected object.

The Variable Panel consists of three main components:

1.  **Variable Owner**: Displays the owner of the list of variables.

2.  **Variable List:** Shows the list of variables defined for that object. User can rename, delete, or set the variable type and default value for each variable defined.

3.  **Add Variable**: Click to add more variable items in the variable list above.

You need to define the type and default value for each variable. A variable can be either a **Number, Boolean, Vector or Color**, with a default value correspond to the value of the variable when it first initializes during gameplay.

### Sidebar {#sidebar .unnumbered}

The Sidebar hosts the behaviour block library and the user-defined behaviour group list in two tabs, you can click on the "**Library**" and the "**Groups**" tab to switch between the two views.

<center><img src="/img/Behaviour/Sidebar.png" alt=""/></center>

#### Behaviour Blocks Library {#behaviour-blocks-library .unnumbered}

Behaviour blocks are organized into several categories and color-coded according to their respective category. You can click on different categories in the Library view to access all behaviour blocks under that category.

Below is a list of behaviour block categories accessible by all object
types:

  |Icon | Description|
  |:-----:|:----------:|
  |<img src="/img/Behaviour/Icon/BehaviourGeneralEvent.png" alt=""/> | Provides behaviour blocks as a starting point to trigger execution, including scene starting and controller event.|
  |<img src="/img/Behaviour/Icon/BehaviourSound.png" alt=""/> | Provides behaviour blocks for sound controls, including playing and pausing.|
  |<img src="/img/Behaviour/Icon/BehaviourScene.png" alt=""/> | Provides behaviour blocks for scene controls, including fading effect transition and scene changing.|
  |<img src="/img/Behaviour/Icon/BehaviourUser.png" alt=""/> | Provides behaviour blocks for user controls, including user movement and travel destination.|
  |<img src="/img/Behaviour/Icon/BehaviourFlowControl.png" alt=""/> | Provides behaviour blocks to control the execution flow, including branching, looping, and waiting for a certain condition or amount of time.|
  |<img src="/img/Behaviour/Icon/BehaviourTime.png" alt=""/> | Provides behaviour blocks to measure time, including timer and stopwatch control.|
  |<img src="/img/Behaviour/Icon/BehaviourVariable.png" alt=""/> | Provides behaviour blocks for controlling variables including get and set scenes and item variables.|
  |<img src="/img/Behaviour/Icon/BehaviourMath.png" alt=""/> | Provides behaviour blocks for math-based operations, including value assignment, mathematical calculation, and logical control.|

 

There are also object-specific behaviour blocks only accessible by
objects of certain types:

  |Icon  |Available Object Type |Description|
  |:----:|:--------------------:|-----------|
  |<img src="/img/Behaviour/Icon/BehaviourItemEvent.png" alt=""/> | *All object types except Scene* | Provides behaviour blocks that use item interaction to trigger execution, including pointing, touching and clicking object.|
  |<img src="/img/Behaviour/Icon/BehaviourMotion.png" alt=""/> | *All object types except Scene* | Provides behaviour blocks that perform an action on the chosen object, including move, rotate, and scale.|
  |<img src="/img/Behaviour/Icon/BehaviourEffect.png" alt=""/> | *All object types except Scene* | Provides behaviour blocks related to display effect on an item, including  outline, overlay, and blinker.|
  |<img src="/img/Behaviour/Icon/BehaviourPhysics.png" alt=""/> | *All object types that allow physics* | Provides behaviour blocks related to physical interactions.|
  |<img src="/img/Behaviour/Icon/Behaviour3DModel.png" alt=""/> | *3D Model* | Provides behaviour blocks to control model, including animation, material and grabbing.|
  |<img src="/img/Behaviour/Icon/BehaviourImage.png" alt=""/> | *2D/3D Image* | Provides behaviour blocks to control Image object, including setting image.|
  |<img src="/img/Behaviour/Icon/BehaviourVideo.png" alt=""/> | *2D/3D Video* | Provides behaviour blocks to control Video object, including pause and stop video.|
  |<img src="/img/Behaviour/Icon/BehaviourDocument.png" alt=""/> | *Document* | Provides behaviour blocks to control Document object, including changing page.|
  |<img src="/img/Behaviour/Icon/BehaviourText.png" alt=""/> | *Text* | Provides behaviour blocks to control Text object, including setting text.|
  |<img src="/img/Behaviour/Icon/BehaviourCharacter.png" alt=""/> | *Character* | Provides behaviour blocks to control Character object, including motion and voice.|
  |<img src="/img/Behaviour/Icon/BehaviourOptionBox.png" alt=""/> | *Option Box* | Provides behaviour block to hide option box.|
  |<img src="/img/Behaviour/Icon/BehaviourLight.png" alt=""/> | *Light* | Provides behaviour blocks to control light.|
  |<img src="/img/Behaviour/Icon/BehaviourSlideShow.png" alt=""/> | *2D Slideshow* | Provides behaviour blocks to control 2D slideshow.| 
  |<img src="/img/Behaviour/Icon/Behaviour3DSlideShow.png" alt=""/> | *3D Slideshow* | Provides behaviour blocks to control 3D slideshow.|
  |<img src="/img/Behaviour/Icon/BehaviourButton.png" alt=""/> | *Button* | Provides behaviour blocks to control button object, including setting button's color.|
  |<img src="/img/Behaviour/Icon/BehaviourEmptyObject.png" alt=""/> | *Empty Object* | Provides behaviour blocks to control collider of the empyty object as wall.|

####  Behaviour Groups {#behaviour-groups .unnumbered}

To view the behaviours within a specific group, click on its name from the list, and they will be displayed on the graph panel. All groups, with the exception of the \'**Main**\' group, can be renamed, reordered, or deleted by clicking the corresponding icon. During gameplay, behaviours in higher-ranked groups take precedence and are executed first. There are also two icons representing similar functions: Toggle Active and Toggle Action. Clicking the \'**Toggle Active**\' option could enable or disable this Action layer, while clicking the '**Toggle Action**' icon could control whether the Action Start block appears.

<center><img src="/img/Behaviour/BehaviourGroups.png" alt=""/></center>

  |Number                                      |Description             |
  |:------------------------------------------:|------------------------|
  |*1*                                         |Add new behaviour group |
  |*2*                                         |Rename                  |
  |*3*                                         |Delete                  |
  |*4*                                         |Drag to reorder         |
  |*5*                                         |Toggle Active           |
  |*6*                                         |Toggle Action           |
  |*7*                                         |Object Name             |
  |*8*                                         |Group Name              |

### Graph Panel {#graph-panel .unnumbered}

You can drag-and-drop behaviour blocks into the Graph Panel and link them together to create behaviours. The top of the Graph Panel shows the name of the object and the behaviour group you are working on. Details of creating behaviour in the graph panel will be discussed later in the "Building New Behaviour" section.

<center><img src="/img/Behaviour/GraphPanel.png" alt=""/></center>