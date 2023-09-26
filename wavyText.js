const text = document.querySelector('.text')
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

const element = document.querySelectorAll('span')
for (let i=0; i<element.length;i++){
    element[i].style.animationDelay = i*.07 + 's'
}