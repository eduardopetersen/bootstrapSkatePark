function animate() { // função criada para dizer quando eu quero que a animação ocorra
    var animateList = document.querySelectorAll(".animate__animated"); //vai chamar a classe animate_animated

    for(var i = 0; i < animateList.length; i++) {
        var windowHeight = window.innerHeight; //ver ver a altura da pagina
        var elementTop = animateList[i].getBoundingClientRect().top; // ver a distancia do elemento do top
        var elementVisible = 10; // a partir de quantos px esse elemento vai aparecer

        if(elementTop < windowHeight - elementVisible) {  
            animateList[i].classList.add("animate__fadeInLeft"); // se o elemento estiver visivel na tela, faça a animação
        } else {
            animateList[i].classList.remove("animate__fadeInLeft"); // se não, espere ate o scroll chegar nele para animar
        }
    }
}
animate();

window.addEventListener("scroll", animate);