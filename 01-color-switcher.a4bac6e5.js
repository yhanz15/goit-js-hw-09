const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");let n=null;a.disable=!0,e.addEventListener("click",(function(){n=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,a.disable=!1,e.disable=!0}),1e3)})),a.addEventListener("click",(function(){clearInterval(n),a.disable=!0,e.disable=!1}));
//# sourceMappingURL=01-color-switcher.a4bac6e5.js.map
