import ItemListIcon from '/img/Icon/ItemList.svg';
import SortByDownIcon from '/img/Icon/SortByDown.svg';
import SortByUpIcon from '/img/Icon/SortByUp.svg';
import RenameIcon from '/img/Icon/Rename.svg';
import ViewIcon from '/img/Icon/View.svg';
import UnviewIcon from '/img/Icon/Unview.svg';

## Item Menu {#item-menu .unnumbered}

All objects added to the scene can be viewed from the Item Menu. To access the Item Menu, press the "**Item Menu**" (<ItemListIcon className="XRCCIcon"/>) (**Ctrl + 2**) in the Edit tab. In the menu, all objects in the scene including the parent/child relationship are displayed in a list, you will be able to select, search, sort, rename, delete and hide the object in the scene using the Item Menu.

<div>
  <img src="/img/ItemMenu/ItemMenu.png" alt=""/> 
    <table style={{margin: 20}}>
        <tr>
            <th>Section</th>
            <th>Description</th>
        </tr>
        <tr>
            <td><center><em>1</em></center></td>
            <td>Item List Area</td>
        </tr>
        <tr>
            <td><center><em>2</em></center></td>
            <td>Sorting Options</td>
        </tr>
        <tr>
            <td><center><em>3</em></center></td>
            <td>Search Bar</td>
        </tr>
        <tr>
            <td><center><em>4</em></center></td>
            <td>Search Filter Toggle</td>
        </tr>
        <tr>
            <td><center><em>5</em></center></td>
            <td>Hide all objects in editor mode</td>
        </tr>
        <tr>
            <td><center><em>6</em></center></td>
            <td>Hide object in editor mode</td>
        </tr>
        <tr>
            <td><center><em>7</em></center></td>
            <td>Expand object relationship</td>
        </tr>
        <tr>
            <td><center><em>8</em></center></td>
            <td>Set bookmark color</td>
        </tr>
        <tr>
            <td><center><em>9</em></center></td>
            <td>Rename</td>
        </tr>
        <tr>
            <td><center><em>10</em></center></td>
            <td>Travel to object</td>
        </tr>
    </table>
</div>
  <!-- |Section                            |  Description                              |
  |-----------------------------------| ------------------------------------------|
  |*1*                                | Item list area                            |
  |*2*                                | Sorting options                           |
  |*3*                                | Search bar                                |
  |*4*                                | Search Filter toggle                      | -->

### Selecting Object {#selecting-object .unnumbered}

By clicking on the object in the list, the object will be selected in the scene.

By pressing **Ctrl** while selecting, you can select multiple objects, and by pressing **Shift** and select, it selects all objects in between the already selected object and the object you click.

### Searching Object {#searching-object .unnumbered}

Enter the name of the objects in the search bar on top to filter objects using the search keyword.

### Sorting And Filtering Object {#sorting-and-filtering-object .unnumbered}

<img src="/img/ItemMenu/Filter.png" alt=""/>
The object display order can be filterd using different filtering options. Press "**Toggle Filter Menu**" () to toggle the filter menu, you can choose from 3 types of sorting (Sort by **"Recent"**, **"Name: A to Z"**, **"Sort by type"**).

### Sorting Object Order {#sorting-object-order .unnumbered}

Press "**Toggle Sorting Order**" to toggle the item list in **ascending** ( <SortByUpIcon className="XRCCIcon"/> ) or **descending** ( <SortByDownIcon className="XRCCIcon"/> ) order.

### Renaming Object {#renaming-object .unnumbered}

Press "**Rename**" (<RenameIcon className="XRCCIcon"/>) on the right of the object and type to rename the object.

### Hiding Object {#hiding-object .unnumbered}

Press "**Hide**" (<ViewIcon className="XRCCIcon"/>) on the right of the object to hide the object in **Edit Mode only**. The Hide icon will have a **cross** (<UnviewIcon className="XRCCIcon"/>)to indicate the object is hidden.