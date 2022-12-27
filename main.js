import './style.css'
import './star'
import './carousel'
import './toggle'
import './scrollMagic'

const openMenu = document.getElementById("openMenu")
const closeMenu = document.getElementById("closeMenu")
const menubar = document.querySelector("[role='menuBar']")

openMenu.addEventListener('click',()=>{
    const IsExpanded = JSON.parse(openMenu.getAttribute('aria-expanded'))
    openMenu.setAttribute('aria-expanded', !IsExpanded)
    navToggle()
})

closeMenu.addEventListener('click',()=>{
    const IsExpanded = JSON.parse(closeMenu.getAttribute('aria-expanded'))
    closeMenu.setAttribute('aria-expanded', !IsExpanded)
    navToggle()
})

// function to toggle nav in mobile view
function navToggle(){
    openMenu.classList.toggle('hidden')
    closeMenu.classList.toggle('hidden')
    menubar.classList.toggle('hidden')
    menubar.classList.toggle('flex')
}