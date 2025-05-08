---
sidebar_position: 11
sidebar_label: Scene
---

# Scene

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
            <td><center>Change Scene</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Scene_ChangeScene.png)</center></td>
            <td>
                Change to another scene.
                <ul>
                    <li><strong>Scene</strong>: [**Scene**](../NodeType#scene) in the project to change to.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Fade</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Scene_Fade.png)</center></td>
            <td>
                Fade the scene to the specified color.
                <ul>
                    <li><strong>Color</strong>: [**Color**](../NodeType#color) value specifying the final color of the fading.</li>
                    <li><strong>Time</strong>: [**Number**](../NodeType#number) value specifying the time of fading.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Skybox As Image</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Scene_SetSkyboxAsImage.png)</center></td>
            <td>
                Set image be the skybox.
                <ul>
                    <li><strong>Image</strong>: [**Image**](../NodeType#image) asset in the project's asset library.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Skybox As Color</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Scene_SetSkyboxAsColor.png)</center></td>
            <td>
                Set color be the skybox.
                <ul>
                    <li><strong>Color</strong>: [**Color**](../NodeType#color) value specifying the color of the sky box</li>
                    <li><strong>EquiretangularEnabling</strong>: [**Boolean**](../NodeType#boolean) value specifying the visibility of the object.</li>
                    <li><strong>LightingEnabling</strong>: [**Boolean**](../NodeType#boolean) value specifying whether using the lighting.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Gravity</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Scene_SetGravity.png)</center></td>
            <td>
                Set the gravity property of the scene.
                <ul>
                    <li><strong>Enable</strong>: [**Number**](../NodeType#number) value setting the object to use gravity or not use gravity.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Use Skybox Lighting</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Scene_UseSkyboxLighting.png)</center></td>
            <td>
                Set the lighting property of the skybox.
                <ul>
                    <li><strong>Lighting</strong>: [**Boolean**](../NodeType#boolean) value setting whether use gravity.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Set Skybox Equirectangular</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Scene_SetSkyboxEquirectangular.png)</center></td>
            <td>
                Set the Equirectangular property of the skybox.
                <ul>
                    <li><strong>Equirectangular</strong>: [**Boolean**](../NodeType#boolean) value setting whether use equirectangular.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>