---
sidebar_position: 2
sidebar_label: Version 2 to Version 3 Migration Note
---

# Version 2 to Version 3 Migration Note

This section is for those who have experience or a project in on XRCC 2.0 and wondering the impact when upgrading to XRCC 3.0.

## Upgrading 2.0 project to 3.0

In order to upgrade an existing 2.0 project to 3.0, we recommend making a **backup** of your 2.0 project, then **open the project directly in XRCC 3.0** (PC or XR). The project will upgrade to a 3.0 project **automatically** when it is first open. 

:::tip
It is normal for an 2.0 project to not show its thumbnail in XRCC's homepage, as it is a new feature in 3.0. 

The thumbnail will display as normal after upgrading to 3.0
:::

When the project is loaded, you can **play test** the project to make sure the behaviour work the same as the original version. If some object moved at a **wrong speed** or to a **wrong position**, you might need to fix your project behaviour flow.

## Change in movement related behaviour logic

In XRCC 2.0, we notice a small portion of projects will call 2 of the same movement behaviour blocks (move / rotate / scale) to the same object at the same time. This is not an expected usage of the behaviour system and will caused unexpected behaviour.

In 3.0, we improved our behaviour system to fully support this use case, and in turns, making some project have different behaviour after upgrade. The only way to fix this is to change the behaviour flow in the project. We will explain this behaviour change in detail to help this upgrade process.

:::note Quick Summary

When 2 movement behaviour of the same type is call,

In 2.0,
- The earliest call have higher priority and is applied
- The other behaviour call will get ignore until the 1st call is completed.

In 3.0,
- Relative movement block can be apply simultaneously and the speed is combined. (except rotate due to Mathematics difficulty)
- For Set Position / Rotation / Scale block, they cannot be combine therefore have higher priority then relative movement block and will overwrite them. 
- The latest behaviour call have the higher priority.
:::

### Change in detail

In 2.0, if 2 Move behaviour block is apply to the same object at the same time, only the earliest behaviour call will be apply. For the 2nd behaviour call, it will still run in the background but the move effect is not applied to the object (because the 1st move behaviour is still active). When the 1st behaviour have ended, if the 2nd behaviour is still running, it will apply its position immediately based on its progress in term of duration, and lasted until its duration end.

For example, let say we have 2 move behaviour block A and B called after Start. Block A will move for 40m, for duration of 10 sec. Block B will move for 20m, for duration of 5 sec. Only Block A will take effect because it cover the whole duration of Block B.

![](/img/FAQ/MigrationNote2to3/6.png)
![](/img/FAQ/MigrationNote2to3/XRCC2_0Example.gif)

In 3.0, if 2 Move behaviour block is apply to the same object at the same time, both behaviour calls will be apply and the movement speed is combined. As a result, the final moving speed and distance might be further than expected. For Set Position block, because they cannot be combine in meaningfully way, they will overwrite the motion instead of combining, with the latest call overwriting the others.

In the example, Block A and B take effect at the same time, making it move faster in the first 5 second, and then move in the speed set by Block A.

![](/img/FAQ/MigrationNote2to3/3.png)
![](/img/FAQ/MigrationNote2to3/XRCC3_0Example.gif)

The Rotate block is an exception, and the latest call will overwriting the others. This is due to it cannot be combine in a meaningfully way without confusing the user.
