---
sidebar_position: 5
sidebar_label: 3D Model
---

# 3D Model

:::note
3D Model Blocks are available for 3D Model object type only.
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
            <td><center>Play Animation</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/3DModel_PlayAnimation.png) </i></center></td>
            <td>Play the animation of the model if the model contains animation, do nothing if otherwise. <ul>
            <li>**Animation Index**: **[Integer](../NodeType#integer)** of an animation's index will be played.</li>
            <li>**Loop**: **[Boolean](../NodeType#boolean)** value specify the animation whether to loop. </li></ul></td>
        </tr>
        <tr>
            <td><center>Stop Animation</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/3DModel_StopAnimation.png) </i></center></td>
            <td>Stop the animation if an animation is playing.</td>
        </tr>
        <tr>
            <td><center>Set Material</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/3DModel_SetMaterial.png) </i></center></td>
            <td>
            Set the material of the object.
            <ul>
                <li>**Material**: **[Image](../NodeType#image)** of the material imported by thr user.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Set Material Color</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/3DModel_SetMaterialColor.png) </i></center></td>
            <td>
            Set the material color of the object.
            <ul>
                <li>**Color**: **[Color](../NodeType#color)** value specifying the material color.</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Set Model</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/3DModel_SetModel.png) </i></center></td>
            <td>
            Set the model to replace the current model.
            <ul>
                <li>**Model**: **[3D Model](../NodeType#object)** object added to the current scene.</li>
                <li>**Material**: **[Image](../NodeType#image)** asset in the project's asset library.</li>
                <li>**Material Color**: **[Color](../NodeType#color)** value specifying the material color.</li>
            </ul></td>
        </tr>
    </tbody>
</table>