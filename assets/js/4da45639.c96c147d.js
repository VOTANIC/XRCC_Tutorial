"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1841],{57137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(74848),r=n(28453);const o={sidebar_position:2,sidebar_label:"Set up Entity in XR Configuration File"},s="Set up Entity in XR Configuration File",c={id:"PCMode/AppendixB/SetupEntityinXRConfigurationFile",title:"Set up Entity in XR Configuration File",description:"Locate the VotanicXR Configuration File",source:"@site/docs/PCMode/AppendixB/SetupEntityinXRConfigurationFile.md",sourceDirName:"PCMode/AppendixB",slug:"/PCMode/AppendixB/SetupEntityinXRConfigurationFile",permalink:"/docs/PCMode/AppendixB/SetupEntityinXRConfigurationFile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Set up Entity in XR Configuration File"},sidebar:"pcSidebar",previous:{title:"Pre-requisite",permalink:"/docs/PCMode/AppendixB/Pre-requisite"}},a={},l=[{value:"Locate the VotanicXR Configuration File",id:"locate-the-votanicxr-configuration-file",level:2},{value:"For CAVE",id:"for-cave",level:3},{value:"For HMD",id:"for-hmd",level:3},{value:"Associate Entity with Tracker",id:"associate-entity-with-tracker",level:2},{value:"Enable the tracker in your XRCC Project",id:"enable-the-tracker-in-your-xrcc-project",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"set-up-entity-in-xr-configuration-file",children:"Set up Entity in XR Configuration File"})}),"\n",(0,i.jsx)(t.h2,{id:"locate-the-votanicxr-configuration-file",children:"Locate the VotanicXR Configuration File"}),"\n",(0,i.jsx)(t.h3,{id:"for-cave",children:"For CAVE"}),"\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.strong,{children:"VotanicXR Suite's installation directory,"})," typically it's located at \"",(0,i.jsx)(t.strong,{children:"C:\\Program Files\\Votanic"}),'". Open the Configs folder and double-click to open the ',(0,i.jsx)(t.strong,{children:"ConfigCAVE.vrxc"})," file (or the CAVE config file you will use to run XRCC)."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)(t.img,{src:n(42712).A+"",width:"755",height:"387"})}),"\n",(0,i.jsx)(t.h3,{id:"for-hmd",children:"For HMD"}),"\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.strong,{children:"XRCC 2's installation directory,"})," typically it's located at \"",(0,i.jsx)(t.strong,{children:"C:\\Program Files\\Votanic\\XRCC 2"}),'". Navigate to the "XRCC (XR)\\VotanicXR\\Configs" director and double-click to open the ',(0,i.jsx)(t.strong,{children:"ConfigHMD.vrxc"})," file."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)(t.img,{src:n(22199).A+"",width:"751",height:"279"})}),"\n",(0,i.jsx)(t.h2,{id:"associate-entity-with-tracker",children:"Associate Entity with Tracker"}),"\n",(0,i.jsx)(t.p,{children:"We will use the CAVE configuration as an example here."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:['With the CAVE config opened, select "',(0,i.jsx)(t.strong,{children:"XR Objects"}),'" then click "',(0,i.jsx)(t.strong,{children:"Edit --\x3e Generate Entities"}),'". This will add all Entities in XRCC.']}),"\n"]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)(t.img,{src:n(32206).A+"",width:"1602",height:"932"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:['Select "',(0,i.jsx)(t.strong,{children:"Devices"}),'" and create a ',(0,i.jsx)(t.strong,{children:"new VRPN Device"})," for the Entity object you are going to use. Here we use the example of the Entity1Tracker as an example, assuming that you've already have the Entity1Tracker configured in the motion capture system."]}),"\n"]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)(t.img,{src:n(50981).A+"",width:"1602",height:"932"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:['Now go back to the XR Objects tab, select the Entity1 object and confirm the "',(0,i.jsx)(t.strong,{children:"Linked Tracker"}),"\" is having the same name as the new VRPN device you've created in the previous step. Now save the configuration and you are ready to use the Entity object with tracking capability."]}),"\n"]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)(t.img,{src:n(33468).A+"",width:"1602",height:"932"})}),"\n",(0,i.jsx)(t.h2,{id:"enable-the-tracker-in-your-xrcc-project",children:"Enable the tracker in your XRCC Project"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["In the XRCC project, find ",(0,i.jsx)(t.strong,{children:"Entity Setting"})," in the top menu. The ",(0,i.jsx)(t.strong,{children:"Tracking Entity Setting Panel"})," will show up."]}),"\n"]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:"/img/XRConfiguration/EnableEntity.png",alt:""})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Enable the ",(0,i.jsx)(t.strong,{children:"Entity 1"})," in the Tracking Entity Setting Panel will connect XRCC entity setting to the Entity1 object in VotanicXR configuration."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["For the usage of the tracking entity, please refer to the chapter ",(0,i.jsx)(t.a,{href:"file:///C:%5CUsers%5CUser%5CDesktop%5CUser%20Guide%20(PC)_0119_merged_HKU.docx#_Add_Real-World_Tracked",children:(0,i.jsx)(t.strong,{children:"Add real world tracker to scene"})}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},42712:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image299-c84f85bb164686afb1dda2378102dbcc.png"},22199:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image300-78a360123fcf65c426f495d569ab63c6.png"},32206:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image301-8a9c8d9bc8c9b657ba31f36e26e12b26.png"},50981:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image302-1c5746d4a93cbbdd364d05d44913c9a9.png"},33468:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image303-931200ac04a65bf47c51baf6ef271db1.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);