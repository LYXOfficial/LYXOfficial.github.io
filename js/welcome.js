function browserTC(){btf.snackbarShow(""),Snackbar.show({text:"浏览器版本较低，网站样式可能错乱",actionText:"关闭",duration:"6000",pos:"bottom-right"})}function browserVersion(){var e=navigator.userAgent,o=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,t=(e.indexOf("Trident")>-1&&e.indexOf("rv:11.0"),e.indexOf("Edge")>-1&&!o),r=e.indexOf("Firefox")>-1,i=e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,n=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1&&-1==e.indexOf("Edge")&&-1==e.indexOf("OPR");e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome")&&-1==e.indexOf("Edge")&&e.indexOf("OPR");t?e.split("Edge/")[1].split(".")[0]<90&&browserTC():r?e.split("Firefox/")[1].split(".")[0]<90&&browserTC():i?e.split("OPR/")[1].split(".")[0]<80&&browserTC():n&&e.split("Chrome/")[1].split(".")[0]<90&&browserTC()}function setCookies(e,o){let t=new Date((new Date).getTime()+24*o*60*60*1e3).toGMTString();for(let o in e)document.cookie=o+"="+e[o]+";expires="+t}function getCookie(e){var o,t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(o=document.cookie.match(t))?unescape(o[2]):null}"serviceWorker"in window.navigator&&navigator.serviceWorker.controller&&(navigator.serviceWorker.controller.postMessage("update"),navigator.serviceWorker.addEventListener("message",(e=>{const o=e.data;switch(o.type){case"update":case"refresh":break;default:console.error(`未知事件：${o.type}`)}}))),"0"!=localStorage.getItem("popWelcomeWindow")&&(null==document.referrer||-1!=document.referrer.indexOf("yaria.top")||-1!=document.referrer.indexOf("ariasaka.top")?Snackbar.show({pos:"top-right",showAction:!1,text:"欢迎访问本站！\n右下角设置键可以修改样式哦！"}):(Snackbar.show({pos:"top-right",showAction:!1,text:`欢迎来自${document.referrer.split("://")[1].split("/")[0]}的朋友访问本站！\n右下角设置键可以修改样式哦！`}),localStorage.setItem("popWelcomeWindow","0"))),"0"!=sessionStorage.getItem("popCookieWindow")&&(Snackbar.show({text:"本站域名已由yisous.xyz更换为blog.yaria.top，请注意咕！",pos:"top-right",actionText:""}),setTimeout((function(){Snackbar.show({text:"本站使用Cookie和本地/会话存储保证浏览体验和网站统计",pos:"bottom-right",actionText:"查看博客声明",onActionClick:function(e){window.open("/license")}})}),3e3)),sessionStorage.setItem("popCookieWindow","0"),1!=getCookie("browsertc")&&(setCookies({browsertc:1},1),browserVersion());