//menu or hamburger toggle
const menu = document.getElementById("menu")
const navbar = document.getElementById("navbar") 

menu.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
});
