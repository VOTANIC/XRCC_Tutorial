---
sidebar_position: 3
sidebar_label: Motion
---

# Motion

:::note
Motion Blocks are available for all object types except Scene.
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
            <td><center>Move</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Motion_Move.png)</center></td>
            <td>
            Move the object's position for a given distance within a fixed duration.
            <ul>
                <li>**Distance**: **[Vector3](../NodeType#vector3)** value specifying the displacement of the object's x (right), y (up), and z (forward) coordinate in meter.</li> 
                <li>
                **Time**: **[Number](../NodeType#number)** value specifying the time of movement in second.
                :::note 
                If Time is 0, the object moves instantly
                :::
                </li>
                <li>**Relative**: **[Boolean](../NodeType#boolean)** value specifying whether the position is relative to the object's local coordinates or not.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Rotate</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Motion_Rotate.png)</center></td>
            <td>
            Rotate the object by a specified angle within a fixed duration.
            <ul>
                <li>**Angle**: **[Vector3](../NodeType#vector3)** value specifying the required amount of rotation with respect to the object's xyz axis in degree.</li> 
                <li>
                **Time**: **[Number](../NodeType#number)** value specifying the time of rotation in second. 
                :::note 
                If Time is 0, the object moves instantly 
                :::
                </li>
                <li>**Relative**: **[Boolean](../NodeType#boolean)** value specifying whether the rotation is relative to the object's local coordinates or not.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Scale</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Motion_Scale.png)</center></td>
            <td>
            Scale the object with a specified scaling for a specified duration
            <ul>
                <li>**Size**: **[Vector3](../NodeType#vector3)** value specifying the scaling value with respect to the object's xyz axis.</li> 
                <li>**Time**: **[Number](../NodeType#number)** value specifying the time of scaling in second.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Set Position</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Motion_SetPosition.png)</center></td>
            <td>
            Move the object to a target position within a specified time.
            <ul>
                <li>**Target**: **[Vector3](../NodeType#vector3)** value specifying the position coordinate in the scene</li> 
                <li>
                **Time**: **[Number](../NodeType#number)** value specifying the allowed travel time to reach the target position. 
                :::note
                If Time is 0, the object moves instantly
                :::
                </li>
                <li>**Relative**: **[Boolean](../NodeType#boolean)** value specifying whether the position is relative to the object's local coordinates or not.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Set Rotation</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Motion_SetRotation.png)</center></td>
            <td>
            Move the object to a target position within a specified time.
            <ul>
                <li>**Target**: **[Vector3](../NodeType#vector3)** value specifying the rotation value. </li> 
                <li>
                **Time**: **[Number](../NodeType#number)** value specifying the allowed travel time to reach the target rotation. 
                :::note
                If Time is 0, the object rotate instantly
                :::
                </li>
                <li>**Relative**: **[Boolean](../NodeType#boolean)** value specifying whether the rotation is relative to the object's local coordinates or not.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Set Scale</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Motion_SetScale.png)</center></td>
            <td>
            Scale the object to a target scale within a specified time.
            <ul>
                <li>**Size**: **[Vector3](../NodeType#vector3)** value specifying the scale value.</li> 
                <li>
                **Time**: **[Number](../NodeType#number)** value specifying the allowed travel time to reach the target scale. 
                :::note
                If Time is 0, the object scales instantly
                :::
                </li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Look At</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Motion_LookAt.png)</center></td>
            <td>
            Rotate the object towards the target object.
            <ul>
                <li>**Target**: **[Vector3](../NodeType#vector3)** value specifying the rotation value.</li>
                <li>**Lock X**: **[Boolean](../NodeType#vector3)** value specifying whether lock the X-axis rotation.</li>
                <li>**Lock Y**: **[Boolean](../NodeType#vector3)** value specifying whether lock the Y-axis rotation.</li>
                <li>**Lock Z**: **[Boolean](../NodeType#vector3)** value specifying whether lock the Z-axis rotation.</li>
                <li>
                **Time**: **[Number](../NodeType#number)** value specifying the rotation time to reach the target value. 
                :::note
                If Time is 0, the object rotates instantly
                :::
                </li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Set Interactable</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Motion_SetInteractable.png)</center></td>
            <td>
            Set the interactivity of the object.
            <ul>
                <li>**Enable**: **[Boolean](../NodeType#boolean)** value specifying whether the object is interactable.</li> 
            </ul></td>
        </tr>
        <tr>
            <td><center>Set Grabbable</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Motion_SetGrabbable.png)</center></td>
            <td>
            Set the grab of the object.
            <ul>
                <li>**Enable**: **[Boolean](../NodeType#boolean)** value specifying whether the object is grabble.</li> 
            </ul></td>
        </tr>
    </tbody>
</table>