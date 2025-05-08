---
sidebar_position: 6
sidebar_label: Microbit Guideline
---

# Microbit Guideline

The BBC micro:bit is a small, kid-friendly circuit board that makes learning to code fun and creative. It comes with cool features like a 5x5 LED display, two buttons, and a motion sensor. You can connect it to XRCC to build exciting projects that blend coding with the real world!

## Getting Started

### 1. Install microbit HEX example file

1. Connect a microbit to your computer with a USB cable.

![](/img/MicrobitGuideline/Guideline1.png)

2. [Download the microbit HEX example file  [Click Here!]](https://votanic-my.sharepoint.com/:f:/p/tobey/EkM4H-EfqL5AkhgS3Y5W2SIBd4-wW4fTD3t5d4PCJPFYqQ?e=BGG4ZW)

3. Drag and drop the HEX file onto your micro:bit.

![](/img/MicrobitGuideline/Guideline2.png)

### 2. Connect to Microbit in XRCC Edit Mode

1. Power your micro:bit with USB or a battery pack.

![](/img/MicrobitGuideline/Guideline3.png)

2. Open the bluetooth of your device.

![](/img/MicrobitGuideline/Guideline4.png)

3. Open a XRCC project and go to behaviour Panel.

![](/img/MicrobitGuideline/Guideline5.png)

4. Open the microbit panel.

![](/img/MicrobitGuideline/Guideline6.png)

5. Scan the device.

![](/img/MicrobitGuideline/Guideline7.png)

6. Connect the device.

![](/img/MicrobitGuideline/Guideline8.png)

7. Connect successed! We can now test the microbit read and write interaction with Microbit Panel.
In our example Hex file, the interaction will be:

    1. When Microbit Button A is pressed -> Receive “1” in XRCC

    ![](/img/MicrobitGuideline/ButtonA.png)

    2. When Microbit Button B is pressed -> Receive “2” in XRCC

    ![](/img/MicrobitGuideline/ButtonB.png)

    3. When we shake Microbit -> Receive “3” in XRCC

    4. When we send "." message to microbit, the microbit icon will change to heart.
   

![](/img/MicrobitGuideline/Guideline9.png)

### 3. Connect to Microbit in XRCC Play Mode

1. Connect the Microbit successfully in microbit panel. XRCC will save the last connected device and connect it in Play Mode.

![](/img/MicrobitGuideline/Guideline9.png)

2. Drag a "Connect Microbit" behaviour block.

![](/img/MicrobitGuideline/Guideline10.png)

3. Create a string variable to store the received data from Microbit.

![](/img/MicrobitGuideline/Guideline11.png)

3. Get Microbit data by using "On Received Data" behaviour block in play mode. The received data will stored into the "variable" variable.

![](/img/MicrobitGuideline/Guideline12.png)

4. Use the received data to trigger actions in our XRCC Project.

## Example of Interaction of Microbit Received Data

### 1. Check Received Data with Text Object

1. Spawn a Text Object.

![](/img/MicrobitGuideline/Guideline13.png)

2. Set its behaviour to the behaviour shown below:

![](/img/MicrobitGuideline/Guideline14.png)

3. Now, when XRCC receives Microbit data, the text object's text will change.

![](/img/MicrobitGuideline/Demo1.gif)

### 2. Move the Cube with Received Data

1. Ensure the "On Received Data" behaviour Block is called somewhere to store the microbit data to a variable. At this time, the block is called on the Text object if you have followed the above steps.

2. Spawn a Cube Object.

![](/img/MicrobitGuideline/Guideline15.png)

3. Follow the image below to set the behaviour:

When the microbit press button A, the cube will move upwards by 1.
![](/img/MicrobitGuideline/Guideline16.png)

4. Here will be the result: 

![](/img/MicrobitGuideline/Demo2.gif)

## Advanced Usage:

### Customize Microbit Code
1. Go to Microsoft Makecode website and import our example HEX file.

![](/img/MicrobitGuideline/Guideline17.png)
![](/img/MicrobitGuideline/Guideline18.png)

2. Edit the HEX file using Makecode. You can take reference from Microbit's official website and play with other sensors that can interact with Microbit!

![](/img/MicrobitGuideline/Guideline19.png)

3. Export the code and burn it to your microbit. 

4. Connect the microbit to XRCC, you can start to create your content!