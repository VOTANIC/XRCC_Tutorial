import LinkIcon from '/img/Icon/Link.svg';
import UnlinkIcon from '/img/Icon/unlink.svg';

## Object Parenting {#object-parenting .unnumbered}

Parenting is a one-way linkage between a **Parent** object and its
**Child** object(s).

### Linking Parent and Child {#linking-parent-and-child .unnumbered}

To create a linkage, select object(s) as the child object and press "**Link to another item**"
(<LinkIcon className="XRCCIcon"/>) **(Ctrl + L)** in the pop-up menu. A dashed line will extend from the object to the cursor. Select an object that will become the parent object to finish the parenting process. After linking, user can view the relationship between the objects at item panel.

![](/img/media/media/image145.png)

After parenting, the child object(s) become a part of the parent object and will follow its parent when the parent object is selected, transformed, or hidden.

<span> *Linkage betweet parent and child are allowed nesting 3 times, which mean a parent can have mutiple childs which can have other childs.* </span>

### Unlinking Objects {#unlinking-objects .unnumbered}

To **unlink** the objects, select the child object and press "**Unlink from the existing link**" (<UnlinkIcon className="XRCCIcon"/>) (**Ctrl + L**).

*Note that the Unlink operation only breaks off the relationship between the selected child object with the parent object, if you have multiple child objects linked to a parent object, you need to perform the Unlink operation for each child object to completely break off the parenting relationship.*