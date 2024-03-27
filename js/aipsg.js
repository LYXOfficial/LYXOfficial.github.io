document.addEventListener('pjax:complete',aipsg);
document.addEventListener('DOMContentLoaded',aipsg);
function aipsg(){
if(document.querySelector("#article-container")){
    try{document.querySelector(".st").remove()}catch(err){}
    var http=new XMLHttpRequest();
    http.open("GET","/zaiyao.json")
    http.send();
    http.onreadystatechange=(event)=>{
        if(http.readyState==4){
            if(http.status==200) var text=JSON.parse(http.responseText.replace(/<[^>]*>/g, ''))[location.href.split('/')[4]];
            else var text="文章摘要遇到异常。";
            console.log(text);
            const dom = document.querySelector('#ai-content')
            const data = text
            document.querySelector("#ai-reload").disabled=true;
            function writing(index) {
                if (index < data.length) {
                    dom.innerHTML += data[index]
                    setTimeout(writing.bind(this), 50, ++index)
                }
                else{
                    document.querySelector("#ai-reload").disabled=false;
                    var s=document.createElement("style")
                    s.className="st";
                    s.type="text/css";
                    s.innerText="#ai-content::after{content:''!important;}"
                    document.body.appendChild(s)
                }
            }
            writing(0);
            
        }
    }
}};

refreshPS=()=>{
}
reloadPS=()=>{
    ht=new XMLHttpRequest();
    document.querySelector('#ai-content').innerText="";
    document.querySelector(".st").remove()
    ht.open("GET","/zaiyao.json")
    ht.send();
    ht.onreadystatechange=(event)=>{
        if(ht.readyState==4){
            if(ht.status==200) var text=JSON.parse(ht.responseText.replace(/<[^>]*>/g, ''))[location.href.split('/')[4]];
            console.log(text);
            const dom = document.querySelector('#ai-content')
            const data = text.split('')
            document.querySelector("#ai-reload").disabled=true;
            function writing(index) {
                if (index < data.length) {
                    dom.innerHTML += data[index]
                    setTimeout(writing.bind(this), 50, ++index)
                    
                }
                else{
                    document.querySelector("#ai-reload").disabled=false;
                    var s=document.createElement("style")
                    s.className="st"
                    s.type="text/css";
                    s.innerText="#ai-content::after{content:''!important;}"
                    document.body.appendChild(s)
        
                }
            }
            writing(0);
        }
    }
}