let contador = 0;
showSlides(); 

function showSlides () { 
    let slides = document.getElementsByClassName("hijos"); 
    for (let i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none";
    } 
    contador++;

if (contador > slides.length) { contador = 1;

}
slides [contador - 1].style.display = "block";
setTimeout(showSlides, 2000);
}







