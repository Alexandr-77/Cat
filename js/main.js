
// $('.prices__card-image').slick();

$('.prices__card-image').slick({
  infinite: true,
  slidesToShow: 1,
  adaptiveHeight: true
});

// $('.gallery__block').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1
// });



$('.gallery__block').slick({
  infinite: true,
  // adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});





$('.class-mi').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 4,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });


// ===================================

let showLink = document.querySelectorAll('.videonab-hidden');
let btnVid = document.querySelector('.videonab__btn-po');

btnVid.addEventListener('click', showFun);

function showFun() {
  // showLink.forEach(e => {
  //    e.style.display = 'flex';
  // });
  for (let i = 0; i < showLink.length; i++) {
    showLink[i].style.display = 'flex';
    btnVid.style.display = 'none';
  }
  
}

// ==============  Аккардион  ===============

// let showFearsBlock = document.querySelector('.fears__block-item');
// let showFears = document.querySelector('.fears__block-hidden');
// let btnFears = document.querySelector('.fears__block-btn');

// showFearsBlock.addEventListener('click', accardion);

// function accardion() {
//   if (showFears.style.display === 'block') {
//     showFears.style.display = 'none';
//     btnFears.style.transform = 'rotate(90deg)';
//   } else {
//     showFears.style.display = 'block';
//     btnFears.style.transform = 'rotate(135deg)';
//   }
//   console.log(showFears);
// } 


let showFearsBlock = document.querySelectorAll('.fears__block-item');
let showFears = document.querySelectorAll('.fears__block-hidden');
let btnFears = document.querySelectorAll('.fears__block-btn');

for (let i = 0; i < showFearsBlock.length; i++) {

  showFearsBlock[i].onclick = function(){

    // for (let j = 0; j < showFears.length; j++ ){
    //   showFears[j].classList.remove('fears__show-hidden');
    // }

    showFears[i].classList.toggle('fears__show-hidden'); 
    btnFears[i].classList.toggle('fears__block-btn-active'); 
    }
}
// https://www.youtube.com/watch?v=5eCY1-11wAE