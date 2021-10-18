$(document).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".header-nav").addClass("dark");
    } else {
       $(".header-nav").removeClass("dark");
    }
});

$(document).ready(function () {
  const frstPrjDescr = $(".first-proj-descr");
  const frstPrjButton = $("#first-proj-btn");

  frstPrjButton.on('click', function(event) {
    frstPrjDescr.toggle();
  })

  const secPrjDescr = $(".sec-proj-descr");
  const secPrjButton = $("#sec-proj-btn");

  secPrjButton.on('click', function(event) {
    secPrjDescr.toggle();
  })
});

$(document).ready(function(){
  $('.news-slider').slick({

  });
});

//
// const headerNav = document.querySelector('.header-nav');
//
// window.onscroll = function(){
//   const top = window.scrollY;
//   console.log(top);
//   if (top >= 100){
//     headerNav.classList.add('.dark');
//   }else{
//     headerNav.classList.remove('.dark');
//   }
// }
