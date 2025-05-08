---
sidebar_position: 9
sidebar_label: Video
---

# Video

:::note
Video Blocks are available for 2D and 3D Video object types only.
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
        <td><center>Play Video</center></td>
        <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Video2D_PlayVideo.png)</center></td>
        <td>
        Start playing the video assets.
        <ul>
            <li>
            **Spatial**: **[Boolean](../NodeType#boolean)** value specifying if the 3D audio effect is enabled. 
            :::note
            This setting only exist for 2D Video object type
            :::
            </li>
        </ul></td>
        </tr>
        <tr>
            <td><center>Pause Video</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Video2D_PauseVideo.png)</center></td>
            <td>Pause the video asset played. </td>
        </tr>
        <tr>
            <td><center>Stop Video</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Video2D_StopVideo.png)</center></td>
            <td>Stop the video asset playing and reset video to first frame.</td>
        </tr>
        <tr>
            <td><center>Skip Forward</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Video2D_SkipForward.png)</center></td>
            <td>Skip the video asset forward by one tenth (1/10) of the video's total duration.</td>
        </tr>
        <tr>
            <td><center>Skip Backward</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Video2D_SkipBackward.png)</center></td>
            <td>Skip the video asset backward by one tenth (1/10) of the video's total duration.</td>
        </tr>
    </tbody>
</table>