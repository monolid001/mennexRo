var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');




function spin() {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('super-rotation');
    setTimeout(function() {
      resultWrapper.style.display = "block";
    }, 7800);
    setTimeout(function() {
      $('.spin-wrapper').slideUp();
      $('.order_block').slideDown();
      start_timer();
    }, 8000);
    wheel.classList.add('rotated');
  }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function(e){
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();

  var top = $('#form').offset().top;
  $('body,html').animate({scrollTop: top}, 800);
});

var time = 600;
var intr;
function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time-1;
  var mins = Math.floor(time/60);
  var secs = time - mins*60;
  if( mins == 0 && secs == 0 ) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0"+secs;
  $("#min").html("0"+mins);
  $("#sec").html(secs);
}
//попап
$(document).ready(function() {
  var flag = true;
  function showPopup() {
    $(window).mouseout(function(e) {
       if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
           $('.modal').fadeIn(300);
           flag = false;
       }
    });
    $(".modal-flex").on('click', function(event) {
         if ($(event.target).is($(".modal-flex")) || $(event.target).is(".modal-close"))  {
             $('.modal').fadeOut(300);
         }
     });
  }

  //проверка браузера с которого зашли и разрешения экрана
  if(($(window).width() > 1023))   {
    showPopup();
  }
});
var close = document.querySelector(".modal-close");
var button = document.querySelector(".modal-btn");
function hidePopup() {
  $(".modal").fadeOut(300);
}

