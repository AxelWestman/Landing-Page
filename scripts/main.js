const hamburguer = document.getElementById("hamburguer");
const nav = document.querySelector(".navbar");
const cerrar = document.querySelector("#cerrar");

/*hamburguer.addEventListener("click", () => {    
    alert("hamburguer clicked");
});*/

hamburguer.addEventListener("click", () => {

    nav.style.visibility = "visible";
    nav.classList.toggle("animate__fadeInLeft");
    nav.classList.remove("animate__fadeOutLeft");

});

cerrar.addEventListener("click", () => {

    nav.classList.add("animate__fadeOutLeft");
    nav.classList.remove("animate__fadeInLeft");

});

document.querySelectorAll(".main__link").forEach(n => n.addEventListener("click", () => {
    nav.classList.add("animate__fadeOutLeft");
    nav.classList.remove("animate__fadeInLeft");

}));