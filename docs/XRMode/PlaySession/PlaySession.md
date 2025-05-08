import HomeIcon from '/img/XR/Icon/PlaySession/home.svg';
import EditIcon from '/img/XR/Icon/PlaySession/edit.svg';
import RecallIcon from '/img/XR/Icon/PlaySession/call.svg';
import CloseIcon from '/img/XR/Icon/PlaySession/close.svg';
import ToolsIcon from '/img/XR/Icon/PlaySession/tools.svg';
import WandIcon from '/img/XR/Icon/PlaySession/wand.svg';
import DocCardList from '@theme/DocCardList';

# Play Session

XRCC allows the user to launch a play session to play a project in an XR environment, to explore and interact with your project's scene and object. A session can be launched **standalone** through local session, or in **multi-player** mode by hosting and joining hosted multi-player sessions through the internet.

During a play session, press the **Menu** button opens the main menu with fewer options compared to the Edit Mode:

![](/img/XR/PlaySession/PlaySessionMenu.png)

| Tool                 | Icon                          | Function                                                                            |
|:--------------------:|:-----------------------------:|-------------------------------------------------------------------------------------|
| *Back To Home Page*  | <HomeIcon className="XRCCIconXRModeTable"/> | Exit the session                                                                    |
| *Tool Menu*          | <WandIcon className="XRCCIconXRModeTable"/> | Change wand mode                                                                         |
| *Recall Player*      | <RecallIcon className="XRCCIconXRModeTable"/>  |Recall other players to host’s position (Available only to multiplayer session host) |
| *Close Menu*         | <CloseIcon className="XRCCIconXRModeTable"/> |Close the main menu                                                                  |
| *Edit*  | <EditIcon className="XRCCIconXRModeTable"/> |    Back to the edit mode       |
| *Utility tool*  | <ToolsIcon className="XRCCIconXRModeTable"/> |    Change wand to utility tool       |

<DocCardList />




