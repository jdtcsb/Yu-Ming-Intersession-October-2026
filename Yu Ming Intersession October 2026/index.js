window.addEventListener('DOMContentLoaded', (event)=>{
    var frame = window.frameElement
    frame.addEventListener("DOMContentLoaded", (e)=>{
        console.log("dom loaded")
    })
    console.log(frame)
    frame.sandbox = "allow-scripts allow-popups allow-popups-to-escape-sandbox"

    var links = document.querySelectorAll(".logo-link")

    // for (const link of links){
    //     link.addEventListener("click", (e)=>{
    //         e.preventDefault();
    //         console.log(link.innerHTML)
    //         frame.contentWindow.postMessage({}, 'https://webviewer.pickcode.app/');
    //     })
    // }

    document.querySelector(".logo-link").addEventListener("click", (e)=>{
        frame.contentWindow.postMessage({}, 'https://webviewer.pickcode.app/');
    })




})

window.addEventListener('message', event => {
    // IMPORTANT: check the origin of the data!
    if (event.origin === 'https://app.pickcode.io/share/cmv05n2nm00cmhex2drp59ym9') {
        // The data was sent from your site.
        // Data sent with postMessage is stored in event.data:
        console.log(event.data);
        console.log("got here")
    } else {
        // The data was NOT sent from your site!
        // Be careful! Do not use it. This else branch is
        // here just for clarity, you usually shouldn't need it.
        return;
    }
});