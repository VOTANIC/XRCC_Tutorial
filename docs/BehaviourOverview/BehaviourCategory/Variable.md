---
sidebar_position: 17
sidebar_label: Variable
---

# Variable

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
            <td><center>Get Position</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_GetPosition.png)</center></td>
            <td>
                Return the Vector3 value or the separate x/y/z values of the target's position.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or [**focus point**](../NodeType#focus-point) (if available) to get the position value.</li>
                    <li><strong>Relative</strong>: [**Boolean**](../NodeType#boolean) value specifying whether the position is relative to the object's local coordinates or not.</li>
                </ul>
                :::note
                The focus point is only available on a Character object at this moment.
                :::
            </td>
        </tr>
        <tr>
            <td><center>Get Rotation</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_GetRotation.png)</center></td>
            <td>
                Return the Vector3 value or the separate x/y/z values of the target's rotation.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or [**focus point**](../NodeType#focus-point) (if available) to get the rotation value.</li>
                    <li><strong>Relative</strong>: [**Boolean**](../NodeType#boolean) value specifying whether the rotation is relative to the object's local coordinates or not.</li>
                </ul>
                :::note
                The focus point is only available on a Character object at this moment.
                :::
            </td>
        </tr>
        <tr>
            <td><center>Get Scale</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_GetScale.png)</center></td>
            <td>
                Return the Vector3 value or the separate x/y/z values of the target's scale.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or [**focus point**](../NodeType#focus-point) (if available) to get the scale value.</li>
                </ul>
                :::note
                The focus point is only available on a Character object at this moment.
                :::
            </td>
        </tr>
        <tr>
            <td><center>Get Boolean</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_GetBoolean.png)</center></td>
            <td>
                Return the selected Boolean variable.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or scene to get the variable.</li>
                    <li><strong>Key</strong>: The specified [**Boolean**](../NodeType#boolean) variable to get the value.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Boolean</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_SetBoolean.png)</center></td>
            <td>
                Set the selected Boolean variable to input value.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or [**scene**](../NodeType#scene) to get the variable.</li>
                    <li><strong>Key</strong>: The specified [**Boolean**](../NodeType#boolean) variable to set the value.</li>
                    <li><strong>Value</strong>: [**Boolean**](../NodeType#boolean) value to assign to the specified variable.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Get Number</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_GetNumber.png)</center></td>
            <td>
                Return the selected Number variable.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or [**scene**](../NodeType#scene) to get the variable.</li>
                    <li><strong>Key</strong>: The specified [**Number**](../NodeType#number) variable to get the value.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Number</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_SetNumber.png)</center></td>
            <td>
                Set the selected Number variable to input value.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or [**scene**](../NodeType#scene) to get the variable.</li>
                    <li><strong>Key</strong>: The specified [**Number**](../NodeType#number) variable to set the value.</li>
                    <li><strong>Value</strong>: [**Number**](../NodeType#number) value to assign to the specified variable.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Number To Text</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_NumberToText.png)</center></td>
            <td>
                Convert a Number value to a Text value.
                <ul>
                    <li><strong>Number</strong>: [**Number**](../NodeType#number) value to be converted.</li>
                    <li><strong>Decimal Place</strong>: [**Number**](../NodeType#number) value for number of decimal place.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Boolean To Text</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_BooleanToText.png)</center></td>
            <td>
                Convert a Boolean value to a Text value.
                <ul>
                    <li><strong>Input</strong>: [**Boolean**](../NodeType#boolean) value to be converted.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Get Color</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_GetColor.png)</center></td>
            <td>
                Return the selected Color variable.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or [**scene**](../NodeType#scene) to get the variable.</li>
                    <li><strong>Key</strong>: The specified [**Color**](../NodeType#color) variable to get the value.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Color</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_SetColor.png)</center></td>
            <td>
                Set the selected Color variable to input value.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or [**scene**](../NodeType#scene) to get the variable.</li>
                    <li><strong>Key</strong>: The specified [**Color**](../NodeType#color) variable to set the value.</li>
                    <li><strong>Color</strong>: [**Color**](../NodeType#color) value to assign to the specified variable.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Get Vector3</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_GetVector3.png)</center></td>
            <td>
                Return selected Vector3 variable in vector3 format or in separate x/y/z values.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or [**scene**](../NodeType#scene) to get the variable.</li>
                    <li><strong>Key</strong>: The specified [**Vector3**](../NodeType#vector3).</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Vector3</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Variable_SetVector.png)</center></td>
            <td>
                Set the selected Vector3 variable to input value.
                <ul>
                    <li><strong>Target</strong>: [**Object**](../NodeType#object) or [**scene**](../NodeType#scene) to get the variable.</li>
                    <li><strong>Key</strong>: The specified [**Vector3**](../NodeType#vector3) variable to set the value.</li>
                    <li><strong>Value</strong>: [**Vector3**](../NodeType#vector3) value to assign to the specified variable.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>