"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[601],{75578:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(72791),o=n(80184);const l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(n){return(0,o.jsx)(a.Suspense,{fallback:t,children:(0,o.jsx)(e,{...n})})}}},27454:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(72791),o=n(96040),l=n(80184);const s=e=>{let{tooltip:t,children:n,errorProps:s=null,placement:i}=e;return(0,l.jsx)(o.Z,{title:t,placement:i,children:(0,l.jsx)("span",{children:s?(0,a.cloneElement)(n,{...s}):n})})}},2601:(e,t,n)=>{n.r(t),n.d(t,{default:()=>xe});var a=n(72791),o=n(78687),l=n(75952),s=n(57689),i=n(11087),r=n(11135),c=n(25787),d=n(61889),u=n(23814),m=n(41320),h=n(45248),p=n(14917),x=n(74794),b=n(64554),f=n(43896),v=n(80184);const j=a.createContext(null);function y(e){const{children:t,value:n}=e,o=function(){const[e,t]=a.useState(null);return a.useEffect((()=>{t("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),e}(),l=a.useMemo((()=>({idPrefix:o,value:n})),[o,n]);return(0,v.jsx)(j.Provider,{value:l,children:t})}function g(){return a.useContext(j)}function Z(e,t){const{idPrefix:n}=e;return null===n?null:"".concat(e.idPrefix,"-P-").concat(t)}function C(e,t){const{idPrefix:n}=e;return null===n?null:"".concat(e.idPrefix,"-T-").concat(t)}var w=n(87462),A=n(63366),P=n(25228);const M=["children"],E=a.forwardRef((function(e,t){const{children:n}=e,o=(0,A.Z)(e,M),l=g();if(null===l)throw new TypeError("No TabContext provided");const s=a.Children.map(n,(e=>a.isValidElement(e)?a.cloneElement(e,{"aria-controls":Z(l,e.props.value),id:C(l,e.props.value)}):null));return(0,v.jsx)(P.Z,(0,w.Z)({},o,{ref:t,value:l.value,children:s}))}));function T(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=T(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}const S=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=T(e))&&(a&&(a+=" "),a+=t);return a};var z=n(66934),N=n(31402),k=n(94419),W=n(21217);function R(e){return(0,W.Z)("MuiTabPanel",e)}(0,n(75878).Z)("MuiTabPanel",["root"]);const U=["children","className","value"],F=(0,z.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{padding:t.spacing(3)}})),L=a.forwardRef((function(e,t){const n=(0,N.Z)({props:e,name:"MuiTabPanel"}),{children:a,className:o,value:l}=n,s=(0,A.Z)(n,U),i=(0,w.Z)({},n),r=(e=>{const{classes:t}=e;return(0,k.Z)({root:["root"]},R,t)})(i),c=g();if(null===c)throw new TypeError("No TabContext provided");const d=Z(c,l),u=C(c,l);return(0,v.jsx)(F,(0,w.Z)({"aria-labelledby":u,className:S(r.root,o),hidden:l!==c.value,id:d,ref:t,role:"tabpanel",ownerState:i},s,{children:l===c.value&&a}))}));var B=n(13967),H=n(95193);const I={minHeight:60},D=(0,c.Z)((e=>(0,r.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})))((e=>{let{children:t,classes:n,selectedTab:o="0",routes:l,isRouteTabs:i}=e;const r=(0,B.Z)(),{pathname:c=""}=(0,s.TH)(),d=(0,H.Z)(r.breakpoints.down("md")),[u,m]=(0,a.useState)(o),h=[],p=[];if((0,a.useEffect)((()=>{if(i){const e=t.find((e=>e.tabConfig.to===c));e&&m(e.tabConfig.value)}}),[i,t,c]),!t)return null;t.forEach((e=>{h.push(e.tabConfig),p.push(e.content)}));return(0,v.jsx)(y,{value:"".concat(u),children:(0,v.jsxs)(b.Z,{className:n.tabsContainer,children:[(0,v.jsx)(b.Z,{className:n.tabsHeaderContainer,children:(0,v.jsx)(E,{onChange:(e,t)=>{m(t)},orientation:d?"horizontal":"vertical",variant:d?"scrollable":"standard",scrollButtons:"auto",className:n.tabList,children:h.map(((e,t)=>e?(0,v.jsx)(f.Z,{className:n.tabHeader,value:"".concat(t),style:I,...e,disableRipple:!0,disableTouchRipple:!0,focusRipple:!0},"v-tab-".concat(t)):null))})}),(0,v.jsxs)(b.Z,{className:n.tabContentContainer,children:[i?null:p.map(((e,t)=>(0,v.jsx)(L,{classes:{...n.tabPanel},value:"".concat(t),children:e||null},"v-tab-p-".concat(t)))),i?(0,v.jsx)("div",{className:n.tabPanel,children:l}):null]})]})})}));var Y=n(75578),_=n(56087),V=n(87995),J=n(17238),O=n(82295),q=n(57482),K=n(27454),Q=n(47974),X=n(76256);const $=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(758),n.e(881)]).then(n.bind(n,82859))))),G=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(600),n.e(30)]).then(n.bind(n,21353))))),ee=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(779),n.e(145)]).then(n.bind(n,59145))))),te=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(804),n.e(796),n.e(216),n.e(379)]).then(n.bind(n,51379))))),ne=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(804),n.e(216),n.e(501)]).then(n.bind(n,27331))))),ae=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(801),n.e(660),n.e(426)]).then(n.bind(n,426))))),oe=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(801),n.e(298)]).then(n.bind(n,24298))))),le=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(804),n.e(216),n.e(878)]).then(n.bind(n,55521))))),se=(0,Y.Z)(a.lazy((()=>n.e(495).then(n.bind(n,48495))))),ie=(0,Y.Z)(a.lazy((()=>n.e(934).then(n.bind(n,74934))))),re=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(801),n.e(547),n.e(660),n.e(942)]).then(n.bind(n,89942))))),ce=(0,Y.Z)(a.lazy((()=>n.e(21).then(n.bind(n,37021))))),de=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(547),n.e(779),n.e(520),n.e(332)]).then(n.bind(n,62332))))),ue=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(547),n.e(758),n.e(779),n.e(520),n.e(367)]).then(n.bind(n,7032))))),me=(0,Y.Z)(a.lazy((()=>n.e(32).then(n.bind(n,29032))))),he=(0,Y.Z)(a.lazy((()=>Promise.all([n.e(804),n.e(801),n.e(547),n.e(660),n.e(873)]).then(n.bind(n,14873))))),pe=(0,Y.Z)(a.lazy((()=>n.e(405).then(n.bind(n,96405))))),xe=(0,c.Z)((e=>(0,r.Z)({...u.oZ,pageContainer:{border:"1px solid #EAEAEA",width:"100%",height:"100%"},contentSpacer:{...u.Bw.contentSpacer,minHeight:400},redState:{color:e.palette.error.main,"& .min-icon":{width:16,height:16}},yellowState:{color:e.palette.warning.main,"& .min-icon":{width:16,height:16}},greenState:{color:e.palette.success.main,"& .min-icon":{width:16,height:16}},greyState:{color:"grey","& .min-icon":{width:16,height:16}},healthStatusIcon:{position:"relative",fontSize:10,left:26,height:10,top:4},...u.Bz})))((e=>{var t;let{classes:n}=e;const r=(0,m.TL)(),c=(0,s.UO)(),u=(0,s.s0)(),{pathname:b=""}=(0,s.TH)(),f=(0,o.v9)((e=>e.tenants.loadingTenant)),j=(0,o.v9)((e=>e.tenants.currentTenant)),y=(0,o.v9)((e=>e.tenants.currentNamespace)),g=(0,o.v9)((e=>e.tenants.tenantInfo)),Z=c.tenantName||"",C=c.tenantNamespace||"",[w,A]=(0,a.useState)(!1);(0,a.useEffect)((()=>{y===C&&j===Z||(r((0,J.V7)({name:Z,namespace:C})),r((0,O.v)()))}),[j,y,r,Z,C]);const P=b.split("/");let M=P[P.length-1]||"summary";":podName"!==M&&"pods"!==M||(M="pods");const[E,T]=(0,a.useState)(M);(0,a.useEffect)((()=>{T(M)}),[M]);const S=e=>"/namespaces/".concat(C,"/tenants/").concat(Z,"/").concat(e);return(0,v.jsxs)(a.Fragment,{children:[w&&null!==g&&(0,v.jsx)(me,{deleteOpen:w,selectedTenant:g,closeDeleteModalAndRefresh:e=>{A(!1),e&&(r((0,V.y1)("Tenant Deleted")),u("/tenants"))}}),(0,v.jsx)(Q.Z,{label:(0,v.jsx)(a.Fragment,{children:(0,v.jsx)(l.hbI,{label:"Tenants",onClick:()=>u(_.gA.TENANTS)})}),actions:(0,v.jsx)(a.Fragment,{})}),(0,v.jsxs)(x.Z,{className:n.pageContainer,children:[f&&(0,v.jsx)(d.ZP,{item:!0,xs:12,children:(0,v.jsx)(q.Z,{})}),(0,v.jsx)(d.ZP,{item:!0,xs:12,children:(0,v.jsx)(p.Z,{icon:(0,v.jsxs)(a.Fragment,{children:[(0,v.jsx)("div",{className:n.healthStatusIcon,children:g&&g.status&&(0,v.jsx)("span",{className:(z=null===(t=g.status)||void 0===t?void 0:t.health_status,"red"===z?n.redState:"yellow"===z?n.yellowState:"green"===z?n.greenState:n.greyState),children:(0,v.jsx)(l.J$M,{})})}),(0,v.jsx)(l.zb0,{})]}),title:Z,subTitle:(0,v.jsxs)(a.Fragment,{children:["Namespace: ",C," / Capacity:"," ",(0,h.ae)(((null===g||void 0===g?void 0:g.total_size)||0).toString(10))]}),actions:(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[(0,v.jsx)(K.Z,{tooltip:"Delete",children:(0,v.jsx)(l.zxk,{id:"delete-tenant",variant:"secondary",onClick:()=>{A(!0)},color:"secondary",icon:(0,v.jsx)(l.XHJ,{})})}),(0,v.jsx)(K.Z,{tooltip:"Edit YAML",children:(0,v.jsx)(l.zxk,{icon:(0,v.jsx)(l.dY8,{}),id:"yaml_button",variant:"regular","aria-label":"Edit YAML",onClick:()=>{u(S("summary/yaml"))}})}),(0,v.jsx)(K.Z,{tooltip:"Management Console",children:(0,v.jsx)(l.zxk,{id:"tenant-hop",onClick:()=>{u("/namespaces/".concat(C,"/tenants/").concat(Z,"/hop"))},disabled:!g||!(0,X.Yk)(g),variant:"regular",icon:(0,v.jsx)(l.YEz,{style:{height:16}})})}),(0,v.jsx)(K.Z,{tooltip:"Refresh",children:(0,v.jsx)(l.zxk,{id:"tenant-refresh",variant:"regular","aria-label":"Refresh List",onClick:()=>{r((0,O.v)())},icon:(0,v.jsx)(l.DuK,{})})})]})})}),(0,v.jsxs)(D,{selectedTab:E,isRouteTabs:!0,routes:(0,v.jsx)("div",{className:n.contentSpacer,children:(0,v.jsxs)(s.Z5,{children:[(0,v.jsx)(s.AW,{path:"summary",element:(0,v.jsx)(G,{})}),(0,v.jsx)(s.AW,{path:"configuration",element:(0,v.jsx)(pe,{})}),(0,v.jsx)(s.AW,{path:"summary/yaml",element:(0,v.jsx)($,{})}),(0,v.jsx)(s.AW,{path:"metrics",element:(0,v.jsx)(se,{})}),(0,v.jsx)(s.AW,{path:"trace",element:(0,v.jsx)(ie,{})}),(0,v.jsx)(s.AW,{path:"identity-provider",element:(0,v.jsx)(ce,{})}),(0,v.jsx)(s.AW,{path:"security",element:(0,v.jsx)(de,{})}),(0,v.jsx)(s.AW,{path:"encryption",element:(0,v.jsx)(ue,{})}),(0,v.jsx)(s.AW,{path:"pools",element:(0,v.jsx)(te,{})}),(0,v.jsx)(s.AW,{path:"pods/:podName",element:(0,v.jsx)(he,{})}),(0,v.jsx)(s.AW,{path:"pods",element:(0,v.jsx)(ne,{})}),(0,v.jsx)(s.AW,{path:"pvcs/:PVCName",element:(0,v.jsx)(re,{})}),(0,v.jsx)(s.AW,{path:"volumes",element:(0,v.jsx)(le,{})}),(0,v.jsx)(s.AW,{path:"license",element:(0,v.jsx)(ee,{})}),(0,v.jsx)(s.AW,{path:"events",element:(0,v.jsx)(ae,{})}),(0,v.jsx)(s.AW,{path:"csr",element:(0,v.jsx)(oe,{})}),(0,v.jsx)(s.AW,{path:"/",element:(0,v.jsx)(s.Fg,{to:"/namespaces/".concat(C,"/tenants/").concat(Z,"/summary")})})]})}),children:[{tabConfig:{label:"Summary",value:"summary",component:i.rU,to:S("summary")}},{tabConfig:{label:"Configuration",value:"configuration",component:i.rU,to:S("configuration")}},{tabConfig:{label:"Metrics",value:"metrics",component:i.rU,to:S("metrics")}},{tabConfig:{label:"Identity Provider",value:"identity-provider",component:i.rU,to:S("identity-provider")}},{tabConfig:{label:"Security",value:"security",component:i.rU,to:S("security")}},{tabConfig:{label:"Encryption",value:"encryption",component:i.rU,to:S("encryption")}},{tabConfig:{label:"Pools",value:"pools",component:i.rU,to:S("pools")}},{tabConfig:{label:"Pods",value:"pods",component:i.rU,id:"tenant-pod-tab",to:S("pods")}},{tabConfig:{label:"Volumes",value:"volumes",component:i.rU,to:S("volumes")}},{tabConfig:{label:"Events",value:"events",component:i.rU,to:S("events")}},{tabConfig:{label:"Certificate Requests",value:"csr",component:i.rU,to:S("csr")}},{tabConfig:{label:"License",value:"license",component:i.rU,to:S("license")}}]})]})]});var z}))},95193:(e,t,n)=>{var a;n.d(t,{Z:()=>u});var o=n(72791),l=n(69120),s=n(31537),i=n(40162);function r(e,t,n,a,l){const[s,r]=o.useState((()=>l&&n?n(e).matches:a?a(e).matches:t));return(0,i.Z)((()=>{let t=!0;if(!n)return;const a=n(e),o=()=>{t&&r(a.matches)};return o(),a.addListener(o),()=>{t=!1,a.removeListener(o)}}),[e,n]),s}const c=(a||(a=n.t(o,2))).useSyncExternalStore;function d(e,t,n,a,l){const s=o.useCallback((()=>t),[t]),i=o.useMemo((()=>{if(l&&n)return()=>n(e).matches;if(null!==a){const{matches:t}=a(e);return()=>t}return s}),[s,e,a,l,n]),[r,d]=o.useMemo((()=>{if(null===n)return[s,()=>()=>{}];const t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[s,n,e]);return c(d,r,i)}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(0,l.Z)(),a="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:o=!1,matchMedia:i=(a?window.matchMedia:null),ssrMatchMedia:u=null,noSsr:m=!1}=(0,s.Z)({name:"MuiUseMediaQuery",props:t,theme:n});let h="function"===typeof e?e(n):e;h=h.replace(/^@media( ?)/m,"");return(void 0!==c?d:r)(h,o,i,u,m)}}}]);
//# sourceMappingURL=601.e5c508d8.chunk.js.map