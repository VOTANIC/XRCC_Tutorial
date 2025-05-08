---
sidebar_position: 2
sidebar_label: Basic Behaviour Workflow 
---

# Basic Behaviour Workflow 

You can create and view behaviour by first select an object in the [Scene View](/PCMode/Workspace/SceneView), then switch to the Behaviour tab to add or view behaviour for the selected object.

<center>![](/img/Behaviour/BasicBehaviourWorkflow.png)</center>

:::note
if you access the Behaviour tab without selecting any objects, you can define or view behaviours for the current scene.
:::

It is not possible to set up behaviour for multiple selected objects. If you access the behaviour tab while selecting multiple objects, the behaviour tab will display the behaviour defined for the object that is selected first.

## Building New Behaviour

To create a behaviour, simply drag the behaviour blocks you need into the Behaviour Graph Panel and connect the blocks. Drag-and-release from the output node to the input node of the destined block to form a line.

<center>![](/img/Behaviour/BuildingNewBehaviour.png)</center>

You will need to use an "**Event**" type block to kickstart any behaviour. We consider it one behaviour when different behaviour blocks are joined together by connection wires, which form a complete execution chain. More than one behaviour can co-exist for an item, and they can execute independently or even use the same event to start the behaviour.

## Connection Node Types

Behaviour flows from one behaviour block's output node to the next behaviour's input node, where the output and input's node type should match. For convenience, the nodes are color-coded to identify the type of values the different behaviour nodes will use:

  |Variation                       |Type      |Description                      |
  |:--------------------------------:|:--------:|---------------------------------|
  |![](/img/media/media/image255.png) | *Flow*   | Represents the flow of execution.|
  ![](/img/media/media/image256.png)  | *Boolean* | Represents the input or output of Boolean value.|
  ![](/img/media/media/image257.png)  | *Number*  | Represents the input or output of Number value.|
  ![](/img/media/media/image258.png)  | *Color* | Represents the input or output of Color value.|
  ![](/img/media/media/image259.png)  | *Vector3* | Represents the input or output of Vector3 value.|
  ![](/img/media/media/image260.png)  | *Text* | Represents the input or output of Text value.|

## Behaviour with Parenting Object

Some behaviours are linked to their parented object if parenting is used.

When adding behaviour block to parent objects, the blocks of **Motion** and **Effect** type will also affect their child objects, as the child object is attached to the parent object. The child object will also move relatively to the parent position when using the Motion block.

## Behaviour Group

The Behaviour Group is designed with a main default action, but it also allows you to include multiple actions to improve organization and simplify the behaviour management process. This flexibility enables you to create more complex and structured behaviour hierarchies within your project.

![](/img/Behaviour/MultipleAction.png)