---
sidebar_position: 0
sidebar_label: Asset Panel
---

import RenameIcon from '/img/Icon/Rename.svg';
import AttachTagIcon from '/img/Icon/attachTag.svg';
import RemoveIcon from '/img/Icon/remove.svg';

# Asset Panel
You can view and manage all project assets using the Asset Panel.

From the Main Menu, select "**File** -> **Assets Menu**" (**Shift + A**) to open the Asset Panel. You can also access the panel by selecting the "**More**" button on the Assets toolbar on the left side of the scene view. The panel is split into three parts: left , middle and right.

-   **Left**: Display all assets categories tab
-   **Middle**: Grid view that displays every asset in the selected assets category
-   **Right**: Display the details of the selected asset with interactive preview.

![](/img/AssetManagement/AssetManagement.png)

To view assets in the Asset Panel, first select the **asset type** at the left then select a **theme** using the drop down list, all available assets in your chosen theme will be displayed in the grid view. The icons that represent different asset categories are listed below:

{/* | Icon                                                                 |  Asset Type         |
|----------------------------------------------------------------------|:-------------------:|
| ![](/img/AssetManagement/Icon/SpecializeObject.png)  | Specialize Object  
| ![](/img/AssetManagement/Icon/Model.png)             | Model               |
| ![](/img/AssetManagement/Icon/Image.png)             | [Image](docs/PCMode/SceneCreation/Inspector)               |
| ![](/img/AssetManagement/Icon/Audio.png)             | [Audio]              |
| ![](/img/AssetManagement/Icon/Video.png)             | [Video](docs/PCMode/SceneCreation/Inspector)               |
| ![](/img/AssetManagement/Icon/Document.png)          | [Document](docs/PCMode/SceneCreation/Inspector)            |
| ![](/img/AssetManagement/Icon/Motion.png)            | [Motion]             | */}


|Specialize <br />Object|Model|Image|Audio|Video|Document|Motion|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|![](/img/AssetManagement/Icon/SpecializeObject.png)|![](/img/AssetManagement/Icon/Model.png)|![](/img/AssetManagement/Icon/Image.png)|![](/img/AssetManagement/Icon/Audio.png)|![](/img/AssetManagement/Icon/Video.png)|![](/img/AssetManagement/Icon/Document.png)|![](/img/AssetManagement/Icon/Motion.png)|

<br />

By default, all assets in a chosen category will be displayed. You can further filter models by their **theme**. All user-imported assets are put inside the "**Imported Assets**" theme under their respective asset type.

| Theme                            | Description                       |
|----------------------------------|-----------------------------------|
| *All*  | All Object                 |
| *CC Package*  | Imported CC Package Assets   |
| *Imported Model*   | Imported SketchFab Assets                  |

After selecting an asset, a preview will be shown in the preview area on the right. For user-imported asset, you will be able to rename and delete the asset by pressing "**Rename**" (<RenameIcon className="XRCCIcon"/>), **Tag** (<AttachTagIcon className="XRCCIcon"/>) or "**Delete**" (<RemoveIcon className="XRCCIcon"/>) in the drop-down menu under preview area.

![](/img/AssetManagement/ModifyAsset.png) 

##  Search Asset

![](/img/AssetManagement/SearchAsset.png) 

Assets can be searched by their name or associated tags. This feature allows for quick and efficient asset retrieval within the Asset Panel.

1. To search for an asset by name, click the search bar at the top of the Asset Panel, enter the name of the asset you want to find, then press "Enter" or click the search button to filter the assets.
2. To search for an asset by tag, click the search bar, then click the "**Filter by Tags**" button to open the tag search window and select the desired tag from the list.

##  Rename Asset

To rename an asset, click the "**Rename**" (<RenameIcon className="XRCCIcon"/>) button in the drop-down menu under the asset preview. A dialog box will appear, allowing you to enter the new name for the asset.

##  Delete Asset

To delete an asset, click the "**Delete**" (<RemoveIcon className="XRCCIcon"/>) button in the drop-down menu under the asset preview. A confirmation dialog box will appear, asking you to confirm the deletion of the asset. If you confirm, the asset will be removed from the Asset Panel.
