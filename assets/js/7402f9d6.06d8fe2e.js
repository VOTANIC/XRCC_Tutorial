"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4417],{77498:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=i(74848),s=i(28453);const r={sidebar_position:3,sidebar_label:"Using Multi-User Editing"},o="Using Multi-User Editing",l={id:"PCMode/Multi-UserNetworkedEditing/UsingMulti-UserEditing",title:"Using Multi-User Editing",description:"Upload project to Network Server (First Time only)",source:"@site/docs/PCMode/Multi-UserNetworkedEditing/UsingMulti-UserEditing.md",sourceDirName:"PCMode/Multi-UserNetworkedEditing",slug:"/PCMode/Multi-UserNetworkedEditing/UsingMulti-UserEditing",permalink:"/XRCC_Tutorial/PCMode/Multi-UserNetworkedEditing/UsingMulti-UserEditing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Using Multi-User Editing"},sidebar:"pcSidebar",previous:{title:"Configure Multi-User Network in XRCC PC",permalink:"/XRCC_Tutorial/PCMode/Multi-UserNetworkedEditing/ConfigureMulti-UserNetworkinXRCCPC"},next:{title:"Misc",permalink:"/XRCC_Tutorial/PCMode/Misc/"}},d={},a=[{value:"Upload project to Network Server (First Time only)",id:"upload-project-to-network-server-first-time-only",level:2},{value:"Editing projects on Network Server",id:"editing-projects-on-network-server",level:2},{value:"Debug networked project in Play Mode",id:"debug-networked-project-in-play-mode",level:2},{value:"Start Multi-User Debugging",id:"start-multi-user-debugging",level:2},{value:"Export Networked Project",id:"export-networked-project",level:2},{value:"Exit Multi-User Editing",id:"exit-multi-user-editing",level:2}];function c(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"using-multi-user-editing",children:"Using Multi-User Editing"})}),"\n",(0,n.jsx)(t.h2,{id:"upload-project-to-network-server-first-time-only",children:"Upload project to Network Server (First Time only)"}),"\n",(0,n.jsx)(t.p,{children:"In order to let your team get into your project, you need to upload the project first."}),"\n",(0,n.jsxs)(t.p,{children:["On the Networking Panel, click ",(0,n.jsx)(t.strong,{children:"Upload"})," to launch the Create Online Project panel where you can select an existing local project to the network server and input the infomation of the online project.\r\n",(0,n.jsx)(t.img,{src:i(93777).A+"",width:"1756",height:"987"})]}),"\n",(0,n.jsxs)(t.p,{children:["After the project is selected and the information are filled, click ",(0,n.jsx)(t.strong,{children:"Upload to Server"})," to upload the project to server. Optionally, you can set a password for the project to restrict unauthorized access of your project on the network server.\r\n",(0,n.jsx)(t.img,{src:i(42110).A+"",width:"1756",height:"987"})]}),"\n",(0,n.jsx)(t.h2,{id:"editing-projects-on-network-server",children:"Editing projects on Network Server"}),"\n",(0,n.jsx)(t.p,{children:"Before you go into multi-user editing, it's good to know that there are a few ground rules in multi-user editing:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"All changes in the scene and behaviour are synchronized across all users in real time"}),"\n",(0,n.jsx)(t.li,{children:"Importing assets and managing packages are disabled"}),"\n",(0,n.jsx)(t.li,{children:"Users cannot simultaneously edit an object or a behaviour, the first user making the edits will have authority of the object"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Follow the steps below to start multi-user editing."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Select project from ",(0,n.jsx)(t.strong,{children:"the project list"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(47213).A+"",width:"1756",height:"987"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Select project and click ",(0,n.jsx)(t.strong,{children:"Host/Join Session"}),' to enter multi-user edit. The first user joining the project will see "Host Session" and all users that follows will see "Join Session".']}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(16157).A+"",width:"1756",height:"987"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"The Networking Panel will display the project details, including project name, current list of users in the network session and description."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(83571).A+"",width:"1756",height:"987"})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsx)(t.li,{children:"When the networked scene is loaded, you will see another users in the scene. Each user is represented by a head and a hand model in the scene, allowing you to see where that person is doing the editing."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(3471).A+"",width:"810",height:"656"})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsxs)(t.li,{children:["User can ",(0,n.jsx)(t.strong,{children:"edit together"})," in the scene (including the configuration and behaviour of an object) but ",(0,n.jsx)(t.strong,{children:"cannot"})," edit the ",(0,n.jsx)(t.strong,{children:"same"})," object or behaviour simultaneously. You will see which user is currently editing a given object / behaviour when you access it."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(73246).A+"",width:"923",height:"379"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"User cannot use the asset management features in Networked Project."})}),"\n",(0,n.jsx)(t.h2,{id:"debug-networked-project-in-play-mode",children:"Debug networked project in Play Mode"}),"\n",(0,n.jsxs)(t.p,{children:["User can click the ",(0,n.jsx)(t.strong,{children:"play"})," button to debug the project in similar way to a local project."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(8974).A+"",width:"1755",height:"986"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Multi-user is not available in XRCC PC play mode, user will need to use the XRCC XR's Play Session to perform multi-user playback."})}),"\n",(0,n.jsx)(t.h2,{id:"start-multi-user-debugging",children:"Start Multi-User Debugging"}),"\n",(0,n.jsxs)(t.p,{children:["Press debug button to start debug mode.\r\n",(0,n.jsx)(t.img,{src:i(19415).A+"",width:"1756",height:"986"}),"\r\nIn network mode, users have the option to debug their project in either Local or Multiplayer mode. Multiplayer mode allows for debugging with all connected players in real time, while Local mode enables individual debugging."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:i(2530).A+"",width:"1756",height:"986"}),"\r\nWhen the first user try to start mutiplayer debugging, an invitation of mutiplayer debugging will be sent to all player. All user can choose to accept or cancel the invitation.\r\n",(0,n.jsx)(t.img,{src:i(1817).A+"",width:"1756",height:"986"}),"\r\nBefore all user press the accept button, the user who send the invitation will wait until other users make a decision."]}),"\n",(0,n.jsx)(t.h2,{id:"export-networked-project",children:"Export Networked Project"}),"\n",(0,n.jsxs)(t.p,{children:["The networked project is ",(0,n.jsx)(t.strong,{children:"auto-saved"})," and there's no need to manually save the project. However, if you need an ",(0,n.jsx)(t.strong,{children:"offline or individual copy"}),', you can select "',(0,n.jsx)(t.strong,{children:"Project"})," -> ",(0,n.jsx)(t.strong,{children:"Save As"}),'" in the Main Menu to export a copy of the project to your file system.']}),"\n",(0,n.jsx)(t.h2,{id:"exit-multi-user-editing",children:"Exit Multi-User Editing"}),"\n",(0,n.jsxs)(t.p,{children:['Select "',(0,n.jsx)(t.strong,{children:"Project"})," -> ",(0,n.jsx)(t.strong,{children:"Exit"}),'" ',(0,n.jsx)(t.strong,{children:"(Ctrl + H)"})," to quit the networked\r\nproject."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(30038).A+"",width:"1756",height:"984"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(19199).A+"",width:"1756",height:"984"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"User is encouraged to keep the network server running while there is still user in the networked project, otherwise unexpected issue may occur."})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19199:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/AfterCloseProjectButton-ec284928d873b6eb4ecba23df7e4fa24.png"},30038:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/BeforeCloseProjectButton-20ded110759b1cea1ac02a845bd5ce6d.png"},73246:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/BlockerForBehaviour-7a134d50e8c73729f019310267034f82.png"},93777:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/ClickUploadButton-594716fc027dd067e45d04b46c9acde7.png"},16157:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/HostOrJoinSession-a4f40129c0470efece9b887d9b97babd.png"},19415:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/MutiPlayerDebug-dfcd340055e0fbfac51da43a65eba9b6.png"},2530:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/MutiPlayerDebugInvitation-63f0f8bf5454de79f39a91b35c2ec9b3.png"},1817:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/MutiPlayerDebugWaitInvitation-c5138ab7bf3e606b3ae40309e5423cf3.png"},3471:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/NetworkPlayer-20af6d88e09490d9c936e3a902a14ada.png"},8974:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/PlayButton-0e734a1131401067978f303a96d2efc0.png"},83571:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/ProjectDetails-df01db81e3e803ce8d3bbd101ee46b9f.png"},47213:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/SelectProject-db42cf8a68146a591e071c7f7545cfca.png"},42110:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/UploadProjectToServer-e1e108b29247bf3345a2a0276e473a40.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);