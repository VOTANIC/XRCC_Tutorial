---
sidebar_position: 1
sidebar_label: General Event
---

# General Event
<table>
    <thead>
        <tr>
            <th><center>Block Name</center></th>
            <th>Block</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><center>Start</center></td>
            <td class="behaviour-block-image"><center><i> ![Start](/img/BehaviourBlock/GeneralEvent_Start.png) </i></center></td>
            <td>Perform the behavour when the scene starts</td>
        </tr>
        <tr>
            <td><center>Controller Press</center></td>
            <td class="behaviour-block-image"><center><i> ![Controller Press](/img/BehaviourBlock/GeneralEvent_ControllerPress.png)</i></center></td>
            <td>
            Perform the behaviour when the player presses a controller button: 
            <ul>
                <li>**Contoller Index**: <b>**[Integer](../NodeType#integer)**</b> value corresponds to the index of controller recognized by the system.</li>
                <li>**Button Index**: **[Integer](../NodeType#integer)** value corresponds to the index of button on the specified controller (refer to Controller Button index table).</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>Controller Release</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/GeneralEvent_ControllerRelease.png)</i></center></td>
            <td>
            Perform the behaviour when the player releases pressing a controller button: 
            <ul>
                <li>**Contoller Index**: **[Integer](../NodeType#integer)** value corresponds to the index of controller recognized by the system.</li>
                <li>**Button Index**: **[Integer](../NodeType#integer)** value corresponds to the index of button on the specified controller (refer to Controller Button index table).</li>
            </ul></td>
        </tr>
        <tr>
            <td><center>On Timer Finish</center></td>
            <td class="behaviour-block-image"><center><i> ![](/img/BehaviourBlock/GeneralEvent_OnTimerFinish.png) </i></center></td>
            <td>Perform the behaviour when the timer countdown reaches 0.</td>
        </tr>
    </tbody>
</table>