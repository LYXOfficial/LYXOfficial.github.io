function FixedCardWidget(e,d,i){if("id"===e)var t=document.getElementById(d);else t=document.getElementsByClassName(d)[i];t&&(t.className.indexOf("fixed-card-widget")>-1?RemoveFixedCardWidget():(RemoveFixedCardWidget(),CreateQuitBox(),t.classList.add("fixed-card-widget")))}function CreateQuitBox(){document.getElementById("aside-content").insertAdjacentHTML("beforebegin",'<div id="quit-box" onclick="RemoveFixedCardWidget()"></div>')}function RemoveFixedCardWidget(){var e=document.querySelectorAll(".fixed-card-widget");if(e)for(i=0;i<e.length;i++)e[i].classList.remove("fixed-card-widget");var d=document.getElementById("quit-box");d&&d.remove()}document.addEventListener("DOMContentLoaded",RemoveFixedCardWidget());