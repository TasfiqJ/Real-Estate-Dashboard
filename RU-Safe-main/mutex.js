console.log("GGWp");var e=new MutationObserver(function(e){e.forEach(t=>{if(t&&t.type=="childList"&&t.addedNodes.length==1&&t.removedNodes.length==0&&t.addedNodes[0].tagName=="DIV"){let e=t.addedNodes[0];if(e){if(e.dataset.senderName){e=e.querySelector("[data-message-text]")}if(e.dataset&&e.dataset.messageText){message=e.dataset.messageText;console.log(message);if(message!=""&&(message.startsWith("https://meet.google.com")||message.endsWith(".png")||message.endsWith(".jpg")||message.endsWith(".jpeg")||message.endsWith(".webp"))){a=document.createElement("a");a.href=message;a.target="_blank";img=document.createElement("img");img.alt=message;img.src=message;img.style="width:300px !important";a.appendChild(img);e.parentNode.replaceChild(a,e)}}}}})});var t=document.documentElement||document.body;var s={childList:true,subtree:true};e.observe(t,s);