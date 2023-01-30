/* ============= MENU SHOW Y HIDDEN =============== */

const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

        /* menu show */
        // validate if constant exists
        if(navToggle){
            navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
            })
        }

        /* menu hidden */
        // validate if constant exists
        if(navClose){
            navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
            })
        }


/* ============= REMOVE MENU MOBILE =============== */

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ============= ACCORDION SKILLS =============== */

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills__close'
    }
    if(itemClass === 'skills_content skills__close'){
        this.parentNode.className = 'skills_content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)

})

/* ============= QUALIFICATION TABS =============== */

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/* ============= SWIPER =============== */

// import Swiper from 'swiper/swiper-bundle.esm.js';
// import 'swiper/swiper-bundle.css';
let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});