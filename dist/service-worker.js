if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const l=e=>n(e,s),a={module:{uri:s},exports:r,require:l};i[s]=Promise.all(c.map((e=>a[e]||l(e)))).then((e=>(o(...e),r)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hotel"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.aa19fc3b.css",revision:null},{url:"/css/chunk-vendors.e1f75bc0.css",revision:null},{url:"/favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"/img/icons/android-chrome-192x192.png",revision:"64fdb0addf459cb0f8e9de741a85fe4d"},{url:"/img/icons/android-chrome-512x512.png",revision:"e005da575ad7c613bfa9792c001bef71"},{url:"/img/icons/apple-touch-icon.png",revision:"5bf08cd36fb2bab3966e9e6a0c0ad41c"},{url:"/img/icons/favicon-16x16.png",revision:"e2ad6b5e26b4751e4d1b2f28bd0355f0"},{url:"/img/icons/favicon-32x32.png",revision:"ac7eff16684bb6b9717bfa307a4b9668"},{url:"/img/icons/logo.png",revision:"e005da575ad7c613bfa9792c001bef71"},{url:"/img/it-img.3558535a.webp",revision:null},{url:"/img/logo.965b105d.png",revision:null},{url:"/index.html",revision:"342a799c4cf98495830d9f90f6682bc8"},{url:"/js/app.4ccc5969.js",revision:null},{url:"/js/app.4ccc5969.js.map",revision:"a7ebba027ca69f8ac7dc03aa05cb6ab8"},{url:"/js/chunk-vendors.57d38ecf.js",revision:null},{url:"/manifest.json",revision:"e0a8bf61c5e49b360281f6733950243b"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
