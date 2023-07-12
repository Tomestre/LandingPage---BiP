const iconNav = document.querySelector('.iconNav');
const menu = document.querySelector('.menu');
const menuLink=document.querySelectorAll('nav a')

iconNav.addEventListener('click', function() {
  
  menu.classList.toggle('menu-active')
});

for(i=0; i < menuLink.length; i++) {
menuLink[i].addEventListener('click',()=>{

  menu.classList.remove('menu-active')
})}



const imgPeople = document.querySelectorAll('.container-peoples img')

for(i=0; i < imgPeople.length; i++) {

  const dataPeople = imgPeople[i].nextElementSibling
  const imgPeopleSelected =imgPeople[i]

  imgPeople[i].addEventListener('click',()=>{

    imgPeopleSelected.classList.toggle('coluna2')

    dataPeople.classList.toggle('data-active')
  })}

const logoNav = document.querySelector('#imagem2')

logoNav.addEventListener('click', sumirImagem)


function sumirImagem() {
  var imagem = document.getElementById("imagem1");
  var posicaoX = 0;
  var posicaoY = 100;
  
  // define as coordenadas iniciais da imagem
  imagem.style.left = posicaoX + "%";
  imagem.style.top = posicaoY + "%";
  
  // exibe a imagem
  imagem.style.display = "block";
  
  var animacao = setInterval(frame, 5);
  
  function frame() {
    if (posicaoX == 100 || posicaoY == -100) {
      clearInterval(animacao);
      // esconde a imagem
      imagem.style.display = "none";
      // redefine as coordenadas para a posição inicial
      posicaoX = 0;
      posicaoY = 100;
      imagem.style.left = posicaoX + "%";
      imagem.style.top = posicaoY + "%";
    } else {
      posicaoX++;
      posicaoY--;
      imagem.style.left = posicaoX + "%";
      imagem.style.top = posicaoY + "%";
    }
  }
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=> {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el))