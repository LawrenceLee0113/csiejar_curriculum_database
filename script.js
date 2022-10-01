window.onload=function(){
       window.parent.postMessage({
              h: document.body.scrollHeight,
              id:window.location.pathname.split("/")[2].replace(".html","")
       }, '*')
       console.log(document.body.scrollHeight)
}
