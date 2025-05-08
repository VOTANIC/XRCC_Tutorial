---
sidebar_position: 15
sidebar_label: FlowControl
---

# Flow Control

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
            <td><center>Branch</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/FlowControl_Branch.png)</center></td>
            <td>
                Direct the flow of execution based on the condition. Execute one branch of blocks if a given condition is true, execute another branch if the condition is false.
                <ul>
                    <li><strong>Condition</strong>: [**Boolean**](../NodeType#boolean) value examining the condition which led to the branching of the execution flow.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Repeat</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/FlowControl_Repeat.png)</center></td>
            <td>
                Repeat a branch of execution when the given condition is true, flow to another branch of execution when the condition is false.
                <ul>
                    <li><strong>Condition</strong>: [**Boolean**](../NodeType#boolean) value examining the condition which led to the repeating of a branch of blocks or the execution of another branch of blocks only once.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Wait For</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/FlowControl_WaitFor.png)</center></td>
            <td>
                Delay the execution between the previous block and the next block for a specified time duration.
                <ul>
                    <li><strong>Time</strong>: [**Number**](../NodeType#number) value specifying the time to wait.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Wait Until</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/FlowControl_WaitUntil.png)</center></td>
            <td>
                Delay the execution between the previous block and the next block until the condition is satisfied.
                <ul>
                    <li><strong>Condition</strong>: [**Boolean**](../NodeType#boolean) value examining the condition for which the delay ends.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><center>Parallel</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/FlowControl_Parallel.png)</center></td>
            <td>Execute 2 branches of execution simultaneously.</td>
        </tr>
        <tr>
            <td><center>Call Action</center></td>
            <td class="behaviour-block-image"><center>![](/img/BehaviourBlock/FlowControl_CallAction.png)</center></td>
            <td>
                Execute the specified action defined in an object's behaviour groups.
                <ul>
                    <li><strong>Target Action</strong>: The [**Action**](../NodeType#action) from a specified object to be called and executed in the behaviour.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>