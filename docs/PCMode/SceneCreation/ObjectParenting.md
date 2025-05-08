---
sidebar_position: 5
sidebar_label: Object Parenting
---

import LinkIcon from '/img/Icon/Link.svg';
import UnlinkIcon from '/img/Icon/unlink.svg';

# Object Parenting

Parenting is a one-way linkage between a **Parent** object and its
**Child** object(s).

After parenting, the child object(s) become a part of the parent object and will follow its parent when the parent object is selected, transformed, or hidden.

:::note
Linkage between parent and child is allowed to be nested 3 times, meaning a parent can have multiple children, each of which can have their own children.
:::

## Linking Parent and Child

|Step|Description|Image|
|-------|--------|-----|
|1|Select object(s) as the child object and press "**Link to another item**" (<LinkIcon className="XRCCIcon"/>) **(Ctrl + L)** in the Pop-up Menu|![](/img/ObjectParenting/LinkStep1.png)|
|2|A dashed line will extend from the object to the cursor. Select an object that will become the parent object to finish the parenting process. After linking, user can view the relationship between the objects at Item Menu.|![](/img/ObjectParenting/LinkStep2.png)|

Link and Unlink can also be found in the Main Menu under "**Edit**".
![](/img/ObjectParenting/LinkUsingDropdownMenu.png)

## Unlinking Objects

|Description|Image|
|-----------|-----|
|To **unlink** the objects, select the child object and press "**Unlink from the existing link**" (<UnlinkIcon className="XRCCIcon"/>) (**Ctrl + L**).| ![](/img/ObjectParenting/Unlink.png)|

:::note
The Unlink operation only breaks off the relationship between the selected child object with the parent object, if you have multiple child objects linked to a parent object, you need to perform the Unlink operation for each child object to completely break off the parenting relationship.
:::

