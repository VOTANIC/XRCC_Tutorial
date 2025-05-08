---
sidebar_position: 14
sidebar_label: User
---

# User

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
            <td><center>User Move</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_UserMove.png)</center></td>
            <td>
                Move the user's position for a given distance within a fixed duration.
                <ul>
                    <li><strong>Distance</strong>: [**Vector3**](../NodeType#vector3) value specifying the distance of movement with respect to the wand's xyz direction in meter.</li>
                    <li><strong>Time</strong>: [**Number**](../NodeType#number) value specifying the time of movement in second.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>User Rotate</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_UserRotate.png)</center></td>
            <td>
                Rotate the user by a specified angle within a fixed duration.
                <ul>
                    <li><strong>Angle</strong>: [**Vector3**](../NodeType#vector3) value specifying the required amount of rotation with respect to the user's xyz axis.</li>
                    <li><strong>Time</strong>: [**Number**](../NodeType#number) value specifying the time of rotation in second.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set User Position</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_SetUserPosition.png)</center></td>
            <td>
                Move the user to a target position within a specified time.
                <ul>
                    <li><strong>Destination</strong>: [**Vector3**](../NodeType#vector3) value specifying the position coordinate in the scene.</li>
                    <li><strong>Time</strong>: [**Number**](../NodeType#number) value specifying the allowed travel time to reach the target position.</li>
                </ul>
                :::note
                If Time is 0, the user moves instantly
                :::
            </td>
        </tr>
        <tr>
            <td><center>Set User Rotation</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_SetUserRotation.png)</center></td>
            <td>
                Rotate the object to a target rotation within a specified time.
                <ul>
                    <li><strong>Destination</strong>: [**Vector3**](../NodeType#vector3) value specifying the rotation value.</li>
                    <li><strong>Time</strong>: [**Number**](../NodeType#number) value specifying the allowed travel time to reach the target rotation.</li>
                </ul>
                :::note
                If Time is 0, the user rotates instantly
                :::
            </td>
        </tr>
        <tr>
            <td><center>Travel To Destination</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_TravelToDestination.png)</center></td>
            <td>
                Move User to the position and rotation of the target object within a specified time.
                <ul>
                    <li><strong>Target</strong>: [**Target**](../NodeType#target) object in the same scene which the user should travel to.</li>
                    <li><strong>Time</strong>: [**Number**](../NodeType#number) value specifying the allowed travel time to reach the target object.</li>
                </ul>
                :::note
                If Time is 0, the user travels instantly
                :::
            </td>
        </tr>
        <tr>
            <td><center>Show Tool</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_ShowTool.png)</center></td>
            <td>
                Set the visibility of the XR tool.
                <ul>
                    <li><strong>Enable</strong>: [**Boolean**](../NodeType#boolean) value specifying the visibility of the XR tool.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Tool</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_SetTool.png)</center></td>
            <td>
                Set the type of the tool.
                <ul>
                    <li><strong>Tool</strong>: Tool type which can be used in votanicXR</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Equip</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_Equip.png)</center></td>
            <td>
                Equip the specified object to an Entity (including the user's body part) with specified offset values.
                <ul>
                    <li><strong>Position</strong>: [**Vector3**](../NodeType#vector3) value specifying the object's distance to the player hand when the object is equipped.</li>
                    <li><strong>Rotation</strong>: [**Vector3**](../NodeType#vector3) value specifying the object's rotation to the player hand when the object is equipped.</li>
                    <li><strong>Target Entity</strong>: [**Entity object**](../NodeType#entity) for which the item will be equipped to.</li>
                    <li><strong>Target Item</strong>: Target [**object**](../NodeType#object) that will be equipped on the Entity.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Unequip</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_Unequip.png)</center></td>
            <td>
                Unequip the object from the specified Entity.
                <ul>
                    <li><strong>Target Entity</strong>: [**Entity object**](../NodeType#entity) for which the item is equipped on.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Use Gravity</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_SetUseGravity.png)</center></td>
            <td>
                Set enable or disable the gravity
                <ul>
                    <li><strong>Enable</strong>: [**Boolean**](../NodeType#boolean) value specifying the status of the gravity.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Wand Length</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/User_SetWandLength.png)</center></td>
            <td>
                Set the wand length for the user
                <ul>
                    <li><strong>Length</strong>: [**Number**](../NodeType#number) value specifying the length of the wand.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>