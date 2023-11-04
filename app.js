const scolimg1 = document.querySelector('.scolimg1');
const scolimg2 = document.querySelector('.scolimg2');
const scolimg3 = document.querySelector('.scolimg3');
const navBar = document.querySelector('.navBar');
const headerTop = document.querySelector('.headerTop');
const homeScrolBtn = document.querySelector('.homeScrolBtn');
const about = document.querySelectorAll('.about1', 'about2', 'about3')


document.addEventListener('scroll', (e) => {
  scrollAnimation()
  fixedScrollfu()
});


function fixedScrollfu(){

  if (window.scrollY >= 40) {
    
    navBar.classList.add('fixednavBar');
    homeScrolBtn.style.display = 'block';
  }
  else{
    navBar.classList.remove('fixednavBar');
    homeScrolBtn.style.display = 'none';
  }
};

function scrollAnimation(){
  const windowsBottom = window.innerHeight;
  
  about.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top 
    
    if (boxTop <= windowsBottom){
      box.style.animation = `scrollanimation 1s`;
    }
    else{
      box.style.animation = `none`;
    }
  })
};

function showImg1(){
  scolimg1.scrollIntoView(0, {behavior: "smooth"})
};
function showImg2() {
  scolimg2.scrollIntoView(0, {behavior: "smooth"})
};
function showImg3() {
  scolimg3.scrollIntoView(0, {behavior: "smooth"})
};
function homeScroll(){
  headerTop.scrollIntoView({behavior: "smooth"})
};

const drowDown2 = document.querySelector('.drowDown2');
const navMenu = document .querySelector('.navMenu');

function showDrowMenu() {
  drowDown2.classList.toggle('showDrowpDown');
};

function showNavMenu(){
    navMenu.classList.toggle('showNavMenu')
};
