const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});


function typeWriter(el){
  const mainText =el.innerHTML.split("")
  el.innerHTML = ''

  mainText.forEach(function(latter,i) {
    setTimeout(function(){
      el.innerHTML += latter
    }, 60*i)
    
  });
}

const phrase = document.querySelector('.mainSentence')
typeWriter(phrase)