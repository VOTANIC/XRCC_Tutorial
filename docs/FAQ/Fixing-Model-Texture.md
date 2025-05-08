---
sidebar_position: 3
sidebar_label: Fixing Model Texture
---

import InspectorIcon from '/img/Icon/InspectorToggle.svg';
import PlayModeIcon from '/img/Icon/PlayMode.svg';
import ImportAssetIcon from '/img/Icon/more.svg';
import YouTube from 'react-youtube';

#  Fixing Model Texture

This section is for those who have experience in import 3D models to XRCC and meet problems on model texture. We will use Blender to fix the model with unexpected texture.

<YouTube
  videoId={'_8PhQh5lRT8'}
  title={'Fixing Model Texture'}
/>

## Materials Prepare
Before the tutorial, you need to prepare the materials below:
1. A model with strange texture.
2. Install Blender with version 4.2 or above. [Click Here to Download](https://www.blender.org/)


## Tutorial Start

### Import Model
We should first import the model to blender, and find out the problem.

1.  Open Blender and clean up the workplace. Select all objects and press "**Delete**" to delete all objects.
![](/img/Support/FixingModelTexture/1.gif)

2.  Import the model to Blender. Blender 4.2 or above, we can import models by dragging them to the 3D viewport.
![](/img/Support/FixingModelTexture/2.gif)

3.  Go to Material Preview Mode to check the model texture. You can swich to this mode by clicking the 3rd circle icon at the top right corner.
![](/img/Support/FixingModelTexture/3.gif)

### Fix Model Texture
There are several cases that we may meet. The steps below will show the way to fix different cases.

#### Model Appears White
In this case, the model is completely missing the texture. We need to add image texture to the model material.

1.  At the right side open the Material Properties, click the yellow cirle at the "**Base Color**" attribute, and select "**Image Texture**".
![](/img/Support/FixingModelTexture/4.gif)

2. Click "**Open**" and select the image. Usually the image name will contains "abedo", "MainColor", "Diffuse" etc. keywords.
![](/img/Support/FixingModelTexture/5.gif)

#### Model Appears Pink
In this case, the material has image texture, but Blender cannot read the image through the file path. We can see the image below at the right side, the Base Color, Metallic, Roughness has .png files, but the model is pink.
![](/img/Support/FixingModelTexture/6.png)
1. Click "**File**", "**External Data**", "**Find Missing Files**". Then select the folder than contains the images.
![](/img/Support/FixingModelTexture/7.gif)

### Export Model
The steps below will introduce the way to export file to FBX and GLTF format, which are compatible with XRCC and are some of the most common file format for games.
#### Export Model (FBX)
1. Click "**File**", "**Export**", "**FBX**".
![](/img/Support/FixingModelTexture/8.gif)
2. After rename the file, remember to change the Path Mode to ""**Copy**"", and enable the Embed Texture toggle next to it.
![](/img/Support/FixingModelTexture/9.gif)
#### Export Model (GLTF)
Actually no additional settings to change in exporting .gltf file. Just export the model as normal.
![](/img/Support/FixingModelTexture/10.gif)

### Texture Checking
Rather than re-import model to XRCC, you can also check the model texture by using the online 3D viewer for your convenience. [Click Here](https://3dviewer.net/)

Drag the model to the website to check the texture. The model has embedded texture if it shows the color.
![](/img/Support/FixingModelTexture/11.gif)