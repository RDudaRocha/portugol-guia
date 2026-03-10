function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("active")
}

function carregarMenu(){

fetch("../menu.html")
.then(res => res.text())
.then(data => {

document.getElementById("menu").innerHTML = data

})

}

document.addEventListener("DOMContentLoaded", carregarMenu)

function toggleMenu(){

document.getElementById("sidebar").classList.toggle("active")

}

/* animação de cards */

const cards = document.querySelectorAll(".card")

cards.forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

card.style.background =
`radial-gradient(circle at ${x}px ${y}px, #334155, #1e293b)`

})

card.addEventListener("mouseleave", () => {

card.style.background = "#1e293b"

})

})

