bsz=function(){var e=["site_pv","site_uv","page_pv","page_uv"],t=(document.currentScript,"busuanzi-identity"),n=function(){var n=new XMLHttpRequest;n.open("POST","https://bsz.dusays.com:9001/api",!0);var a=localStorage.getItem(t);null!=a&&n.setRequestHeader("Authorization","Bearer "+a);var s=window.location.href;0==window.location.host.indexOf("www.")&&(s=s.replace("www.","")),n.setRequestHeader("x-bsz-referer",s),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var a=JSON.parse(n.responseText);if(!0===a.success){e.map((function(e){var t=document.getElementById("busuanzi_value_".concat(e));t&&(t.innerHTML=a.data[e])}));var s=n.getResponseHeader("Set-Bsz-Identity");null!=s&&""!=s&&localStorage.setItem(t,s)}}},n.send()};if(n(),a){var s=window.history.pushState;window.history.pushState=function(){s.apply(this,arguments),n()},window.addEventListener("popstate",(function(e){n()}),!1)}},window.addEventListener("load",bsz),window.addEventListener("pjax:complete",bsz);