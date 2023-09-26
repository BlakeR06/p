document.addEventListener("DOMContentLoaded", function() {

    /* vars */
    const redCircle = document.getElementById('red');
    const blueCircle = document.getElementById('blue')
    const greenCircle = document.getElementById('green')
    const purpleCircle = document.getElementById('purple')
    const cover = document.getElementById('cover')
    const homeButton = document.getElementById('homeButton')

    /*fade in page */

    loadPage()

    /* button clicks */
    redCircle.addEventListener('click', () => {
        circlesFade()
        setTimeout(function() {
            window.location.href = "projects.html";
        }, 1000);
    });
    blueCircle.addEventListener('click', () => {
        circlesFade()
    });
    greenCircle.addEventListener('click', () => {
        circlesFade()
    });
    purpleCircle.addEventListener('click', () => {
        circlesFade()
    });

    homeButton.addEventListener('click', ()=>{
        circlesFade()
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
});
