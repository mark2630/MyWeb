// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
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
          scrollTop: target.offset().top-((window.innerHeight-target.height())/2)
        }, 1200, function() {
          // Callback after animation
        });
      }
    }
  });

  
  
  $(window).scroll(function(){
      $(".hide_on_scroll").css("opacity", 1 - 
      $(window).scrollTop() / 400);
  });
  

$('.bar_text').hide();
  
	$(window).scroll(function() {
   var hT = $('#Skills').offset().top,
       hH = $('#Skills').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
	   setTimeout(function () {
			$('.bar_text').fadeIn("slow");
		}, 800);
	   
		  $(document).ready(function() {
		  $('.progress .progress-bar').css("width",
					function() {
						return $(this).attr("aria-valuenow") + "%";
					}
			)
		});
   }
});
	


