if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const f=e=>n(e,s),a={module:{uri:s},exports:c,require:f};i[s]=Promise.all(o.map((e=>a[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"CNTT"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.c8a403e6.css",revision:null},{url:"/favicon.ico",revision:"7710e517326c5a80ae366b964df6af3b"},{url:"/img/icons/android-chrome-192x192.png",revision:"64fdb0addf459cb0f8e9de741a85fe4d"},{url:"/img/icons/android-chrome-512x512.png",revision:"e005da575ad7c613bfa9792c001bef71"},{url:"/img/icons/apple-touch-icon.png",revision:"5bf08cd36fb2bab3966e9e6a0c0ad41c"},{url:"/img/icons/favicon-16x16.png",revision:"e2ad6b5e26b4751e4d1b2f28bd0355f0"},{url:"/img/icons/favicon-32x32.png",revision:"ac7eff16684bb6b9717bfa307a4b9668"},{url:"/img/logo.965b105d.png",revision:null},{url:"/index.html",revision:"636738b1eb8a2676c573aad1ff7bd7a8"},{url:"/js/app.9f6c5462.js",revision:null},{url:"/js/app.9f6c5462.js.map",revision:"4c389f0c461862b6863f13d1b93ef29e"},{url:"/js/chunk-vendors.49784c7a.js",revision:null},{url:"/manifest.json",revision:"c54c7275b75656668aa9d655dbbf9e15"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
