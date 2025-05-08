import InspectorToggleIcon from '/img/Icon/InspectorToggle.svg';

# Configure Scene Setting

You can customize the setting for each scene in the project using the scene inspector panel. To configure the setting of the current scene, first click anywhere in the scene without an object to select the scene, then press "**Inspector**" (<InspectorToggleIcon className="XRCCIcon"/>) (**I**) to configure scene setting. To close the Configuration Panel, press "**Inspector**" (<InspectorToggleIcon className="XRCCIcon"/>) (**I**) again.

![](/img/SceneSetting/InspectorOpened.png)

## Skybox Setting

User can either choose a **Image Skybox** or a **Color Skybox** for the scene by select the corresponding tab.

<table>
    <tr>
        <th>Set Image Scene Skybox</th>
        <th>Set Color Scene Skybox</th>
        <th>Set Scene Environment</th>
    </tr>
    <tr>
        <td>![](/img/SceneSetting/Image.png)</td>
        <td><img src="/img/SceneSetting/Color.png" alt="" style={{width:210}}/></td>
        <td><div style={{display: 'flex'}}><div><img src="/img/SceneSetting/SelectAssets.png" alt=""/></div><div><img src="/img/SceneSetting/AssetSelection.png" alt="" style={{width:560}}/></div></div>  </td> 
    </tr>
</table>

<table>
    <tr>
        <th>Scene Setting Action</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><center>*Set Image Scene Skybox*</center></td>
        <td>Open Skybox panel then select **Image** tab and select an image for the skybox. For 360 image Skybox, tick **"Skybox 360 Effect"**; For Cubemap Skybox, untick **"Skybox 360 Effect"**.</td>
    </tr>
    <tr>
        <td><center>*Set Color Scene Skybox*</center></td>
        <td>Open Skybox panel then select **Color** tab and select a color for the skybox.</td>
    </tr>
    <tr>
        <td><center>*Set Scene Environment*</center></td>
        <td>Open \"Scene Asset Panel\" to select new scene and confirm setting new scene asset. The scene will be loaded again and the new scene asset will show afterwards.</td>
    </tr>
</table>

## Scene Setting

User can modify the scene setting in the scene setting tab at the scene inspector panel.

![](/img/SceneSetting/SceneSetting.png)

-   **Skybox Lighting**: You can turn off the skybox lighting allowing user to customize scene lighting using Light objects.

-   **Don't Fade On Start**: You can turn off this option so the scene will not fade on start.

-   **Gravity Force**: The Gravity Force input field modifies the gravity setting in the scene for the player; the player will be affected by gravity and fall to the ground when suspended in the air during gameplay using the XRCC XR.

-   **Play Mode Graphic Quality**: The drop-down contains three options including High, Midium, Low. This will affect the graphic quality in the play mode.
