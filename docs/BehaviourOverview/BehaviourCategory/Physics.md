---
sidebar_position: 6
sidebar_label: Physics
---

# Physics

:::note
Physics Blocks are available for all objects except for the Scene and Light object.
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
            <td><center>Set Static</center></td>
            <td class="behaviour-block-image"><center><i>![](/img/BehaviourBlock/Physics_SetStatic.png)</i></center></td>
            <td>
            Set the static property of the physics object.
            <ul>
                <li>**Is Static**: **[Boolean](../NodeType#boolean)** value setting the object to static or not static.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Add Force</center></td>
            <td class="behaviour-block-image"><center><i>![](/img/BehaviourBlock/Physics_AddForce.png)</i></center></td>
            <td>
            Add an external force to the object with the specified force vector
            <ul>
                <li>**Force**: **[Vector3](../NodeType#vector3)** value specifying the force direction.</li>
                <li>**Relative**: **[Boolean](../NodeType#boolean)** value specifying whether the force is relative to the object's local coordinates or not.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Set Mass</center></td>
            <td class="behaviour-block-image"><center><i>![](/img/BehaviourBlock/Physics_SetMass.png)</i></center></td>
            <td>
            Set the mass of the physics object.
            <ul>
                <li>**Mass**: **[Number](../NodeType#number)** value specifying the mass.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Set Use Gravity</center></td>
            <td class="behaviour-block-image"><center><i>![](/img/BehaviourBlock/Physics_SetUseGravity.png)</i></center></td>
            <td>
            Set the gravity property of the physics object.
            <ul>
                <li>**Enable**: **[Boolean](../NodeType#boolean)** value setting the object to use gravity or not use gravity.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Set Use Physics</center></td>
            <td class="behaviour-block-image"><center><i>![](/img/BehaviourBlock/Physics_SetUsePhysics.png)</i></center></td>
            <td>
            Set the physics property of the object.
            <ul>
                <li>**Enable**: **[Boolean](../NodeType#boolean)** value setting the object to use physcis or not use physics.</li>
            </ul></td>
        </tr>
    </tbody>
</table>