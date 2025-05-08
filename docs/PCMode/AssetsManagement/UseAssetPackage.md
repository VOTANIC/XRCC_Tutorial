---
sidebar_position: 2
sidebar_label: Use Asset Package
---

import RemoveIcon from '/img/Icon/remove.svg';

# Use Asset Package

External asset package can be loaded for use in the project. To access the Package Panel, select "**Project** -> **Manage Packages**" (**Shift + P**) in the Main Menu.

## Enable Package

To load asset package for use in the current project, press **"Your Package"** to open the Package Panel and select the package that you would like to load, then press "**Import**".

![](/img/EnablePackage/AssetPanel.png)
![](/img/EnablePackage/CCPackage.png)

You will be prompted to confirm the adding of selected package. The import may take some time if the selected package is large.

![](/img/EnablePackage/DialogPanel.png)

After adding the package, the assets in the package will be available for use in the Asset Panel.

![](/img/EnablePackage/Imported.png)

## Delete Package

In the Package Panel, you will be able to delete the added package by pressing **"Remove" (<RemoveIcon className="XRCCIcon"/>).**

![](/img/DeletePackage/DeletePackage.png)

Press **"Remove"** to confirm to proceed the remove package action.

![](/img/DeletePackage/DialogPanel.png)

**"✔ Done"** button is shown next to the package indicates that it is being added to the current project, after deleting the package, there will change to a **"Import"** button.

|Package added                  | Package not added             |
|-------------------------------|-------------------------------|
|![](/img/DeletePackage/PackageAdded.png) |![](/img/DeletePackage/PackageNotAdded.png) |

:::note
Package can only be deleted if none of the package's assets are used in the current project.
:::

## Setup Package

Before loading external asset package in the project, the package file with the **.ccpackage** file format should be put in the local project file (**<code>XRCC > Resources > PredefinedDBs</code>**), so that you will be able to load external package in the project.