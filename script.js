window.onload=function(){
       window.parent.postMessage({ h: document.body.scrollHeight}, '*')
       console.log(document.body.scrollHeight)
}
