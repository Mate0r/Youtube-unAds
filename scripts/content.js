
window.addEventListener('load', function() {

    this.window.setTimeout(function() {
        
        const urlParams = new URLSearchParams(window.location.search);
        let player = document.querySelector("#player.ytd-watch-flexy");
        var height = player.offsetHeight;
        player.innerHTML = '<iframe class="youtube-unblock" src="https://www.youtube.com/embed/' + urlParams.get('v') + '?autoplay=1" allow="autoplay"></iframe>';
        document.querySelector("iframe.youtube-unblock").style.width = "100%";
        document.querySelector("iframe.youtube-unblock").style.height = height + "px";
    }, 500);
    
});
