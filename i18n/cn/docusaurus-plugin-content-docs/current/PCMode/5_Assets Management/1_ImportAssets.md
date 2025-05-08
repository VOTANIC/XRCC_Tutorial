# Import Assets

You can import your own files and use them in the project to create XR experiences.

## Supported File Format 

The supported file format of each asset type are as follows:

  |Asset Type                   | File Extension|
  |:---------------------------:|--------------------------------------------|
  |*3D Model*                   | .fbx, .obj, .ply, .stl, .gltf, .glb, .3mf|
  |*Image*                      |bmp, .jpg, .jpeg, .png <mark>*(max. 16,384 pixels for width/height)*</mark>|
  |*Audio*                      |.mp3, .wav|
  |*Video*                      |.mp4|
  |*Document*                   |.pdf|
  |*Motion*                     |.vmcd <mark>*(add-on feature)* </mark>|
  |*Character*                  |<mark>*(User assets import not available)*</mark>|

## Import New Assets

Press "**Import Assets**" (**Ctrl + I**) in the Edit tab to import new assets to the project. The file browser will appear for you to select the assets to import to the project.

![](/img/ImportNewAssets/FileBrowser.png)

The wait screen will appear when importing large 3D model.

![](/img/ImportNewAssets/DialogPanel.png)

After importing models successfully, you will be prompted to recenter the imported model.

![](/img/media/media/image75.png)

Recentering the model will automatically reset the 3D model's origin to its center position.

|  With recenter model's origin  |  Without recenter model's origin  |
|--------------------------------|-----------------------------------|
|![](/img/media/media/image76.png)  |  ![](/img/media/media/image77.png)   |

By default, the file browser will filter and list out all the supported files in the chosen directory for your selection. Additionally, you can designate an asset type to further filter out the files by selecting one type of asset in the File type drop down list.

To import multiple files at once, press and hold the **Ctrl** key and click on multiple items or click on the first file and hold the **Shift** key while click on another file to select all files in between, then press "**Import**" to import all selected files to the project.

The last 2 recent folders where you chose to open file will be displayed in the quick access panel on the left.