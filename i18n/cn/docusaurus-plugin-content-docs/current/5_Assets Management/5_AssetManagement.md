import RenameIcon from '/img/Icon/Rename.svg';
import AttachTagIcon from '/img/Icon/attachTag.svg';
import RemoveIcon from '/img/Icon/remove.svg';

# Asset Management
You can view and manage all project assets using the Asset Management Panel.

Press "**Assets Menu**" (**Shift + A**) in the drop-down menu in the Project tab to open the Asset Management Panel. The panel is split into three parts: left , middle and right.

-   **Left**: Display all assets categories tab
-   **Middle**: Display every asset and categorize them by their asset type and theme for selection.
-   **Right**: Display the name with an interactive preview of the selected asset.

![](/img/AssetManagement/AssetManagement.png)

The model assets are organized by two layers: by **asset type** (top layer) then by **theme** (bottom layer). All user-imported assets are put inside the "**Imported Assets**" theme under their respective asset type, and the tabs will only appear when there is at least one item in the tab (for both asset type and theme).

To view assets in the Asset Management Panel, first select the **asset type** tab at the top then select a **theme** at the bottom, all available assets in your chosen category will be displayed in the grid view underneath the asset category tabs. The icons that represent different asset categories are listed below:

| Icon                                                                 |  Asset Type         |
|----------------------------------------------------------------------|:-------------------:|
| ![](/img/AssetManagement/Icon/SpecializeObject.png)  | Specialize Object   |
| ![](/img/AssetManagement/Icon/Model.png)             | Model               |
| ![](/img/AssetManagement/Icon/Image.png)             | Image               |
| ![](/img/AssetManagement/Icon/Audio.png)             | Audio               |
| ![](/img/AssetManagement/Icon/Video.png)             | Video               |
| ![](/img/AssetManagement/Icon/Document.png)          | Document            |
| ![](/img/AssetManagement/Icon/Motion.png)            | Motion              |

| Theme                            | Description                       |
|----------------------------------|-----------------------------------|
| *All*  | All Object (under Model)                |
| *Generic Shapes*  | Generic Shapes (under Model)                   |
| *CC Package*  | Imported CC Package Assets (under Model)  |
| *Imported Model*   | Imported SketchFab Assets (for all asset types)                  |

After selecting an asset, a preview will be shown in the preview area on the right. For user-imported asset, you will be able to rename and delete the asset by pressing "**Rename**" (<RenameIcon className="XRCCIcon"/>), **Attach Tag** (<AttachTagIcon className="XRCCIcon"/>) or "**Delete**" (<RemoveIcon className="XRCCIcon"/>) in the drop-down menu under preview area.

![](/img/AssetManagement/ModifyAsset.png) 