if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const a=e=>n(e,r),l={module:{uri:r},exports:c,require:a};i[r]=Promise.all(o.map((e=>l[e]||a(e)))).then((e=>(s(...e),c)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hotel"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.df3ef1c8.css",revision:null},{url:"/css/chunk-vendors.e1f75bc0.css",revision:null},{url:"/favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"/img/icons/android-chrome-192x192.png",revision:"64fdb0addf459cb0f8e9de741a85fe4d"},{url:"/img/icons/android-chrome-512x512.png",revision:"e005da575ad7c613bfa9792c001bef71"},{url:"/img/icons/apple-touch-icon.png",revision:"5bf08cd36fb2bab3966e9e6a0c0ad41c"},{url:"/img/icons/favicon-16x16.png",revision:"e2ad6b5e26b4751e4d1b2f28bd0355f0"},{url:"/img/icons/favicon-32x32.png",revision:"ac7eff16684bb6b9717bfa307a4b9668"},{url:"/img/icons/logo.png",revision:"e005da575ad7c613bfa9792c001bef71"},{url:"/img/it-img.3558535a.webp",revision:null},{url:"/img/logo.965b105d.png",revision:null},{url:"/index.html",revision:"e7412f79afca80b7d0689ac7a9a5486b"},{url:"/js/app.ac8c2ebe.js",revision:null},{url:"/js/app.ac8c2ebe.js.map",revision:"1bc1a405b1481887ca1e10134d41a095"},{url:"/js/chunk-vendors.237d6faa.js",revision:null},{url:"/manifest.json",revision:"e0a8bf61c5e49b360281f6733950243b"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
