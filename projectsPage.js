document.addEventListener("DOMContentLoaded", function() {

    const cover = document.getElementById('cover')
    const homeButton = document.getElementById('homeButton')

    loadPage()
    
    homeButton.addEventListener('click', ()=>{
        circlesFade()
        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);
    })

    function circlesFade(){
        cover.style.width = '100%';
        cover.style.height = '100%';
        cover.style.opacity = 10;
    }

    function loadPage(){
        setTimeout(function(){

            cover.style.opacity = 0;
            moveCover()

        }, 700)

        setTimeout(function moveCover(){
            cover.style.width = '0px';
            cover.style.height = '0px';
        }, 1400)
    }
})