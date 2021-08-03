function waitForChat(){
    window.addEventListener('load', function() {
        zE('webWidget:on', 'chat:connected', function() {
           console.log("ChatConnected")
        });
    })
    
}