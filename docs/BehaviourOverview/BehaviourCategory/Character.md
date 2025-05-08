---
sidebar_position: 11
sidebar_label: Character
---

# Character

:::note
Character Blocks are available for Character object type only.
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
            <td><center>Play Motion</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Character_PlayMotion.png)</center></td>
            <td>
                Start playing the specified motion on the character.
                <ul>
                    <li><strong>Motion</strong>: [**Character motion**](../NodeType#motion) asset.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Stop Motion</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Character_StopMotion.png)</center></td>
            <td>Stop playing the motion on the character.</td>
        </tr>
        <tr>
            <td><center>Play Voice</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Character_PlayVoice.png)</center></td>
            <td>
                Play the specified audio clip asset with lip sync on the character.
                <ul>
                    <li><strong>Audio</strong>: [**Audio clip**](../NodeType#audio-clip) asset.</li>
                    <li><strong>Volume</strong>: [**Number**](../NodeType#number) value specifying the audio play volume.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Stop Voice</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/Character_StopVoice.png)</center></td>
            <td>Stop the audio clip playing.</td>
        </tr>
    </tbody>
</table>