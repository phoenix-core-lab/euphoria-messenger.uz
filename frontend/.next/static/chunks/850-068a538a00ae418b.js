"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{36766:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(57437);n(2265);var s=n(87505),i=n(18467);let o="abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщьыэюя".split(""),l=e=>{let t=e.charCodeAt(0);return"#".concat((16777216+(13*t%200+55<<16)+(37*t%200+55<<8)+(61*t%200+55)).toString(16).slice(1))},a=e=>{let t=parseInt(e.slice(1,3),16);return .2126*t+.7152*parseInt(e.slice(3,5),16)+.0722*parseInt(e.slice(5,7),16)<128};function d(e){let{online:t=!1,fullname:n="",status:d,...c}=e,u=(e=>{if(!e)return"#CCCCCC";let t=e[0].toLowerCase();return o.includes(t)?l(t):"#CCCCCC"})(n),x=a(u)?"#FFFFFF":"#000000";return(0,r.jsx)("div",{children:d?(0,r.jsx)(s.Z,{color:"UserStatusOnline"===d.className?"success":"neutral",variant:t?"solid":"soft",size:"sm",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeInset:"4px 4px",children:(0,r.jsx)(i.Z,{...c,sx:{bgcolor:u,color:x},children:n[0]||""})}):(0,r.jsx)(i.Z,{...c,sx:{bgcolor:u,color:x},children:n[0]||""})})}},50850:function(e,t,n){n.d(t,{default:function(){return eh}});var r=n(57437),s=n(2265),i=n(84737),o=n(5481),l=n(11608),a=n(66500),d=n(46468),c=n(20111),u=n(85024),x=n(53092),h=n(38998);function g(){return(0,r.jsx)(o.Z,{sx:{px:2,pb:1.5},children:(0,r.jsx)(x.ZP,{size:"sm",startDecorator:(0,r.jsx)(h.Z,{}),placeholder:"Поиск...","aria-label":"Search"})})}var p=n(55075),m=n(70662),f=n(10915),j=n(1958),v=n(87349),Z=n(36164),y=n(74183),b=n(18154),w=n(23824),C=n(17925),I=n(81630),S=n(98897),k=n(68763),R=n(55972);function D(){let[e,t]=s.useState(!1),[n,i]=s.useState(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.ZP,{variant:"plain","aria-label":"edit",color:"neutral",size:"sm",sx:{display:{xs:"none",sm:"unset"}},onClick:()=>t(!0),children:(0,r.jsx)(k.Z,{})}),(0,r.jsx)(v.ZP,{"aria-labelledby":"modal-title","aria-describedby":"modal-desc",open:e,onClose:()=>t(!1),sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:n?(0,r.jsx)(y.Z,{variant:"outlined",role:"alertdialog",children:(0,r.jsx)(S.Z,{color:"danger",variant:"soft"})}):(0,r.jsxs)(y.Z,{variant:"outlined",role:"alertdialog",color:"danger",children:[(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(R.Z,{}),"Вы уверены, что хотите выйти?"]}),(0,r.jsx)(w.Z,{}),(0,r.jsx)(C.Z,{children:"Все отправленные и полученные сообщения будут сохранены в вашем аккаунте."}),(0,r.jsxs)(I.Z,{children:[(0,r.jsx)(j.Z,{variant:"solid",color:"danger",onClick:()=>{window.location.href="/"},children:"Да"}),(0,r.jsx)(j.Z,{variant:"plain",color:"neutral",onClick:()=>t(!1),children:"Нет"})]})]})})]})}function P(e){return(0,r.jsxs)(l.Z,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",p:2,pb:1.5,children:[(0,r.jsx)(f.Z,{}),(0,r.jsx)(p.ZP,{fontSize:{xs:"md",md:"lg"},component:"h1",fontWeight:"lg",sx:{mr:"auto"},endDecorator:e.unreadDialogs&&(0,r.jsx)(m.Z,{variant:"soft",color:"primary",size:"md",slotProps:{root:{component:"span"}},children:e.unreadDialogs}),children:"Сообщения"}),(0,r.jsx)(D,{})]})}var z=n(44038),A=n(18151),F=n(36766),E=n(1324);function M(e){return"777000"===e.userId?null:(console.log(e.title),console.log(e.userId),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z.Z,{children:(0,r.jsxs)(A.Z,{onClick:()=>{e.setSelectedUserId(e.userId.toString())},selected:e.selected,color:"neutral",sx:{flexDirection:"column",alignItems:"initial",gap:1},children:[(0,r.jsxs)(l.Z,{direction:"row",spacing:1.5,children:[(0,r.jsx)(F.Z,{status:e.status,fullname:e.title,online:!0}),(0,r.jsxs)(o.Z,{sx:{flex:1},children:[(0,r.jsx)(p.ZP,{level:"title-sm",children:e.title}),(0,r.jsx)(p.ZP,{level:"body-sm",children:e.phone})]}),(0,r.jsxs)(o.Z,{sx:{lineHeight:1.5,textAlign:"right"},children:[(0,r.jsx)(p.ZP,{level:"body-xs",display:{xs:"none",md:"block"},noWrap:!0,children:function(e){let t=new Date(1e3*e);return new Date().getDate()===t.getDate()?t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date().getDate()-1===t.getDate()?"Вчера":"".concat(t.toLocaleString("en-GB").slice(0,10))}(e.date)}),e.unreadCount?(0,r.jsx)(m.Z,{variant:"solid",color:"primary",size:"sm",children:e.unreadCount}):null]})]}),(0,r.jsx)(p.ZP,{level:"body-sm",sx:{display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis"},children:e.message})]})}),(0,r.jsx)(E.Z,{sx:{margin:0},inset:"gutter"})]}))}var T=n(13692);function _(e){return e.isConnected?(0,r.jsx)(T.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:e.isConnected,autoHideDuration:5e3,onClose:()=>e.setIsConnected(!1),variant:"soft",color:"success",children:(0,r.jsx)(p.ZP,{level:"body-sm",sx:{color:"text.secondary"},children:"Подключено"})}):null}function L(e){return e.newMessage?(0,r.jsx)(T.Z,{anchorOrigin:{vertical:"top",horizontal:"right"},open:e.newMessage,autoHideDuration:5e3,onClose:()=>e.setNewMessage(null),variant:"soft",color:"primary",children:(0,r.jsx)(p.ZP,{level:"body-sm",sx:{color:"text.secondary"},children:e.newMessage.message})}):null}var N=n(49048),U=n(57372),W=n(82323),J=n(20460),O=n(15959);function B(e){let[t,n]=s.useState(!1),[i,o]=s.useState(""),[a,d]=s.useState(""),[c,u]=s.useState(""),[h,g]=s.useState(null),p=async()=>{e.socket.emit("sendFirstMessage",{phone:c,firstName:i,message:a}),e.socket.emit("getDialogs"),d(""),o(""),u(""),n(!1)};return s.useEffect(()=>{(0,O.$J)("can_write",g)},[]),(0,r.jsxs)(r.Fragment,{children:[h?(0,r.jsx)(Z.ZP,{"aria-label":"add",color:"primary",variant:"solid",size:"md",sx:{position:"fixed",bottom:20,left:345},onClick:()=>n(!0),children:(0,r.jsx)(U.Z,{})}):null,(0,r.jsx)(v.ZP,{open:t,onClose:()=>n(!1),children:(0,r.jsxs)(y.Z,{sx:{width:{xs:"90vw",sm:"550px"}},children:[(0,r.jsx)(b.Z,{color:"primary",level:"h4",children:"Отправить новое сообщение "}),(0,r.jsxs)(l.Z,{spacing:2,children:[(0,r.jsx)(x.ZP,{autoFocus:!0,required:!0,placeholder:"Имя пользователя",onChange:e=>o(e.target.value),value:i,endDecorator:(0,r.jsx)(W.Z,{})}),(0,r.jsx)(J.Z,{phone:c,setPhone:u}),(0,r.jsx)(N.Z,{placeholder:"Сообщение",value:a,onChange:e=>d(e.target.value)}),(0,r.jsx)(j.Z,{"aria-label":"send",color:"primary",size:"md",onClick:p,children:"Отправить сообщение"})]})]})})]})}var V=n(84673),$=n(58682),H=n(10076);function G(e){let[t,n]=(0,s.useState)(null),[i,o]=(0,s.useState)(null);s.useEffect(()=>{(0,O.$J)("can_send_file",n)},[]);let l=t=>{let n=new FileReader;n.onload=()=>{c.socket.emit("sendFile",{userId:e.userId,file:t,fileName:t.name,fileType:t.type,fileBuffer:n.result})},n.readAsArrayBuffer(t),window.location.reload()};return(0,r.jsx)("div",{children:t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"file",style:{display:"none"},id:"fileInput",onChange:e=>{let t=e.target.files[0];t&&(o(t),l(t))}}),(0,r.jsx)("label",{htmlFor:"fileInput",children:(0,r.jsx)(Z.ZP,{size:"sm",variant:"plain",color:"neutral",component:"span",children:(0,r.jsx)(H.Z,{})})})]})})}var K=n(95618),Y=n(54096),Q=n(61351),q=e=>{let[t,n]=s.useState(null),[i,o]=s.useState(!1),[l,a]=s.useState(null),[d,u]=s.useState(null),[x,h]=s.useState(null),g=async()=>{try{let e=await navigator.mediaDevices.getUserMedia({audio:!0}),t=new MediaRecorder(e);a(e),u(t),o(!0)}catch(e){console.log("User didn't allowed us to access the microphone.")}};return s.useEffect(()=>{(0,O.$J)("can_send_audio",n)},[]),s.useEffect(()=>{i&&d&&(d.start(),d.ondataavailable=e=>{let{data:t}=e;return h(t)})},[i,d]),s.useEffect(()=>{!i&&x&&l&&((0,Q.Z)(x).then(t=>{let n={userId:e.userId,blob:x,caption:e.caption,duration:t};c.socket.emit("sendAudio",n),e.setTextAreaValue("")}),a(null),h(null))},[i,x]),t?(0,r.jsx)(Z.ZP,{onClick:i?()=>{if(i&&l&&d){for(let e of l.getAudioTracks())e.stop();d.stop(),u(null),o(!1)}}:g,children:i?(0,r.jsx)(Y.Z,{}):(0,r.jsx)(K.Z,{})}):(0,r.jsx)(r.Fragment,{})},X=n(83185);function ee(e){let[t,n]=(0,s.useState)(null),[i,o]=(0,s.useState)(null);s.useEffect(()=>{(0,O.$J)("can_send_photo",n)},[]);let l=t=>{let n=new FileReader;n.onload=()=>{console.log("photo",t),c.socket.emit("sendPhoto",{userId:e.userId,photo:n.result,fileName:t.name,fileType:t.type,fileBuffer:n.result})},n.readAsArrayBuffer(t),window.location.reload()};return(0,r.jsx)("div",{children:t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"file",accept:"image/*",style:{display:"none"},id:"photoInput",onChange:e=>{let t=e.target.files?e.target.files[0]:null;t&&(o(t),l(t))}}),(0,r.jsx)("label",{htmlFor:"photoInput",children:(0,r.jsx)(Z.ZP,{size:"sm",variant:"plain",color:"neutral",component:"span",children:(0,r.jsx)(X.Z,{})})})]})})}var et=n(88657),en=e=>{let[t,n]=(0,s.useState)(null),[i,o]=(0,s.useState)(!1),[l,a]=(0,s.useState)(null),[d,u]=(0,s.useState)(null),[x,h]=(0,s.useState)(null);(0,s.useEffect)(()=>{(0,O.$J)("can_send_video",n)},[]);let g=async()=>{try{let e=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),t=new MediaRecorder(e);a(e),u(t),o(!0)}catch(e){console.log("User didn't allow camera or microphone access.")}};return(0,s.useEffect)(()=>{i&&d&&(d.start(),d.ondataavailable=e=>{let{data:t}=e;return h(t)})},[i,d]),(0,s.useEffect)(()=>{if(i||!x||!l)return;let t=new FileReader;t.onloadend=()=>{let n=t.result,r={userId:e.userId,video:n,fileName:"video_recording_".concat(Date.now(),".mp4"),caption:e.caption||"",duration:x.size,fileBuffer:t.result};c.socket.emit("sendVideo",r),e.setTextAreaValue("")},t.readAsDataURL(x),a(null),h(null)},[i,x]),t?(0,r.jsx)(Z.ZP,{onClick:i?()=>{i&&l&&d&&(console.log("stop recording"),l.getTracks().forEach(e=>e.stop()),d.stop(),u(null),o(!1))}:g,children:i?(0,r.jsx)(Y.Z,{}):(0,r.jsx)(et.Z,{})}):null};function er(e){let{textAreaValue:t,setTextAreaValue:n,onSubmit:i,userId:a}=e,d=s.useRef(null),[c,u]=s.useState(null);s.useEffect(()=>{(0,O.$J)("can_write",u)},[]);let x=()=>{""!==t.trim()&&c&&(i(t,a),n(""))};return null===c?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(o.Z,{sx:{px:2,pb:2},children:(0,r.jsx)(V.Z,{children:(0,r.jsx)(N.Z,{placeholder:"Введите сообщение...","aria-label":"Message",ref:d,onChange:e=>n(e.target.value),value:t,maxRows:15,disabled:!c,endDecorator:(0,r.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",flexGrow:1,sx:{py:1,pr:1,borderTop:"1px solid",borderColor:"divider"},children:[(0,r.jsx)(l.Z,{direction:"row",children:+a>1e4&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(q,{userId:a,setTextAreaValue:n}),(0,r.jsx)(en,{userId:a,setTextAreaValue:n}),(0,r.jsx)(G,{userId:a}),(0,r.jsx)(ee,{userId:a})]})}),(0,r.jsx)(j.Z,{size:"sm",color:"primary",sx:{alignSelf:"center",borderRadius:"sm"},endDecorator:(0,r.jsx)($.Z,{}),onClick:x,disabled:!c,children:"Отправить"})]}),onKeyDown:e=>{"Enter"===e.key&&(e.metaKey||e.ctrlKey)&&x()},sx:{"& textarea:first-of-type":{minHeight:48}}})})})}var es=n(13854);function ei(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z.Z,{children:(0,r.jsxs)(l.Z,{direction:"row",spacing:1.5,children:[(0,r.jsx)(es.Z,{variant:"circular",width:32,height:32}),(0,r.jsxs)(o.Z,{sx:{flex:1},children:[(0,r.jsx)(es.Z,{variant:"rectangular",width:200,height:"1em",sx:{mb:1}}),(0,r.jsx)(es.Z,{variant:"rectangular",width:140,height:"1em"})]})]})}),(0,r.jsx)(E.Z,{sx:{margin:0},inset:"gutter"})]})}var eo=n(18467),el=n(27602),ea=n(133),ed=n(91375),ec=n(21625);function eu(e){let{message:t,out:n,media:i,date:d,photoUrl:u,canReadPhoto:x,voiceUrl:h}=e,[g,m]=s.useState(!1),[f,j]=s.useState(!1),[v,Z]=s.useState(!1),y="Отправленный файл";if("null"!=i&&i)try{let e=JSON.parse(i).document.attributes;for(let t in e)Object.keys(e[t]).forEach(n=>{"fileName"==n&&(y=e[t][n])})}catch(e){}return u&&!x?(0,r.jsx)(a.Z,{variant:"outlined",sx:{px:1.75,py:1.25,borderRadius:"lg",borderTopRightRadius:n?0:"lg",borderTopLeftRadius:n?"lg":0},children:(0,r.jsxs)(l.Z,{direction:"row",spacing:1.5,alignItems:"center",sx:{cursor:"pointer"},children:[(0,r.jsx)(eo.Z,{color:"primary",size:"lg",children:(0,r.jsx)(el.Z,{})}),(0,r.jsx)("div",{children:(0,r.jsx)(p.ZP,{fontSize:"sm",children:"Вам не разрешено просматривать фото"})})]})}):h?(0,r.jsx)(a.Z,{variant:"outlined",sx:{borderRadius:"lg",borderTopRightRadius:n?0:"lg",borderTopLeftRadius:n?"lg":0,minWidth:"400px"},children:(0,r.jsx)(ec.z,{src:"".concat("https://euphoria-messenger.uz:4000","/").concat(h),style:{width:"100%"},backgroundColor:"var(--joy-palette-background-level1)",sliderColor:"var(--joy-palette-primary-500)",preload:"metadata",color:"var(--joy-palette-primary-500)"})}):(0,r.jsxs)(o.Z,{sx:{maxWidth:"60%",minWidth:"auto"},children:[(0,r.jsxs)(l.Z,{direction:"row",justifyContent:"end",spacing:2,sx:{mb:.25},children:[(0,r.jsx)(p.ZP,{level:"body-xs"}),(0,r.jsx)(p.ZP,{level:"body-xs",children:function(e){let t=new Date("number"==typeof e?1e3*e:e);return"".concat(t.toLocaleDateString([],{day:"numeric",month:"long",year:"numeric"})," ").concat(t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))}(d)}),(0,r.jsx)(p.ZP,{level:"body-xs"})]}),"null"!=i&&i&&x?(0,r.jsx)(r.Fragment,{children:u?(0,r.jsx)(ea.Z,{sx:{maxWidth:600,flexGrow:1,minHeight:"200px"},children:(0,r.jsx)(ed.Z,{children:(0,r.jsx)("img",{loading:"lazy",alt:"Hello World!",src:"".concat("https://euphoria-messenger.uz:4000","/").concat(u),style:{objectFit:"contain",height:"100%",width:"100%",cursor:"pointer"},onClick:()=>window.open("".concat("https://euphoria-messenger.uz:4000","/").concat(u),"_blank")})})}):(0,r.jsx)(a.Z,{variant:"outlined",sx:{px:1.75,py:1.25,borderRadius:"lg",borderTopRightRadius:n?0:"lg",borderTopLeftRadius:n?"lg":0},children:(0,r.jsxs)(l.Z,{direction:"row",spacing:1.5,alignItems:"center",onClick:()=>{c.socket.emit("getFile",{userId:e.userId,messageId:e.id})},sx:{cursor:"pointer"},children:[(0,r.jsx)(eo.Z,{color:"primary",size:"lg",children:(0,r.jsx)(el.Z,{})}),(0,r.jsx)("div",{children:(0,r.jsx)(p.ZP,{fontSize:"sm",children:y})})]})})}):(0,r.jsxs)(o.Z,{sx:{position:"relative"},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[t?(0,r.jsx)(a.Z,{color:n?"primary":"neutral",variant:n?"solid":"soft",sx:{p:1.25,borderRadius:"lg",borderTopRightRadius:n?0:"lg",borderTopLeftRadius:n?"lg":0,backgroundColor:n?"var(--joy-palette-primary-solidBg)":"background.body"},children:(0,r.jsx)(p.ZP,{level:"body-sm",sx:{color:n?"var(--joy-palette-common-white)":"var(--joy-palette-text-primary)"},children:t})}):(0,r.jsx)(a.Z,{color:n?"primary":"neutral",variant:n?"solid":"soft",sx:{p:1.25,borderRadius:"lg",borderTopRightRadius:n?0:"lg",borderTopLeftRadius:n?"lg":0,backgroundColor:n?"var(--joy-palette-primary-solidBg)":"background.body"},children:(0,r.jsx)(p.ZP,{level:"body-sm",sx:{color:"var(--joy-palette-danger-solidBg)"},children:i&&x?i:"Сообщение не поддерживается в данной версии приложения"})}),(g||f||v)&&(0,r.jsx)(l.Z,{direction:"row",justifyContent:n?"flex-end":"flex-start",spacing:.5,sx:{position:"absolute",top:"50%",p:1.5,...n?{left:0,transform:"translate(-100%, -50%)"}:{right:0,transform:"translate(100%, -50%)"}}})]})]})}function ex(e){let{variant:t}=e,[n,i]=s.useState(!1);return(0,r.jsxs)(o.Z,{sx:{maxWidth:"60%",minWidth:"auto"},children:[(0,r.jsx)(l.Z,{direction:"row",justifyContent:"space-between",spacing:2,sx:{mb:.25}}),(0,r.jsx)(o.Z,{sx:{position:"relative"},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:(0,r.jsx)(es.Z,{variant:"text",height:20,level:"h1"})})]})}function eh(e){let[t,n]=s.useState({userId:""}),[x,h]=s.useState([]),[p,m]=s.useState(),[f,j]=s.useState(!1),[v,Z]=s.useState(""),[y,b]=s.useState([]),[w,C]=s.useState(null),[I,S]=s.useState(!1),k=e=>{console.log("setSelectedUserId",e),console.log("dialogs",x);let t=x.find(t=>t.userId==e);console.log("chat",t),n(t)};s.useEffect(()=>{(0,O.$J)("can_write",C),(0,O.$J)("can_read_photo",S)},[]);let R=e=>{m(e=(0,d.Qc)(e)),h(t=>{let n=[...t],r=n.find(t=>t.userId===e.peerId.userId);return r?(r.message=e.message,r.date=e.date,r.unreadCount=r.unreadCount?r.unreadCount+1:1):n.unshift({userId:e.peerId.userId,title:e.peerId.name,phone:e.peerId.phone,message:e.message,date:e.date,unreadCount:1}),n}),b(t=>[...t,e])};return s.useLayoutEffect(()=>{e.socket.on("connection",()=>{j(!0)}),e.socket.on("dialogs",e=>{console.log(e),h(e)}),e.socket.on("getMessages",e=>{b(e)}),e.socket.on("newMessage",e=>{R(e)}),e.socket.on("getFile",e=>{window.open(e,"_blank")})},[]),s.useLayoutEffect(()=>{b([]),e.socket.emitWithAck("getMessages",{userId:(null==t?void 0:t.userId)||(null==t?void 0:t.id)},()=>{console.log("getMessages"),b([])})},[t]),(0,r.jsxs)(a.Z,{sx:{flex:1,width:"100%",mx:"auto",pt:{xs:"var(--Header-height)",sm:0},display:"grid",gridTemplateColumns:{xs:"1fr",sm:"minmax(min-content, min(30%, 400px)) 1fr"}},children:[(0,r.jsxs)(a.Z,{sx:{position:{xs:"fixed",sm:"sticky"},transition:"transform 0.4s, width 0.4s",zIndex:100,width:"400px",top:52},children:[(0,r.jsxs)(a.Z,{sx:{borderRight:"1px solid",borderColor:"divider",height:"calc(100dvh)",overflowY:"scroll"},children:[(0,r.jsx)(P,{}),(0,r.jsx)(g,{}),(0,r.jsx)(i.Z,{sx:{py:0,"--ListItem-paddingY":"0.75rem","--ListItem-paddingX":"1rem"},children:x.length?x.map(e=>{var n,s;return e&&(0,r.jsx)(M,{title:e.title,phone:e.phone||e.description,message:e.message,date:new Date(+e.date),unreadCount:e.unreadCount,selected:null!=t&&!!t.userId&&(!!e.userId||!!e.id)&&String(t.userId)===String(e.userId||e.id),setSelectedUserId:k,userId:(null===(n=e.userId)||void 0===n?void 0:n.toString())||e.id.toString(),status:e.status},null===(s=e.userId)||void 0===s?void 0:s.toString())}):(0,r.jsx)(ei,{})})]}),(0,r.jsx)(B,{socket:c.socket})]}),(0,r.jsxs)(a.Z,{sx:{height:{xs:"calc(100dvh)",lg:"100dvh"},display:"flex",flexDirection:"column",backgroundColor:"background.level3"},children:[(0,r.jsx)(o.Z,{sx:{display:"flex",flex:1,minHeight:0,px:2,py:3,overflowY:"scroll",flexDirection:"column-reverse"},children:(0,r.jsxs)(l.Z,{spacing:2,justifyContent:"flex-end",sx:{flex:1},children:[(!(null==t?void 0:t.userId)||!t.id)&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{sx:{width:"100%",flex:1,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(o.Z,{sx:{padding:"10px 20px",borderRadius:"50px",backgroundColor:"background.level2"},children:(0,r.jsx)(u.Z,{children:"Выберите, кому бы хотели написать"})})})}),y.length<1&&(null==t?void 0:t.userId)&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ex,{variant:"received"})}),y.map((e,n)=>{let s=e.out;if(e.peerId.userId==(null==t?void 0:t.userId)||e.peerId.chatId==Math.abs(t.userId))return(0,r.jsx)(l.Z,{direction:"row",spacing:2,flexDirection:s?"row-reverse":"row",children:(0,r.jsx)(eu,{variant:s?"sent":"received",...e,userId:t.userId,canReadPhoto:I})},n)})]})}),w&&(null==t?void 0:t.userId)&&(0,r.jsx)(er,{textAreaValue:v,setTextAreaValue:Z,userId:t.userId,onSubmit:(t,n)=>{e.socket.emit("sendMessage",{message:t,userId:n}),Z(""),b(e=>[...e,{message:t,out:!0,date:new Date,peerId:{userId:n}}]),h(e=>{let r=[...e],s=r.find(e=>e.userId===n);return s?(s.message=t,s.date=new Date().toISOString(),s.unreadCount=0):r.unshift({userId:n,title:"User",phone:"Phone",message:t,date:new Date().toISOString(),unreadCount:0}),r})}})]}),(0,r.jsx)(_,{isConnected:f,setIsConnected:j}),(0,r.jsx)(L,{newMessage:p,setNewMessage:m})]})}},10915:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(57437),s=n(2265),i=n(80670),o=n(36164),l=n(52308),a=n(44403);function d(e){let{onClick:t,sx:n,...d}=e,{mode:c,setMode:u}=(0,i.tv)(),[x,h]=s.useState(!1);return(s.useEffect(()=>{h(!0)},[]),x)?(0,r.jsx)(o.ZP,{id:"toggle-mode",size:"sm",variant:"outlined",color:"neutral",...d,onClick:e=>{u("light"===c?"dark":"light"),null==t||t(e)},sx:[...Array.isArray(n)?n:[n]],children:"light"===c?(0,r.jsx)(l.Z,{}):(0,r.jsx)(a.Z,{})}):(0,r.jsx)(o.ZP,{id:"toggle-mode",size:"sm",variant:"outlined",color:"neutral",...d,sx:[...Array.isArray(n)?n:[n]],children:"light"===c?(0,r.jsx)(l.Z,{}):(0,r.jsx)(a.Z,{})})}},20460:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(57437),s=n(2265),i=n(55773),o=n(53092),l=n(47820);let a=s.forwardRef(function(e,t){let{onChange:n,...s}=e;return(0,r.jsx)(i.oc,{...s,mask:"+998 (##) ###-##-##",definitions:{"#":/[0-9]/},onAccept:t=>n({target:{name:e.name,value:t}}),overwrite:!0})});function d(e){return(0,r.jsx)(o.ZP,{sx:{my:2},placeholder:"Номер телефона",value:e.phone,onChange:t=>e.setPhone(t.target.value),slotProps:{input:{component:a}},endDecorator:(0,r.jsx)(l.Z,{})})}},20111:function(e,t,n){n.d(t,{socket:function(){return r}});let r=(0,n(68680).io)("https://euphoria-messenger.uz:4000",{withCredentials:!0})},15959:function(e,t,n){n.d(t,{$J:function(){return c},N5:function(){return l}});let r="zQp3JmO7XhC9WsE4LkZ1RxY8GtV2QwB6";function s(e){return new TextEncoder().encode(e)}async function i(e){var t,n;let r=s(e);return null===(n=crypto)||void 0===n?void 0:null===(t=n.subtle)||void 0===t?void 0:t.importKey("raw",r,{name:"AES-GCM"},!1,["encrypt","decrypt"])}async function o(e){let t=await i(r),n=crypto.getRandomValues(new Uint8Array(12)),o=await crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,s(e)),l=new Uint8Array(n.length+o.byteLength);return l.set(n,0),l.set(new Uint8Array(o),n.length),btoa(String.fromCharCode(...l))}async function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:86400,r=JSON.stringify(t),s=await o(r);document.cookie="".concat(e,"=").concat(s,"; path=/; max-age=").concat(n)}async function a(e){try{var t;let n=await i(r),s=Uint8Array.from(atob(e),e=>e.charCodeAt(0)),o=s.slice(0,12),l=s.slice(12);return t=await crypto.subtle.decrypt({name:"AES-GCM",iv:o},n,l),new TextDecoder().decode(t)}catch(e){return console.error("Error decrypting data:",e),null}}async function d(e){let t=document.cookie.split(";").find(t=>t.trim().startsWith("".concat(e,"=")));if(!t)return null;let n=t.split("=")[1],r=await a(n);return r?JSON.parse(r):null}let c=async(e,t)=>{try{let n=await d("access");t(!!n&&n[e])}catch(e){console.error("Ошибка при получении доступа:",e),t(!1)}}}}]);