function setMask(){return null!=document.getElementsByClassName("rmMask")[0]?document.getElementsByClassName("rmMask")[0]:(mask=document.createElement("div"),mask.className="rmMask",mask.style.width=window.innerWidth+"px",mask.style.height=window.innerHeight+"px",mask.style.background="#fff",mask.style.opacity=".0",mask.style.position="fixed",mask.style.top="0",mask.style.left="0",mask.style.zIndex=998,document.body.appendChild(mask),document.getElementById("rightMenu").style.zIndex=19198,mask)}function insertAtCursor(e,t){if(document.selection)e.focus(),sel=document.selection.createRange(),sel.text=t,sel.select();else if(e.selectionStart||"0"==e.selectionStart){var n=e.selectionStart,o=e.selectionEnd,a=e.scrollTop;e.value=e.value.substring(0,n)+t+e.value.substring(o,e.value.length),a>0&&(e.scrollTop=a),e.focus(),e.selectionStart=n+t.length,e.selectionEnd=n+t.length}else e.value+=t,e.focus()}let rmf={};function popupMenu(){window.oncontextmenu=function(e){if(e.ctrlKey||document.body.clientWidth<900)return!0;$(".rightMenu-group.hide").hide(),document.getSelection().toString()&&$("#menu-text").show(),(document.getElementById("post")||document.getElementById("page"))&&$("#menu-post").show();var t=window.document.body;t=e.target;/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(window.getSelection().toString())&&"A"!=t.tagName&&$("#menu-too").show(),"A"==t.tagName&&($("#menu-to").show(),rmf.open=function(){-1==t.href.indexOf("http://")&&-1==t.href.indexOf("https://")||-1!=t.href.indexOf("yaria.top")?pjax.loadUrl(t.href):location.href=t.href},rmf.openWithNewTab=function(){window.open(t.href)},rmf.copyLink=function(){let e=t.href,n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("Copy"),document.body.removeChild(n)}),"IMG"==t.tagName?($("#menu-img").show(),rmf.openWithNewTab=function(){window.open(t.src)},rmf.click=function(){t.click()},rmf.copyLink=function(){let e=t.src,n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("Copy"),document.body.removeChild(n)},rmf.saveAs=function(){var e=t.src,n=e.split("/")[-1];rmf.downloadImage(e,n)}):"TEXTAREA"!=t.tagName&&"INPUT"!=t.tagName||($("#menu-paste").show(),rmf.paste=function(){navigator.permissions.query({name:"clipboard-read"}).then((e=>{"granted"==e.state||"prompt"==e.state?navigator.clipboard.readText().then((e=>{console.log(e),insertAtCursor(t,e)})):Snackbar.show({text:"请允许读取剪贴板！",pos:"top-center",showAction:!1})}))});let n=e.clientX+10,o=e.clientY,a=$("#rightMenu").width(),i=$("#rightMenu").height();return n+a>window.innerWidth&&(n-=a+10),o+i>window.innerHeight&&(o-=o+i-window.innerHeight),mask=setMask(),window.onscroll=()=>{rmf.showRightMenu(!1),window.onscroll=()=>{};try{document.body.removeChild(mask)}catch(e){}},$(".rightMenu-item").click((()=>{document.body.removeChild(mask)})),$(window).resize((()=>{rmf.showRightMenu(!1),document.body.removeChild(mask)})),mask.onclick=()=>{document.body.removeChild(mask)},rmf.showRightMenu(!0,o,n),!1},window.addEventListener("click",(function(){rmf.showRightMenu(!1)}))}rmf.showRightMenu=function(e,t=0,n=0){let o=$("#rightMenu");o.css("top",t+"px").css("left",n+"px"),e?o.show():o.hide()},rmf.switchDarkMode=function(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},rmf.yinyong=function(){var e=document.getElementsByClassName("el-textarea__inner")[0],t=document.createEvent("HTMLEvents");t.initEvent("input",!0,!0),e.value="> "+getSelection().toString()+"\n\n",e.dispatchEvent(t),document.getElementsByClassName("el-textarea__inner")[0].value="> "+getSelection().toString()+"\n\n",setTimeout((()=>{document.querySelector(".tk-col>.tk-input>.el-textarea__inner").focus()}),1e3),Snackbar.show({text:"为保证最佳评论阅读体验，建议不要删除空行",pos:"top-center",showAction:!1})},rmf.copyWordsLink=function(){let e=window.location.href,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),Snackbar.show({text:"链接复制成功！快去分享吧！",pos:"top-right",showAction:!1})},rmf.switchReadMode=function(){const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="fas fa-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function n(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)}))},rmf.copySelect=function(){document.execCommand("Copy",!1,null)},rmf.scrollToTop=function(){document.getElementsByClassName("menus_items")[1].setAttribute("style",""),document.getElementById("name-container").setAttribute("style","display:none"),btf.scrollToDest(0,500)},rmf.translate=function(){document.getElementById("translateLink").click()},rmf.searchinThisPage=()=>{document.getElementsByClassName("local-search-box--input")[0].value=window.getSelection().toString(),document.getElementsByClassName("search")[0].click();var e=document.createEvent("HTMLEvents");e.initEvent("input",!1,!1),document.getElementsByClassName("local-search-box--input")[0].dispatchEvent(e)},rmf.downloadImage=function(e,t){btf.snackbarShow("正在下载中，请稍后",!1,1e4),setTimeout((function(){let n=new Image;n.setAttribute("crossOrigin","anonymous"),n.onload=function(){let e=document.createElement("canvas");e.width=n.width,e.height=n.height,e.getContext("2d").drawImage(n,0,0,n.width,n.height);let o=e.toDataURL("image/png"),a=document.createElement("a"),i=new MouseEvent("click");a.download=t||"photo",a.href=o,a.dispatchEvent(i)},n.src=e,btf.snackbarShow("图片已添加盲水印，请遵守版权协议"),rm.downloadimging=!1}),"10000")},document.body.addEventListener("touchmove",(function(e){}),{passive:!1}),navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||popupMenu();const box=document.documentElement;function addLongtabListener(e,t){let n=0;e.ontouchstart=()=>{n=0,n=setTimeout((()=>{t(),n=0}),380)},e.ontouchmove=()=>{clearTimeout(n),n=0},e.ontouchend=()=>{n&&clearTimeout(n)}}addLongtabListener(box,popupMenu);