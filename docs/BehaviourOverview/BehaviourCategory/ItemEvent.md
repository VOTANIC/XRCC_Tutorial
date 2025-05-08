---
sidebar_position: 2
sidebar_label: Item Event
---

# Item Event

:::note
Item Event Blocks are available for all object types except Scene.
:::

<table>
    <thead>
        <tr>
            <th>Block Name</th>
            <th>Block</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><center>Start Pointing</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/ItemEvent_StartPointing.png) </i></center></td>
            <td>Perform the behaviour when theVR wand starts pointing at the object.</td>
        </tr>
        <tr>
            <td><center>Stop Pointing</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/ItemEvent_StopPointing.png) </i></center></td>
            <td>Perform the behaviour when theVR wand stops pointing at the object.</td>
        </tr>
        <tr>
            <td><center>Start Looking</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/ItemEvent_StartLooking.png) </i></center></td>
            <td>
            Perform the behaviour when the player starts looking at the target object. 
            :::note 
            The Start Looking can only be triggered if object is within 2 meters clear vision from the player's eye. 
            :::
            </td>
        </tr>
        <tr>
            <td><center>Stop Looking</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/ItemEvent_StopLooking.png) </i></center></td>
            <td>Perform the behaviour when the player stops looking at the target object</td>
        </tr>
        <tr>
            <td><center>Click</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/ItemEvent_Click.png) </i></center></td>
            <td>Perform the behaviour when the object is clicked by the player.</td>
        </tr>
        <tr>
            <td><center>Start Contact</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/ItemEvent_StartContact.png) </i></center></td>
            <td>Perform the behaviour when the object enters into a collision with the target object or user.<br/> <ul><li>**Target**: Scene **[object](../NodeType#object)** or user to be collided with.</li></ul></td>
        </tr>
        <tr>
            <td><center>Stop Contact</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/ItemEvent_StopContact.png) </i></center></td>
            <td>Perform the behaviour when the object exits the collision with the target object or user.<br/> <ul><li>**Target**: Scene **[object](../NodeType#object)** or user to be collided with.</li></ul></td>
        </tr>
    </tbody>
</table>