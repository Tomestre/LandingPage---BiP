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

