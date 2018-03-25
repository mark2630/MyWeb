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

