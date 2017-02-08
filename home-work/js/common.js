$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

$(".figures").css("max-width", $(".dragdealer").width())


//eat pill!!
$(".pill").draggable();
$( ".pacient" ).droppable({
	drop: function( event, ui ) {
	$(this).hide();
	$(this).children("img").attr("src","img/happy.png")
	$(".pill").hide();
	$(".pacient").css({'max-width':'+=245'});
	$(this).fadeIn(1000);
	}
});







/*
n = 1;
x = 0;
while( n < 22) {
$('.num').append("<div class='number'>"+ n +"</div>");
n++;
}; */

//slide
var lineStep = new Dragdealer('demo-simple-slider', {
		//steps: 21,
		speed: .5,
  });


//remove/add active
$(".button").click(function(eventОbject) {
	$(".button").removeClass('active');
	$(this).addClass('active');
	eventОbject.preventDefault();
});


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


});
