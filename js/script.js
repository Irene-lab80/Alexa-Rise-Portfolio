const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

// находим на странице иконку-гамбургер и адаптивное меню
const hamburger = document.querySelector('.hamburger');

// функция, которая меняет класс 'open' у иконки и меню - добавляет, если класса нет и убирает, если класс есть
function toggleMenu() {
  hamburger.classList.toggle('open');
}

// отслеживаем клики по иконке
hamburger.addEventListener('click', toggleMenu);


// ==============cкрытие адаптивного меню при клике по ссылке===============

// находим все ссылки меню и присваиваем их переменной navLinks
const navLinks = document.querySelectorAll('.nav-link');

// элементы можно перебрать при помощи метода forEach()
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

function closeMenu(event) {
  if (event.target.classList.contains('nav-link')) {
    hamburger.classList.remove('open');
  }
}

//=============== изменить изображение кликом по кнопке==============================================================
const portfolioBtn = document.querySelectorAll('.portfolio__btn');
const portfolioBtns = document.querySelector('.portfolio__btns');
const portfolioImages = document.querySelectorAll('.portfolio-image');

//кликаем кнопки portfolio
portfolioBtn.forEach(button => {
  button.addEventListener('click', function() {
    portfolioBtn.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  })
})

// менянем картинки (ПЕРЕДЕЛАТЬ ДАТАСЕТОМ?)
const changeImages = (evt) => {
  if (evt.target.classList.contains('winter')){
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
  }
  else if (evt.target.classList.contains('spring')){
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
  }
  else if (evt.target.classList.contains('summer')){
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
  }
  else if (evt.target.classList.contains('autumn')){
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
  }
}
portfolioBtns.addEventListener('click', changeImages)

// ============================================================================================================
// function preloadSummerImages() {
//   for(let i = 1; i <= 6; i++) {
//     const img = new Image();
//     img.src = `./assets/img/summer/${i}.jpg`;
//   }
// }
// preloadSummerImages();

let seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages(arr) {
  for(let j = 0; j < arr.length; j++){
    for(let i = 1; i <= 6; i++){
      const img = new Image();
      img.src = `./assets/img/${arr[j]}/${i}.jpg`;
    }
  }
}
preloadImages(seasons);

// =============================================================================
// i18n

// i18Obj
const langBtns = document.querySelector('.lang-toggle');
const langBtn = document.querySelectorAll('.lang-toggle__btn');

function getTranslate(event) {
  
  let lang = event.target.textContent;
  const translationText = document.querySelectorAll('[data-i18]');
  translationText.forEach((element) => {
    element.textContent = i18Obj[lang][element.dataset.i18];
  });
}

langBtns.addEventListener('click', getTranslate)


//кликаем кнопки language
langBtn.forEach(button => {
  button.addEventListener('click', function() {
    langBtn.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  })
})

// ==========================================================================
// THEMES
const themeChangeBtn = document.querySelector('.theme-change-btn');

const body = document.querySelector('.body');
const footer = document.querySelector('.footer');
const skillsSectionTitle = document.querySelector('.skills__section-title');
const portfolioSectionTitle = document.querySelector('.portfolio__section-title');
const videoSectionTitle = document.querySelector('.video__section-title');
const priceSectionTitle = document.querySelector('.price__section-title');
const porfolioBtnWinter = document.querySelector('.portfolio__btn.winter');
const porfolioBtnSpring = document.querySelector('.portfolio__btn.spring');
const porfolioBtnSummer = document.querySelector('.portfolio__btn.summer');
const porfolioBtnAutumn = document.querySelector('.portfolio__btn.autumn');
const smallMenu = document.querySelector('.nav-list');
const navLink = document.querySelector('.nav-link');
const line = document.querySelectorAll('.line');
const videoPlayer = document.querySelector('.player');

document.querySelector('.icon-contract').style.display = "none";
// document.querySelector('.icon-expand').style.display = "none";
// document.querySelector('.icon-contract').style.display = "block";


const themeElements = [body, 
                      footer,
                      skillsSectionTitle, 
                      portfolioSectionTitle, 
                      videoSectionTitle,                         
                      priceSectionTitle, 
                      porfolioBtnWinter, 
                      porfolioBtnSpring, 
                      porfolioBtnSummer, 
                      porfolioBtnAutumn,
                       
                      ];

const smallMenuElmts = [
                      smallMenu,
                      navLink]
                      
const themeChange = () => {
  themeElements.forEach((el) => {
    el.classList.toggle('light-theme')
  }) 
  videoPlayer.classList.add('dark-theme')
}

themeChangeBtn.addEventListener('click', themeChange)

// иконка гамбургера
themeChangeBtn.addEventListener('click', () => {
  line.forEach((el)=> {
    el.classList.toggle('hamburger-line')
  })  
})

// light theme for small menu
const mediaQuery = window.matchMedia('(max-width: 768px)')
function mediaMenu() {
  if (mediaQuery.matches) {
    smallMenuElmts.forEach((el) => {
      el.classList.toggle('light-theme')
    })
  }
}



// /кликаем кнопку theme
let btnActive = () => {
  themeChangeBtn.classList.remove('active');
  themeChangeBtn.classList.toggle('active');
}

themeChangeBtn.addEventListener('click', btnActive);
themeChangeBtn.addEventListener('click', mediaMenu);



// =============================================================================
// video-player

// variables
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const icon = player.querySelector('.play-btn-icon');
const volume = player.querySelector('.volume-slider');
const muteBtn = player.querySelector('.mute');
const muteIcon = player.querySelector('.mute-btn-icon');
const coverBtn = player.querySelector('.player__cover-button');
const controls = player.querySelector('.player__controls');






// functions
function showControls () {
  controls.classList.remove('invisible')
}

function togglePlay(){
  if (video.paused){
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(evt) {
  if(video.paused){
    icon.classList.remove('pause');
    coverBtn.classList.add('visible');
  } else {
    coverBtn.classList.remove('visible');
    icon.classList.add('pause');  
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;  
}


function changeVolumeSlider() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value*100}%, #fff ${value*100}%, white 100%)`
}


function updateMuteBtn(evt) {
  if (!video.muted){
    muteIcon.classList.add('mute');
  } else {
    muteIcon.classList.remove('mute');
  }
}

// event listeners
video.addEventListener('click', togglePlay);
coverBtn.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);




toggle.addEventListener('click', togglePlay);


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
  if(mousedown){
    scrub(e);
  }
});

progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

volume.addEventListener('input', changeVolumeSlider);
volume.addEventListener('mousemove', (e) => {
  if(!mousedown){
    video.volume = e.target.value;
    if( e.target.value == 0){
      muteIcon.classList.add('mute');
    } else {
      muteIcon.classList.remove('mute');
    }
  }

});

muteIcon.addEventListener('click', updateMuteBtn);
muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
})

player.addEventListener('click', showControls);


//=====================================================================
//  LOCAL STORAGE

// let language = 'ru';
// // let theme = 'light';

// function setLocalStorage() {
//   localStorage.setItem('language', language);
//   // localStorage.setItem('theme', theme);
// }

// window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//   if(localStorage.getItem('language')) {
//     let languageLocal = localStorage.getItem('language');
//     getTranslate(languageLocal);
//   };
  
//   // if (localStorage.getItem("theme")) {
//   //   const themeLocal = localStorage.getItem("theme");
//   //   if (theme != themeLocal) {
//   //     themeChange();
//   //   }
//   // }
// }

// window.addEventListener('load', getLocalStorage)


// // const langBtns = document.querySelector('.lang-toggle');
// // const langBtn = document.querySelectorAll('.lang-toggle__btn');

// // function getTranslate(event) {
// //   let lang = event.target.textContent;
// //   const translationText = document.querySelectorAll('[data-i18]');
// //   translationText.forEach((element) => {
// //     element.textContent = i18Obj[lang][element.dataset.i18];
// //   });
// // }

// // langBtns.addEventListener('click', getTranslate)


