"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8901],{88547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(74848),o=n(28453),c=n(3514);const s={},a="Project Management",i={id:"PCMode/ProjectManagement/ProjectManagement",title:"Project Management",description:'This section introduces various project management features of the XRCC PC. A project file is required for editing and playback of the XRCC project. A XRCC project file carries a file extension of ".ccdata" (e.g. "project_name.ccdata"), the default save folder for XRCC project files is located at XRCC > Resources > Saves, but you can also change the XRCC Local Save location in the Settings Panel.',source:"@site/docs/PCMode/ProjectManagement/ProjectManagement.md",sourceDirName:"PCMode/ProjectManagement",slug:"/PCMode/ProjectManagement/",permalink:"/cn/docs/PCMode/ProjectManagement/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"pcSidebar",previous:{title:"Behaviour Page",permalink:"/cn/docs/PCMode/Workspace/BehaviourPage"},next:{title:"Create New Project",permalink:"/cn/docs/PCMode/ProjectManagement/CreateNewProject"}},l={},u=[];function d(e){const t={em:"em",h1:"h1",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"project-management",children:"Project Management"})}),"\n",(0,r.jsxs)(t.p,{children:['This section introduces various project management features of the XRCC PC. A project file is required for editing and playback of the XRCC project. A XRCC project file carries a file extension of "',(0,r.jsx)(t.strong,{children:".ccdata"}),'" (e.g. "',(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"project_name.ccdata"})}),'"), the default save folder for XRCC project files is located at ',(0,r.jsx)(t.strong,{children:"XRCC"})," > ",(0,r.jsx)(t.strong,{children:"Resources"})," > ",(0,r.jsx)(t.strong,{children:"Saves"}),", but you can also change the XRCC Local Save location in the ",(0,r.jsx)(t.strong,{children:"Settings Panel"}),"."]}),"\n",(0,r.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>C});n(96540);var r=n(34164),o=n(26972),c=n(28774),s=n(53465),a=n(16654),i=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:o,description:c}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),c&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:c,children:c})]})}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,i.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const n=(0,o.$S)();return(0,d.jsx)(C,{items:n.items,className:t})}function C(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(j,{...e});const c=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),o=n(44586);const c=["zero","one","two","few","many","other"];function s(e){return c.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),c=n.pluralForms.indexOf(o);return r[Math.min(c,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},c=r.createContext(o);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);