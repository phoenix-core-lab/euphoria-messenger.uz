exports.id=562,exports.ids=[562],exports.modules={14791:(e,t,s)=>{Promise.resolve().then(s.bind(s,9662)),Promise.resolve().then(s.bind(s,72411)),Promise.resolve().then(s.bind(s,34871))},97948:(e,t,s)=>{Promise.resolve().then(s.bind(s,9662)),Promise.resolve().then(s.bind(s,18026))},40424:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,63642,23)),Promise.resolve().then(s.t.bind(s,87586,23)),Promise.resolve().then(s.t.bind(s,47838,23)),Promise.resolve().then(s.t.bind(s,58057,23)),Promise.resolve().then(s.t.bind(s,77741,23)),Promise.resolve().then(s.t.bind(s,13118,23))},34871:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var r=s(97247);s(28964);var i=s(49714),n=s(34739),l=s(10819),o=s.n(l),a=s(99026),d=s.n(a);let c=(0,s(74951).Z)({fontFamily:{body:d().style.fontFamily,display:d().style.fontFamily,code:o().style.fontFamily}});function x({children:e}){return(0,r.jsxs)(i.lL,{theme:c,children:[r.jsx(n.Z,{}),e]})}},18026:(e,t,s)=>{"use strict";s.d(t,{default:()=>R});var r=s(97247),i=s(28964),n=s(71009),l=s(90693),o=s(7413),a=s(56464),d=s(76617),c=s(22690),x=s(43441),h=s(49267),m=s(24833),u=s(14526),p=s(79906),j=s(34178);function f(e){let t=(0,j.usePathname)();return r.jsx(p.default,{href:e.href,style:{textDecoration:"none",color:"inherit"},children:r.jsx(h.Z,{children:(0,r.jsxs)(m.Z,{selected:t===e.href,sx:e.title?{gap:1,padding:"8px"}:{gap:0,paddingY:"8px"},children:[e.icon,r.jsx(u.Z,{children:r.jsx(d.ZP,{level:"title-sm",children:e.title})})]})})})}var g=s(38833),v=s(32088),Z=s(55116),y=s(26339),b=s(94504),C=s(65441),P=s(95498),F=s(85595),S=s(8882);function k(e){let[t,s]=i.useState(!1),[n,a]=i.useState(!1),d=(0,j.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[r.jsx(o.ZP,{variant:"plain","aria-label":"edit",color:"neutral",size:"sm",sx:{display:{xs:"none",sm:"unset"}},onClick:()=>s(!0),children:r.jsx(F.Z,{})}),r.jsx(v.ZP,{"aria-labelledby":"modal-title","aria-describedby":"modal-desc",open:t,onClose:()=>s(!1),sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:n?r.jsx(Z.Z,{variant:"outlined",role:"alertdialog",children:r.jsx(P.Z,{color:"danger",variant:"soft"})}):(0,r.jsxs)(Z.Z,{variant:"outlined",role:"alertdialog",color:"danger",children:[(0,r.jsxs)(y.Z,{children:[r.jsx(S.Z,{}),"Вы уверены, что хотите выйти?"]}),r.jsx(l.Z,{}),r.jsx(b.Z,{children:e.admin?"Выход из админ панели приведет к выходу из аккаунта. Все настройки и данные будут сохранены.":"Все отправленные и полученные сообщения будут сохранены в вашем аккаунте."}),(0,r.jsxs)(C.Z,{children:[r.jsx(g.Z,{variant:"solid",color:"danger",onClick:()=>{a(!0),e.admin&&(document.cookie="token=; path=/; max-age=0"),d.replace("/")},children:"Да"}),r.jsx(g.Z,{variant:"plain",color:"neutral",onClick:()=>s(!1),children:"Нет"})]})]})})]})}var z=s(16755),w=s(34784),I=s(63784),A=s(98969),D=s(23771),E=s(28905),T=s(97885);let L=[{title:"Пользователи",href:"/admin",icon:r.jsx(w.Z,{})},{title:"РОПЫ",href:"/admin/rop",icon:r.jsx(z.Z,{})},{title:"Роли",href:"/admin/roles",icon:r.jsx(D.Z,{})},{title:"Группы",href:"/admin/groups",icon:r.jsx(T.Z,{})},{title:"Чат",href:"/admin/chat",icon:r.jsx(E.Z,{})}];function R(){let[e,t]=(0,i.useState)(!1);return(0,j.usePathname)(),(0,r.jsxs)(c.Z,{className:"Sidebar",sx:{position:{xs:"fixed",md:"sticky"},transform:{xs:"translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",md:"none"},transition:"transform 0.4s, width 0.4s",zIndex:1e4,height:"100dvh",width:e?"76px":"240px",top:0,p:2,flexShrink:0,display:"flex",flexDirection:"column",gap:2,borderRight:"1px solid",borderColor:"divider"},children:[(0,r.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center"},children:[r.jsx(d.ZP,{level:"title-lg",noWrap:!0,sx:{flex:1},children:!e&&"Админ панель"}),r.jsx(o.ZP,{onClick:()=>t(!e),sx:e?{width:"100%"}:{ml:1},children:e?r.jsx(A.Z,{}):r.jsx(I.Z,{})})]}),r.jsx(l.Z,{}),r.jsx(n.Z,{sx:{minHeight:0,overflow:"hidden auto",flexGrow:1,display:"flex",flexDirection:"column"},children:r.jsx(a.Z,{size:"sm",sx:{gap:1,"--List-nestedInsetStart":"30px","--ListItem-radius":"8px"},children:L.map(t=>r.jsx(f,{title:e?"":t.title,href:t.href,icon:t.icon},t.title))})}),r.jsx(l.Z,{}),r.jsx(x.Z,{sx:{paddingY:"8px"}}),r.jsx(k,{admin:!0})]})}},76157:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var r=s(97247);s(28964);var i=s(80209),n=s(23787);let l="abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщьыэюя".split(""),o=e=>{let t=e.charCodeAt(0);return`#${(16777216+(13*t%200+55<<16)+(37*t%200+55<<8)+(61*t%200+55)).toString(16).slice(1)}`},a=e=>{let t=parseInt(e.slice(1,3),16);return .2126*t+.7152*parseInt(e.slice(3,5),16)+.0722*parseInt(e.slice(5,7),16)<128};function d(e){let{online:t=!1,fullname:s="",status:d,...c}=e,x=(e=>{if(!e)return"#CCCCCC";let t=e[0].toLowerCase();return l.includes(t)?o(t):"#CCCCCC"})(s),h=a(x)?"#FFFFFF":"#000000";return r.jsx("div",{children:d?r.jsx(i.Z,{color:"UserStatusOnline"===d.className?"success":"neutral",variant:t?"solid":"soft",size:"sm",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeInset:"4px 4px",children:r.jsx(n.Z,{...c,sx:{bgcolor:x,color:h},children:s[0]||""})}):r.jsx(n.Z,{...c,sx:{bgcolor:x,color:h},children:s[0]||""})})}},43441:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var r=s(97247),i=s(28964),n=s(49714),l=s(7413),o=s(59059),a=s(7041);function d(e){let{onClick:t,sx:s,...d}=e,{mode:c,setMode:x}=(0,n.tv)(),[h,m]=i.useState(!1);return(i.useEffect(()=>{m(!0)},[]),h)?r.jsx(l.ZP,{id:"toggle-mode",size:"sm",variant:"outlined",color:"neutral",...d,onClick:e=>{x("light"===c?"dark":"light"),t?.(e)},sx:[...Array.isArray(s)?s:[s]],children:"light"===c?r.jsx(o.Z,{}):r.jsx(a.Z,{})}):r.jsx(l.ZP,{id:"toggle-mode",size:"sm",variant:"outlined",color:"neutral",...d,sx:[...Array.isArray(s)?s:[s]],children:"light"===c?r.jsx(o.Z,{}):r.jsx(a.Z,{})})}},94564:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(72051);let i=(0,s(45347).createProxy)(String.raw`C:\Users\akbar\Desktop\messenger\Euphoria-messenger.uz\frontend\src\components\admin\Sidebar.tsx#default`);var n=s(67229);function l({children:e}){return(0,r.jsxs)(n.Box,{sx:{display:"flex",minHeight:"100dvh"},children:[r.jsx(i,{}),e]})}},95537:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>a});var r=s(72051),i=s(88750);s(26269);var n=s(67229);let l=(0,s(45347).createProxy)(String.raw`C:\Users\akbar\Desktop\messenger\Euphoria-messenger.uz\frontend\src\components\ThemeRegistry\ThemeRegistry.tsx#default`);var o=s(10247);s(5023);let a={title:"Euphoria-messenger.uz",description:"Euphoria-messenger.uz"};function d({children:e}){return(0,r.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,r.jsxs)("head",{children:[r.jsx(i.Z,{}),r.jsx("meta",{charSet:"UTF-8"}),r.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.jsx("title",{children:a.title}),r.jsx("meta",{name:"description",content:a.description})]}),r.jsx("body",{children:(0,r.jsxs)(l,{children:[r.jsx(n.GlobalStyles,{styles:{}}),r.jsx(o.x7,{position:"top-center",toastOptions:{duration:2e3,success:{style:{border:"1px solid #00A4A6"},iconTheme:{primary:"#00A4A6",secondary:"#fff"}},error:{style:{border:"1px solid #FF0000"},iconTheme:{primary:"#FF0000",secondary:"#fff"}}}}),e]})})]})}},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(54564);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};