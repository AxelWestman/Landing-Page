const primer_articulo = document.getElementById("first-article-div11");
const segundo_articulo = document.getElementById("first-article-div12");
const tercer_articulo = document.getElementById("first-article-div13");
const cuarto_articulo = document.getElementById("first-article-div14");
const quinto_articulo = document.getElementById("first-article-div15");
const hamburguer = document.getElementById("hamburguer");
const nav = document.querySelector(".navbar");
const cerrar = document.querySelector("#cerrar");
const precios = document.getElementById("cajapagoss");
const ventanita = document.querySelector(".caja-precios");
const flechita = document.getElementById("flechaabajo");
const precios2 = document.getElementById("cajapagoss2");
const ventanita2 = document.getElementById("cajaprecios2");
const flechita2 = document.getElementById("flechaabajo2");
const precios3 = document.getElementById("cajapagoss3");
const ventanita3 = document.getElementById("cajaprecios3");
const flechita3 = document.getElementById("flechaabajo3");
const documento = document.getElementById("mainn");
/*hamburguer.addEventListener("click", () => {    
    alert("hamburguer clicked");
});*/



hamburguer.addEventListener("click", () => {
    event.stopPropagation();
    nav.style.visibility = "visible";
    nav.classList.toggle("animate__fadeInLeft");
    nav.classList.remove("animate__fadeOutLeft");

});

cerrar.addEventListener("click", () => {
    cerrarr()
});


document.querySelectorAll(".main__link").forEach(n => n.addEventListener("click", () => {
    nav.classList.add("animate__fadeOutLeft");
    nav.classList.remove("animate__fadeInLeft");

}));

 function cerrarr ()  {
    if (nav.style.visibility == "visible"){
        nav.classList.add("animate__fadeOutLeft");
        nav.classList.remove("animate__fadeInLeft");
    }
}  


document.addEventListener("click", () => {
   cerrarr()
   
});


precios.addEventListener("click", () => {
    
    if (ventanita.style.display === "none"){
        ventanita.style.display = "block";
        precios.style.borderBottom = "0px solid ";
        precios.style.borderRadius = "10px 10px 0px 0px";
        flechita.classList.toggle("fa-arrow-up");
        flechita.classList.remove("fa-arrow-down");
    }   else {
        ventanita.style.display =   "none";
        precios.style.borderBottom = "1px solid #30475E";
        precios.style.borderRadius = "10px 10px 10px 10px";
        flechita.classList.toggle("fa-arrow-down");
        flechita.classList.remove("fa-arrow-up");
    }
});

precios2.addEventListener("click", () => {
    if (ventanita2.style.display === "none"){
        ventanita2.style.display = "block";
        precios2.style.borderBottom = "0px solid ";
        precios2.style.borderRadius = "10px 10px 0px 0px";
        flechita2.classList.toggle("fa-arrow-up");
        flechita2.classList.remove("fa-arrow-down");
    }   else {
        ventanita2.style.display =   "none";
        precios2.style.borderBottom = "1px solid #30475E";
        precios2.style.borderRadius = "10px 10px 10px 10px";
        flechita2.classList.toggle("fa-arrow-down");
        flechita2.classList.remove("fa-arrow-up");
    }
});

precios3.addEventListener("click", () => {
    if (ventanita3.style.display === "none"){
        ventanita3.style.display = "block";
        precios3.style.borderBottom = "0px solid ";
        precios3.style.borderRadius = "10px 10px 0px 0px";
        flechita3.classList.toggle("fa-arrow-up");
        flechita3.classList.remove("fa-arrow-down");
    }   else {
        ventanita3.style.display =   "none";
        precios3.style.borderBottom = "1px solid #30475E";
        precios3.style.borderRadius = "10px 10px 10px 10px";
        flechita3.classList.toggle("fa-arrow-down");
        flechita3.classList.remove("fa-arrow-up");
    }
});

const cargarImagen = (entradas, observador) => {
    // console.log(entradas);
     //console.log(observador);
     entradas.forEach((entrada) => {
         if(entrada.isIntersecting){
             console.log("La imagen esta en pantalla");
             entrada.target.classList.add('visible');
         }
 });
 
 }
 
 const observador = new IntersectionObserver(cargarImagen, {
     root: null,
     rootMargin: '0px 0px 0px 0px',
     threshold: 1.0
 });
 
 observador.observe(primer_articulo);
 observador.observe(segundo_articulo);
 observador.observe(tercer_articulo);
 observador.observe(cuarto_articulo);
 observador.observe(quinto_articulo);