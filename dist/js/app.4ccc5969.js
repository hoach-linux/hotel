(function(){"use strict";var e={3600:function(e,t,o){var a=o(9963),s=o(6252);const l={class:"app",id:"smooth-wrapper"};function r(e,t,o,r,n,i){const u=(0,s.up)("navbar"),d=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(u),(0,s._)("div",l,[(0,s.Wm)(d,null,{default:(0,s.w5)((({Component:e})=>[(0,s.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.j4)((0,s.LL)(e),{id:"smooth-content"}))])),_:2},1024)])),_:1})])],64)}o(7658);var n=o.p+"img/logo.965b105d.png";const i=e=>((0,s.dD)("data-v-91733c6a"),e=e(),(0,s.Cn)(),e),u={class:"navbar"},d=i((()=>(0,s._)("img",{src:n,alt:"",class:"logo"},null,-1))),c=[d],m={class:"navbar__btn"},h=i((()=>(0,s._)("div",{class:"activeBtn"},null,-1))),p={class:"navbar__btn bottombar__btn"},f=i((()=>(0,s._)("p",null,"hotels",-1))),g=i((()=>(0,s._)("div",{class:"activeBtn"},null,-1)));function v(e,t,o,l,r,n){const i=(0,s.up)("my-button"),d=(0,s.up)("font-awesome-icon");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",u,[(0,s._)("div",{style:{cursor:"pointer",color:"#000"},onClick:t[0]||(t[0]=t=>e.$router.push("/")),class:"icon"},c),(0,s.wy)((0,s._)("div",m,[(0,s.Wm)(i,{onClick:t[1]||(t[1]=t=>e.$router.push("/hotels")),class:"waves-effect waves-light"},{default:(0,s.w5)((()=>[(0,s.Uk)("Hotels")])),_:1}),h],512),[[a.F8,l.auth]]),l.auth?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:t[2]||(t[2]=(...e)=>l.logOut&&l.logOut(...e)),class:"log-out text-white border-2 border-rose-700 w-40 h-12 ml-2 mr-4 font-semibold transition ease-in-out duration-150 hover:w-60 rounded-[10px] waves-effect waves-light"},[(0,s.Uk)(" Log out "),(0,s.Wm)(d,{icon:"fa-solid fa-right-from-bracket",class:"ml-2"})])):(0,s.kq)("",!0)]),(0,s._)("div",p,[(0,s.Wm)(i,{onClick:t[3]||(t[3]=t=>e.$router.push("/hotels")),class:"waves-effect waves-light"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{icon:"fa-solid fa-hotel"}),f])),_:1}),g])],64)}var w=o(2201),b=o(3907),y=o(9669),_=o.n(y),k=o(1955),x={setup(){const e=(0,w.tv)(),t=(0,b.oR)(),o=(0,s.Fl)((()=>t.state.post.authenticated)),a=async()=>{try{await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/logout",{refresh_token:k.Z.get("refresh_token")});k.Z.remove("token"),t.dispatch("post/authFalse"),e.push("/login?message=logout")}catch(o){alert(o)}};return{auth:o,logOut:a}},mounted(){const e=document.querySelectorAll(".navbar__btn > button");document.querySelector(".icon");function t(){e.forEach((e=>{e.addEventListener("click",(()=>{o(),e.classList.add("active")}))}))}function o(){e.forEach((e=>{e.classList.remove("active")}))}t()}},$=o(3744);const S=(0,$.Z)(x,[["render",v],["__scopeId","data-v-91733c6a"]]);var D=S,C={components:{Navbar:D},data(){return{dark:!1,root:null}},mounted(){this.root=document.documentElement},watch:{dark:{handler:function(){this.$nextTick((()=>{this.dark?(this.root.style.setProperty("--main-background-color","#f2f2f2"),this.root.style.setProperty("--dark-background-color","#000"),this.root.style.setProperty("--main-text-color","#000"),this.root.style.setProperty("--white-text-color","#fff"),this.root.style.setProperty("--white-color","#fff"),this.root.style.setProperty("--main-button-color","#42b883"),this.root.style.setProperty("--delete-color","#c21e56"),this.root.style.setProperty("--page-wrapper-bg","rgba(32, 32, 32, 0.1)")):(this.root.style.setProperty("--main-background-color","#000"),this.root.style.setProperty("--dark-background-color","#fff"),this.root.style.setProperty("--main-text-color","#fff"),this.root.style.setProperty("--white-text-color","#000"),this.root.style.setProperty("--white-color","#161617"),this.root.style.setProperty("--main-button-color","#2EE59D"),this.root.style.setProperty("--delete-color","#fa0b5b"),this.root.style.setProperty("--page-wrapper-bg","rgb(31 255 131 / 10%)"))}))},immediate:!0}}};const I=(0,$.Z)(C,[["render",r]]);var H=I;const P={class:"btn waves-effect waves-light"};function N(e,t,o,a,l,r){return(0,s.wg)(),(0,s.iD)("button",P,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}var U={name:"my-button"};const O=(0,$.Z)(U,[["render",N],["__scopeId","data-v-a8f050fc"]]);var W=O;const q=["value"];function R(e,t,o,a,l,r){return(0,s.wg)(),(0,s.iD)("input",{value:o.value,onInput:t[0]||(t[0]=(...e)=>r.updateInput&&r.updateInput(...e)),type:"text",name:"text",class:"input"},null,40,q)}var Z={name:"my-input",props:{value:[Number,String]},methods:{updateInput(e){this.$emit("update:value",e.target.value)}}};const L=(0,$.Z)(Z,[["render",R],["__scopeId","data-v-066fdc30"]]);var E=L;function T(e,t,o,l,r,n){return e.show?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"dialog",onClick:t[1]||(t[1]=(...t)=>e.hideDialog&&e.hideDialog(...t))},[(0,s._)("div",{onClick:t[0]||(t[0]=(0,a.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,s.WI)(e.$slots,"default",{},void 0,!0)])])):(0,s.kq)("",!0)}var j={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}},A={name:"my-dialog",mixins:[j]};const B=(0,$.Z)(A,[["render",T],["__scopeId","data-v-5a3cc983"]]);var V=B,z=o(3577);const F={class:"text-4xl font-semibold italic text-left text-slate-900 mb-10 mt-14"},Y={class:"header-text"},Q={class:"relative text-white"};function J(e,t,o,a,l,r){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("blockquote",F,[(0,s._)("span",Y,[(0,s._)("h1",Q,(0,z.zw)(o.header),1)])])])}var X={name:"my-header",props:{header:String}};const K=(0,$.Z)(X,[["render",J]]);var G=K,ee=o.p+"img/it-img.3558535a.webp";const te={class:"flex justify-center items-center mt-10"},oe={class:"text-4xl text-center mb-5"},ae=(0,s._)("img",{src:ee,alt:"",class:"max-h-full min-w-full mb-3 rounded-lg"},null,-1);function se(e,t,o,a,l,r){return(0,s.wg)(),(0,s.iD)("div",te,[(0,s._)("div",{class:"3d-card max-w-xl p-5 rounded-lg shadow-2xl cursor-pointer waves-effect waves-light",id:"tilt",onClick:t[0]||(t[0]=t=>e.$router.push("/hotels"))},[(0,s._)("h1",oe,(0,z.zw)(o.greeting),1),ae])])}var le={name:"my-3d-card",props:{greeting:{type:String}},mounted(){let e=document.getElementById("tilt");const t=e.clientHeight,o=e.clientWidth;function a(a){const s=a.layerX,l=a.layerY,r=(s-o/2)/o*20,n=(l-t/2)/t*-20,i="perspective(500px) scale(1.1) rotateX("+n+"deg) rotateY("+r+"deg)";e.style.transform=i}e.addEventListener("mousemove",a),e.addEventListener("mouseout",(function(){e.style.transform="perspective(500px) scale(1) rotateX(0) rotateY(0)"})),e.addEventListener("mousedown",(function(){e.style.transform="perspective(500px) scale(0.9) rotateX(0) rotateY(0)"})),e.addEventListener("mouseup",(function(){e.style.transform="perspective(500px) scale(1.1) rotateX(0) rotateY(0)"}))}};const re=(0,$.Z)(le,[["render",se]]);var ne=re,ie=[W,E,V,G,ne];const ue={class:"container"};function de(e,t,o,a,l,r){const n=(0,s.up)("my-3d-card"),i=(0,s.up)("footer-vue");return(0,s.wg)(),(0,s.iD)("div",ue,[(0,s.Wm)(n,{greeting:a.message},null,8,["greeting"]),(0,s.Wm)(i)])}var ce=o(2262);const me=(0,s._)("footer",{class:"page-footer"},[(0,s._)("div",{class:"footer-copyright h-12"},[(0,s._)("div",{class:"container"},[(0,s.Uk)(" © 2022 Copyright CNTT "),(0,s._)("a",{class:"grey-text text-lighten-4 right underline underline-offset-8 hover:underline-offset-4 duration-300 ease-out",href:"https://github.com/hoach-linux"},"GitHub")])])],-1),he=[me];function pe(e,t,o,a,l,r){return(0,s.wg)(),(0,s.iD)("div",null,he)}var fe={};const ge=(0,$.Z)(fe,[["render",pe]]);var ve=ge,we={logout:"Success. You are logged out",login:"Success. You are logged in",registered:"Success. You are registered",hotel_created:"Success. Hotel was created",menu_created:"Success. Menu was created"},be={components:{footerVue:ve},name:"MainPage",setup(){const e=(0,ce.iH)("Welcome !"),t=(0,w.tv)(),o=(0,b.oR)(),a=JSON.parse(localStorage.getItem("userData"));return(0,s.bv)((async()=>{try{let t=await _().get("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",{params:{limit:1e3},headers:{Authorization:`Bearer ${k.Z.get("token")}`}});await o.dispatch("post/authTrue");const s=t.data.data.filter((e=>a.email===e.email));k.Z.set("userId",s[0].id),e.value=`Welcome ${s[0].first_name} ${s[0].last_name} !`}catch(s){await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/logout",{refresh_token:k.Z.get("refresh_token")}),k.Z.remove("token"),o.dispatch("post/authFalse"),t.push("/register")}})),{message:e}},mounted(){we[this.$route.query.message]&&this.$message(we[this.$route.query.message])}};const ye=(0,$.Z)(be,[["render",de]]);var _e=ye;const ke={class:"container"},xe={class:"app__btns"},$e={key:1,style:{"will-change":"transform"},class:"posts-loading"},Se={class:"observer"};function De(e,t,o,l,r,n){const i=(0,s.up)("my-input"),u=(0,s.up)("my-button"),d=(0,s.up)("hotel-form"),c=(0,s.up)("my-dialog"),m=(0,s.up)("my-header"),h=(0,s.up)("hotel-list"),p=(0,s.Q2)("intersection");return(0,s.wg)(),(0,s.j4)(a.uT,null,{default:(0,s.w5)((()=>[(0,s._)("div",ke,["owner"===r.userData.userRole?((0,s.wg)(),(0,s.j4)(i,{key:0,value:l.searchQuery,"onUpdate:value":t[0]||(t[0]=e=>l.searchQuery=e),placeholder:"Search..."},null,8,["value"])):(0,s.kq)("",!0),(0,s._)("div",xe,["owner"===r.userData.userRole?((0,s.wg)(),(0,s.j4)(u,{key:0,onClick:n.showDialog,class:"create-post flex-1 md:flex-auto m-0"},{default:(0,s.w5)((()=>[(0,s.Uk)("Create Hotel")])),_:1},8,["onClick"])):(0,s.kq)("",!0)]),((0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s.Wm)(a.uT,{name:"modal-show"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{show:r.dialogVisible,"onUpdate:show":t[1]||(t[1]=e=>r.dialogVisible=e),style:{"will-change":"transform"}},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{onCreate:n.createPost},null,8,["onCreate"])])),_:1},8,["show"])])),_:1})])),(0,s.Wm)(m,{header:"Hotels"}),(0,s.Wm)(a.uT,{mode:"out-in"},{default:(0,s.w5)((()=>[l.isHotelLoading?((0,s.wg)(),(0,s.iD)("div",$e," Hotels Loading... ")):((0,s.wg)(),(0,s.j4)(h,{key:0,hotels:l.searchedHotels,onRemove:n.removePost,style:{"will-change":"transform"},class:"posts"},null,8,["hotels","onRemove"]))])),_:1}),(0,s.wy)((0,s._)("div",Se,null,512),[[p,l.loadMoreHotels]])])])),_:1})}o(541);const Ce=e=>((0,s.dD)("data-v-8d19a340"),e=e(),(0,s.Cn)(),e),Ie=Ce((()=>(0,s._)("h2",{class:"text-white text-4xl"},"Create Hotel",-1))),He=["value"],Pe=Ce((()=>(0,s._)("input",{type:"file",id:"file",class:"block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-sky-600 hover:file:bg-blue-600 hover:file:text-white"},null,-1)));function Ne(e,t,o,l,r,n){const i=(0,s.up)("my-input"),u=(0,s.up)("my-button"),d=(0,s.Q2)("focus");return(0,s.wg)(),(0,s.iD)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)((()=>{}),["prevent"]))},[Ie,(0,s.wy)((0,s.Wm)(i,{value:r.hotel.title,"onUpdate:value":t[0]||(t[0]=e=>r.hotel.title=e),type:"text",placeholder:"Title",required:"",minlength:"1",class:"input-modal"},null,8,["value"]),[[d]]),(0,s._)("textarea",{name:"text",id:"",cols:"30",rows:"10",value:r.hotel.address,onInput:t[1]||(t[1]=e=>r.hotel.address=e.target.value),placeholder:"Address",required:"",minlength:"10",class:"input-modal"},null,40,He),Pe,(0,s.Wm)(u,{class:"btn",onClick:n.canClickBtn,type:"submit"},{default:(0,s.w5)((()=>[(0,s.Uk)("Create")])),_:1},8,["onClick"])],32)}var Ue={data(){return{hotel:{title:"",logo:"",address:""}}},methods:{createHotel(){this.file=document.getElementById("file"),this.$emit("create",this.hotel,this.file),this.hotel={title:"",logo:"",address:""}},canClickBtn(){this.file=document.getElementById("file");let e=document.querySelector(".input-modal");if(void 0==this.file.files[0]&&alert("Please choose a file"),e.value.length>=1&&void 0!=this.file.files[0])return this.createHotel()}},mounted(){}};const Oe=(0,$.Z)(Ue,[["render",Ne],["__scopeId","data-v-8d19a340"]]);var We=Oe;const qe={key:0,class:"hotels"},Re={key:1,style:{color:"#c21e56","text-align":"center",display:"block"},class:"text-2xl"};function Ze(e,t,o,l,r,n){const i=(0,s.up)("hotel-item");return this.hotels.length>0?((0,s.wg)(),(0,s.iD)("div",qe,[(0,s.Wm)(a.W3,{name:"hotel-list",mode:"out-in"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.hotels,(t=>((0,s.wg)(),(0,s.j4)(i,{hotel:t,key:t.id,onRemove:o=>e.$emit("remove",t),style:{"will-change":"transform"}},null,8,["hotel","onRemove"])))),128))])),_:1})])):((0,s.wg)(),(0,s.iD)("h2",Re," HOTEL LIST IS EMPTY! "))}const Me={class:"post-wrapper"},Le={class:"post min-w-full"},Ee={class:"post-main title mb-8"},Te={class:"img-wrapper"},je=["src"],Ae={class:"post-main first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left selection:bg-sky-300 selection:text-sky-900"},Be={class:"buttons"};function Ve(e,t,o,l,r,n){const i=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",Me,[(0,s.Wm)(a.uT,{mode:"out-in"},{default:(0,s.w5)((()=>[(0,s._)("div",Le,[(0,s._)("div",null,[(0,s._)("div",Ee,(0,z.zw)(o.hotel.title),1),(0,s._)("div",Te,[(0,s._)("img",{src:`https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/assets/${o.hotel.logo}`,alt:"",class:"img"},null,8,je)]),(0,s._)("p",Ae,(0,z.zw)(o.hotel.address),1)]),(0,s._)("div",Be,[(0,s.Wm)(i,{class:"btn-read_more-post post-button",onClick:t[0]||(t[0]=t=>e.$router.push(`/hotels/${o.hotel.title}`))},{default:(0,s.w5)((()=>[(0,s.Uk)("Menu")])),_:1}),"owner"===r.userData.userRole?((0,s.wg)(),(0,s.j4)(i,{key:0,class:"btn-delete-post post-button",onClick:t[1]||(t[1]=t=>e.$emit("remove",o.hotel))},{default:(0,s.w5)((()=>[(0,s.Uk)("Remove")])),_:1})):(0,s.kq)("",!0)])])])),_:1})])}var ze={data(){return{maxSymbol:300,userData:JSON.parse(localStorage.getItem("userData"))}},props:{hotel:{type:Object,required:!0}},methods:{truncate(e){null!=e.address&&(e.address=e.address.length>this.maxSymbol?`${e.address.slice(0,this.maxSymbol-1)}...`:e.address)}},mounted(){this.truncate(this.hotel)}};const Fe=(0,$.Z)(ze,[["render",Ve],["__scopeId","data-v-19dab744"]]);var Ye=Fe,Qe={components:{hotelItem:Ye},props:{hotels:{type:Array,required:!0}}};const Je=(0,$.Z)(Qe,[["render",Ze],["__scopeId","data-v-1ebd7942"]]);var Xe=Je;function Ke(e){let t=(0,ce.iH)(1);const o=(0,w.tv)(),a=(0,ce.iH)("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net"),l=(0,ce.iH)("total_count"),r=(0,ce.iH)([]),n=(0,ce.iH)(0),i=(0,b.oR)(),u=(0,ce.iH)(!0),d=(0,ce.iH)(JSON.parse(localStorage.getItem("userData"))),c=async()=>{try{const o=await _()({headers:{Authorization:`Bearer ${k.Z.get("token")}`},method:"get",url:`${a.value}/items/hotels`,params:{meta:l.value}});let s;n.value=Math.ceil(o.data.meta.total_count/e),t.value=n.value,s="owner"===d.value.userRole?await _().get(`${a.value}/items/hotels?filter={ "user_created": { "email": "${d.value.email}"} }`,{headers:{Authorization:`Bearer ${k.Z.get("token")}`},params:{page:t.value,limit:e}}):await _().get(`${a.value}/items/hotels?filter={ "title":"${d.value.hotelName}"}`,{headers:{Authorization:`Bearer ${k.Z.get("token")}`}}),r.value=await s.data.data.reverse()}catch(s){"Request failed with status code 401"==s.message&&(alert("Login timed out, please login again"),await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/logout",{refresh_token:k.Z.get("token")}),k.Z.remove("token"),i.dispatch("post/authFalse"),o.push("/login"))}finally{setTimeout((()=>u.value=!1),0)}},m=async()=>{try{if(1!=t.value){t.value-=1;const o=await _().get(`${a.value}/items/hotels?filter={ "user_created": { "email": "${d.value.email}"}}`,{headers:{Authorization:`Bearer ${k.Z.get("token")}`},params:{page:t.value,limit:e}});r.value=await([...r.value,...o.data.data.reverse()])}}catch(o){document.location.reload(!0)}};return(0,s.bv)(c),{hotels:r,totalPages:n,isHotelLoading:u,page:t,meta:l,serverUrl:a,loadMoreHotels:m}}function Ge(e){const t=(0,ce.iH)(""),o=(0,s.Fl)((()=>[...e.value].sort(((e,o)=>e[t.value]?.localeCompare(o[t.value])))));return{selectedSort:t,sortedHotels:o}}function et(e){const t=(0,ce.iH)(""),o=(0,s.Fl)((()=>e.value.filter((e=>e.title.toLowerCase().includes(t.value.toLowerCase())))));return{searchQuery:t,searchedHotels:o}}var tt={components:{hotelList:Xe,hotelForm:We},data(){return{dialogVisible:!1,userData:JSON.parse(localStorage.getItem("userData"))}},setup(){const e=(0,b.oR)(),{hotels:t,totalPages:o,isHotelLoading:a,page:s,meta:l,serverUrl:r,loadMoreHotels:n}=Ke(10),{selectedSort:i,sortedHotels:u}=Ge(t),{searchQuery:d,searchedHotels:c}=et(u);return e.dispatch("post/authTrue"),{hotels:t,totalPages:o,isHotelLoading:a,page:s,meta:l,serverUrl:r,loadMoreHotels:n,selectedSort:i,sortedHotels:u,searchQuery:d,searchedHotels:c}},methods:{...(0,b.nv)({}),...(0,b.OI)({}),createPost(e,t){this.dialogVisible=!1,this.pushHotelImage(t),setTimeout((()=>{_().get(`${this.serverUrl}/files?sort=uploaded_on`,{params:{limit:1e6}}).then((t=>{let o=t.data.data;return _()({method:"post",url:`${this.serverUrl}/items/hotels`,headers:{Authorization:`Bearer ${k.Z.get("token")}`},data:{title:e.title,logo:o[o.length-1].id,address:e.address}}).then((()=>this.hotels.unshift(e))).then((()=>{this.$router.push("/hotels?message=hotel_created"),document.location.reload(!0)}))}))}),1e3)},pushHotelImage(e){const t=new FormData;return console.log(e),t.append("title","Image"),t.append("file",e.files[0]),_().post(`${this.serverUrl}/files`,t)},removePost(e){try{return this.hotels=this.hotels.filter((t=>t.id!==e.id)),_()["delete"](`${this.serverUrl}/items/hotels/${e.id}`,{headers:{Authorization:`Bearer ${k.Z.get("token")}`}})}catch(t){alert("You are not registered")}},showDialog(){this.dialogVisible=!0},changePage(e){this.page=e}},computed:{...(0,b.rn)({metaAll:e=>e.post.metaAll,totalPages:e=>e.post.totalPages,sortOptions:e=>e.post.sortOptions}),...(0,b.Se)({})},mounted(){we[this.$route.query.message]&&this.$message(we[this.$route.query.message])}};const ot=(0,$.Z)(tt,[["render",De]]);var at=ot;const st={class:"post-id-page container"},lt={key:0,class:"app__btns"},rt={class:"menus"},nt=["menu"],it={class:"img-wrapper min-h-full min-w-full md:min-w-0"},ut=["src"],dt={class:"main-menu md:mt-0 md:ml-5 ml-0 mt-5 flex-1"},ct={class:"post-main title mb-2"},mt={class:"post-main mb-10"};function ht(e,t,o,l,r,n){const i=(0,s.up)("my-button"),u=(0,s.up)("my-header"),d=(0,s.up)("menu-form"),c=(0,s.up)("my-dialog");return(0,s.wg)(),(0,s.iD)("div",st,[l.auth?((0,s.wg)(),(0,s.iD)("div",lt,["client"!==r.userData.userRole?((0,s.wg)(),(0,s.j4)(i,{key:0,onClick:n.showDialog,class:"create-post flex-1 md:flex-auto m-0"},{default:(0,s.w5)((()=>[(0,s.Uk)("Create Menu")])),_:1},8,["onClick"])):(0,s.kq)("",!0)])):(0,s.kq)("",!0),(0,s.Wm)(u,{header:"Today's menu",class:"header"}),((0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s.Wm)(a.uT,{name:"modal-show"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{show:r.dialogVisible,"onUpdate:show":t[0]||(t[0]=e=>r.dialogVisible=e),style:{"will-change":"transform"}},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{onCreate:n.createMenu},null,8,["onCreate"])])),_:1},8,["show"])])),_:1})])),(0,s.Wm)(a.uT,{mode:"out-in"},{default:(0,s.w5)((()=>[(0,s._)("div",rt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.menus,(e=>((0,s.wg)(),(0,s.iD)("div",{menu:e,key:e.id,style:{"will-change":"transform"},class:"post min-w-full flex-col md:flex-row"},[(0,s._)("div",it,[(0,s._)("img",{src:`https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/assets/${e.logo}`,alt:"",class:"img"},null,8,ut)]),(0,s._)("div",dt,[(0,s._)("div",ct,(0,z.zw)(e.title),1),(0,s._)("blockquote",mt,(0,z.zw)(e.description),1),"client"!==r.userData.userRole?((0,s.wg)(),(0,s.j4)(i,{key:0,onClick:t=>n.removeMenu(e),class:"button-remove content-between min-w-full"},{default:(0,s.w5)((()=>[(0,s.Uk)("Remove")])),_:2},1032,["onClick"])):(0,s.kq)("",!0)])],8,nt)))),128))])])),_:1})])}const pt=e=>((0,s.dD)("data-v-846cdd94"),e=e(),(0,s.Cn)(),e),ft=pt((()=>(0,s._)("h2",{class:"text-white text-4xl"},"Create Menu",-1))),gt=["value"],vt=pt((()=>(0,s._)("input",{type:"file",id:"file",class:"block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-sky-600 hover:file:bg-blue-600 hover:file:text-white"},null,-1)));function wt(e,t,o,l,r,n){const i=(0,s.up)("my-input"),u=(0,s.up)("my-button"),d=(0,s.Q2)("focus");return(0,s.wg)(),(0,s.iD)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)((()=>{}),["prevent"]))},[ft,(0,s.wy)((0,s.Wm)(i,{value:r.menu.title,"onUpdate:value":t[0]||(t[0]=e=>r.menu.title=e),type:"text",placeholder:"Title",required:"",minlength:"1",class:"input-modal"},null,8,["value"]),[[d]]),(0,s._)("input",{type:"text",value:r.menu.description,onInput:t[1]||(t[1]=e=>r.menu.description=e.target.value),placeholder:"Description",required:"",minlength:"1",class:"input-modal"},null,40,gt),vt,(0,s.Wm)(u,{class:"btn-menu",onClick:n.canClickBtn,type:"submit"},{default:(0,s.w5)((()=>[(0,s.Uk)("Create")])),_:1},8,["onClick"])],32)}var bt={data(){return{menu:{title:"",logo:"",description:"",hotelName:""},userData:JSON.parse(localStorage.getItem("userData"))}},methods:{createMenu(){this.file=document.getElementById("file"),this.menu.hotelName=this.userData.hotelName,this.$emit("create",this.menu,this.file)},canClickBtn(){this.file=document.getElementById("file");let e=document.querySelector(".input-modal");if(void 0==this.file.files[0]&&alert("Please choose a file"),e.value.length>=1&&void 0!=this.file.files[0])return this.createMenu()}},mounted(){}};const yt=(0,$.Z)(bt,[["render",wt],["__scopeId","data-v-846cdd94"]]);var _t=yt,kt={components:{hotelItem:Ye,menuForm:_t},data(){return{menus:[],dialogVisible:!1,userData:JSON.parse(localStorage.getItem("userData"))}},setup(){const e=(0,b.oR)(),t=(0,ce.iH)(k.Z.get("token"));return t.value&&e.dispatch("post/authTrue"),{auth:t}},methods:{showDialog(){this.dialogVisible=!0},async fetchMenu(){let e;try{e=await _().get(`${this.$store.state.post.serverUrl}/items/menu?filter={ "hotel_name":"${this.$route.params.hotelName}"}`),this.menus=e.data.data}catch(t){console.log(t)}},createMenu(e,t){this.dialogVisible=!1,this.pushMenuImage(t),setTimeout((()=>{_().get(`${this.$store.state.post.serverUrl}/files?sort=uploaded_on`,{params:{limit:1e6}}).then((t=>{let o=t.data.data;return _()({method:"post",url:`${this.$store.state.post.serverUrl}/items/menu`,headers:{Authorization:`Bearer ${this.auth}`},data:{title:e.title,logo:o[o.length-1].id,description:e.description,hotel_name:e.hotelName}}).then((()=>this.menus.unshift(e))).then((()=>{document.location.reload(!0)}))}))}),1e3)},pushMenuImage(e){const t=new FormData;return console.log(e),t.append("title","Image"),t.append("file",e.files[0]),_().post(`${this.$store.state.post.serverUrl}/files`,t)},removeMenu(e){try{return this.menus=this.menus.filter((t=>t.id!==e.id)),_()["delete"](`${this.$store.state.post.serverUrl}/items/menu/${e.id}`,{headers:{Authorization:`Bearer ${this.auth}`}})}catch(t){alert("You are not registered")}}},mounted(){this.fetchMenu()}};const xt=(0,$.Z)(kt,[["render",ht],["__scopeId","data-v-68e8a88b"]]);var $t=xt;const St=e=>((0,s.dD)("data-v-2fa2b97a"),e=e(),(0,s.Cn)(),e),Dt={class:"flex justify-center items-center min-h-screen container"},Ct=St((()=>(0,s._)("h1",{class:"text-4xl mb-5"},"Sign in",-1)));function It(e,t,o,l,r,n){const i=(0,s.up)("my-select"),u=(0,s.up)("my-input"),d=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",Dt,[(0,s._)("form",{class:"flex flex-col p-5 rounded-xl w-96 register-form",onSubmit:t[6]||(t[6]=(0,a.iM)(((...e)=>l.submit&&l.submit(...e)),["prevent"]))},[Ct,(0,s.Wm)(i,{modelValue:l.selected,"onUpdate:modelValue":t[0]||(t[0]=e=>l.selected=e),class:"select flex-1",options:e.sortOptions,onUserSelect:l.userSelect},null,8,["modelValue","options","onUserSelect"]),(0,s.Wm)(u,{value:l.data.firstName,"onUpdate:value":t[1]||(t[1]=e=>l.data.firstName=e),type:"text",placeholder:"First Name",required:""},null,8,["value"]),(0,s.Wm)(u,{value:l.data.lastName,"onUpdate:value":t[2]||(t[2]=e=>l.data.lastName=e),type:"text",placeholder:"Last Name",required:""},null,8,["value"]),(0,s.Wm)(u,{value:l.data.email,"onUpdate:value":t[3]||(t[3]=e=>l.data.email=e),type:"email",placeholder:"Email",required:""},null,8,["value"]),(0,s.Wm)(u,{value:l.data.password,"onUpdate:value":t[4]||(t[4]=e=>l.data.password=e),type:"password",placeholder:"Password",required:""},null,8,["value"]),(0,s.Wm)(d,{type:"submit",class:"btn-register border-solid border-blue-700 border-2 text-white mt-1"},{default:(0,s.w5)((()=>[(0,s.Uk)("Continue")])),_:1}),(0,s._)("p",{onClick:t[5]||(t[5]=t=>e.$router.push("/login")),class:"text-right cursor-pointer mt-2 underline underline-offset-8 hover:underline-offset-4 duration-300 hover:text-blue-400 ease-out"}," I have an account ")],32)])}const Ht=e=>((0,s.dD)("data-v-c9d49384"),e=e(),(0,s.Cn)(),e),Pt=Ht((()=>(0,s._)("option",{disabled:"",value:""},"Choose a Role",-1))),Nt=["value","onClick"];function Ut(e,t,o,l,r,n){return(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.modelValue=e),onChange:t[1]||(t[1]=(...e)=>n.changeOption&&n.changeOption(...e))},[Pt,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.options,(t=>((0,s.wg)(),(0,s.iD)("option",{key:t.value,value:t.value,onClick:o=>e.$emit("userSelect",t.value)},(0,z.zw)(t.name),9,Nt)))),128))],544)),[[a.bM,o.modelValue]])}var Ot={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(e){this.$emit("update:modelValue",e.target.value)}}};const Wt=(0,$.Z)(Ot,[["render",Ut],["__scopeId","data-v-c9d49384"]]);var qt=Wt,Rt={components:{MySelect:qt},name:"Register",setup(){const e=(0,ce.qj)({firstName:"",lastName:"",clientRole:"4e967166-975d-4a12-8fd8-e3fdb9e5be54",adminRole:"45facacc-afc6-4e96-9801-610a56153cde",ownerRole:"525d769c-b5cb-4476-beb6-c228df5cc30f",email:"",password:"",hotelName:""}),t=(0,w.tv)(),o=(0,ce.iH)(""),a=(0,ce.iH)(""),s=async()=>{try{"client"===a.value||""===a.value?(await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",{first_name:e.firstName,last_name:e.lastName,email:e.email,password:e.password,role:e.clientRole}),await t.push("/login?message=registered")):"admin"===a.value?(await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",{first_name:e.firstName,last_name:e.lastName,email:e.email,password:e.password,role:e.adminRole}),await t.push("/login?message=registered")):"owner"===a.value&&(await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",{first_name:e.firstName,last_name:e.lastName,email:e.email,password:e.password,role:e.ownerRole}),await t.push("/login?message=registered"))}catch(o){alert(`Error: ${o.message}`)}},l=e=>{a.value=e};return{data:e,submit:s,selected:o,userSelect:l,selectedRole:a}},computed:{...(0,b.rn)({sortOptions:e=>e.post.sortOptions})}};const Zt=(0,$.Z)(Rt,[["render",It],["__scopeId","data-v-2fa2b97a"]]);var Mt=Zt;const Lt=e=>((0,s.dD)("data-v-601ce529"),e=e(),(0,s.Cn)(),e),Et={class:"flex justify-center items-center min-h-screen container"},Tt=Lt((()=>(0,s._)("h1",{class:"text-4xl mb-5"},"Log in",-1)));function jt(e,t,o,l,r,n){const i=(0,s.up)("my-select"),u=(0,s.up)("my-input"),d=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",Et,[(0,s._)("form",{class:"flex flex-col bg-gray-900 p-5 rounded-xl w-96 login-form",onSubmit:t[5]||(t[5]=(0,a.iM)(((...e)=>l.submit&&l.submit(...e)),["prevent"]))},[Tt,(0,s.Wm)(i,{modelValue:l.selected,"onUpdate:modelValue":t[0]||(t[0]=e=>l.selected=e),class:"select flex-1",options:e.sortOptions,onUserSelect:l.userSelect},null,8,["modelValue","options","onUserSelect"]),"owner"!==l.selectedRole?((0,s.wg)(),(0,s.j4)(u,{key:0,value:l.data.hotelName,"onUpdate:value":t[1]||(t[1]=e=>l.data.hotelName=e),type:"text",placeholder:"Hotel Name",required:""},null,8,["value"])):(0,s.kq)("",!0),(0,s.Wm)(u,{value:l.data.email,"onUpdate:value":t[2]||(t[2]=e=>l.data.email=e),type:"email",placeholder:"Email",required:""},null,8,["value"]),(0,s.Wm)(u,{value:l.data.password,"onUpdate:value":t[3]||(t[3]=e=>l.data.password=e),type:"password",placeholder:"Password",required:""},null,8,["value"]),(0,s.Wm)(d,{type:"submit",class:"btn-register border-solid border-blue-700 border-2 text-white mt-1"},{default:(0,s.w5)((()=>[(0,s.Uk)("Continue")])),_:1}),(0,s._)("p",{onClick:t[4]||(t[4]=t=>e.$router.push("/register")),class:"text-right cursor-pointer mt-2 underline underline-offset-8 hover:underline-offset-4 duration-300 hover:text-blue-400 ease-out"}," Register ")],32)])}var At={name:"Login",components:{MySelect:qt},setup(){const e=(0,ce.qj)({email:"",password:"",hotelName:"",userRole:""}),t=(0,w.tv)(),o=(0,ce.iH)(""),a=(0,ce.iH)(""),s=async()=>{try{let o=await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/login",{hotelName:e.hotelName,email:e.email,password:e.password,userRole:a.value});await localStorage.setItem("userData",o.config.data);let s,l,r=JSON.parse(localStorage.getItem("userData"));"owner"==a?(s={email:r.email,userRole:r.userRole},l=JSON.stringify(s),localStorage.setItem("userData",l)):(s={email:r.email,hotelName:r.hotelName,userRole:r.userRole},l=JSON.stringify(s),localStorage.setItem("userData",l)),k.Z.set("token",`${o.data.data.access_token}`),k.Z.set("refresh_token",`${o.data.data.refresh_token}`),await t.push("/?message=login")}catch(o){alert("Wrong email or password")}},l=e=>{a.value=e};return{data:e,submit:s,selected:o,selectedRole:a,userSelect:l}},mounted(){we[this.$route.query.message]&&this.$message(we[this.$route.query.message])},computed:{...(0,b.rn)({sortOptions:e=>e.post.sortOptions})}};const Bt=(0,$.Z)(At,[["render",jt],["__scopeId","data-v-601ce529"]]);var Vt=Bt;const zt=[{path:"/",meta:{auth:!0},component:_e},{path:"/hotels",component:at,meta:{auth:!0},name:"hotels"},{path:"/hotels/:hotelName",component:$t},{path:"/register",component:Mt,name:"register"},{path:"/login",component:Vt}],Ft=(0,w.p7)({routes:zt,history:(0,w.PO)("/")});Ft.beforeEach(((e,t,o)=>{let a=k.Z.get("token");const s=e.matched.some((e=>e.meta.auth));!a&&s?o("/register"):o()}));var Yt=Ft,Qt={mounted(e){e.focus()},name:"focus"},Jt={mounted(e,t){const o={rootMargin:"0px",threshold:1},a=(e,o)=>{e[0].isIntersecting&&t.value()},s=new IntersectionObserver(a,o);s.observe(e)},name:"intersection"},Xt=[Qt,Jt];const Kt={state:()=>({userData:JSON.parse(localStorage.getItem("userData")),authenticated:!1,auth:null,posts:[],isPostLoading:!1,dark:!1,root:null,selectedSort:"",searchQuery:"",page:1,limit:1,metaAll:0,meta:"total_count",totalPages:0,serverUrl:"https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net",sortOptions:[{value:"admin",name:"Admin"},{value:"owner",name:"Owner"},{value:"client",name:"Client"}]}),getters:{sortedPosts(e){return[...e.posts].sort(((t,o)=>t[e.selectedSort]?.localeCompare(o[e.selectedSort])))},searchedPosts(e,t){return t.sortedPosts.filter((t=>t.title.toLowerCase().includes(e.searchQuery.toLowerCase())))}},mutations:{setPosts(e,t){e.posts=t},setPostLoading(e,t){e.isPostLoading=t},setPage(e,t){e.page=t},setSelectedSort(e,t){e.selectedSort=t},setTotalPages(e,t){e.totalPages=t},setSearchQuery(e,t){e.searchQuery=t},setAuth(e,t){e.authenticated=t}},actions:{authTrue({state:e,commit:t}){t("setAuth",e.auth=!0)},authFalse({state:e,commit:t}){t("setAuth",e.auth=!1)}},namespaced:!0};var Gt=(0,b.MT)({modules:{post:Kt}}),eo=o(5205);(0,eo.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var to=o(3636),oo=o(7810),ao=o(9417),so=o(5779);o(4415);(0,a.ri)({});var lo={install(e,t){e.config.globalProperties.$message=e=>{M.toast({html:e})},e.config.globalProperties.$error=e=>{M.toast({html:`[Error]: ${e}`})}}};to.vI.add(ao.M_6,ao.DBf,ao.acZ,ao.mXR,ao.r5q,ao.Ht4);const ro=(0,a.ri)(H);ie.forEach((e=>{ro.component(e.name,e)})),Xt.forEach((e=>{ro.directive(e.name,e)})),document.addEventListener("DOMContentLoaded",(()=>{ro.use(so.Z),ro.use(lo).use(Gt).use(Yt).component("font-awesome-icon",oo.GN).mount("#app")}))}},t={};function o(a){var s=t[a];if(void 0!==s)return s.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,a,s,l){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],s=e[d][1],l=e[d][2];for(var n=!0,i=0;i<a.length;i++)(!1&l||r>=l)&&Object.keys(o.O).every((function(e){return o.O[e](a[i])}))?a.splice(i--,1):(n=!1,l<r&&(r=l));if(n){e.splice(d--,1);var u=s();void 0!==u&&(t=u)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,s,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,l,r=a[0],n=a[1],i=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(s in n)o.o(n,s)&&(o.m[s]=n[s]);if(i)var d=i(o)}for(t&&t(a);u<r.length;u++)l=r[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(d)},a=self["webpackChunkhotel"]=self["webpackChunkhotel"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(3600)}));a=o.O(a)})();
//# sourceMappingURL=app.4ccc5969.js.map