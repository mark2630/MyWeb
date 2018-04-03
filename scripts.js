//spin

$(window).scroll(function() {
  var theta = $(window).scrollTop() / 10000 % 360; /*speed formula*/
  $('.left').each(function(){
    var speed = theta;
    var this_one = $(this);
    if(this_one.attr("speed")){
      speed*=this_one.attr("speed");
    }
    this_one.css({ transform: 'rotate(' + speed + 'rad)' });
  });
  $('.right').each(function(){
    var speed = theta;
    var this_one = $(this);
    if(this_one.attr("speed")){
      speed*=this_one.attr("speed");
    }
    this_one.css({ transform: 'rotate(-' + speed + 'rad)' });
  });
  });
  
  

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200, function () {
          // Callback after animation
        });
      }
    }
  });


/*
$(window).scroll(function () {
  $(".hide_on_scroll").css("opacity", 1 -
    $(window).scrollTop() / 400);
});
*/

$('.bar_text').hide();

$(window).scroll(function () {
  var hT = $('#Skills').offset().top,
    hH = $('#Skills').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT + hH - wH * 1.5)) {
    setTimeout(function () {
      $('.bar_text').fadeIn("slow");
    }, 800);

    $(document).ready(function () {
      $('.progress .progress-bar').css("width",
        function () {
          return $(this).attr("aria-valuenow") + "%";
        }
      )
    });
  }
});



//navbar
$(document).ready(function () {
  $(".hamburger_container").click(function () { $("#myNav").toggleClass("nav_hide"); });
  $(".nav_links").click(function () { $("#myNav").removeClass("nav_hide"); $(".hamburger_container").removeClass("change"); });
});


function myFunction(x) {
  x.classList.toggle("change");
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}