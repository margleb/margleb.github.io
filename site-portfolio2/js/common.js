$(document).ready(function() {


//mixitup
var mixer = mixitup('#portfolio_grid');

//active class
$(".s_portfolio li").click(function() {
	$(".s_portfolio li").removeClass("active");
	$(this).addClass("active");
});

//popup
$(".popup").magnificPopup({type:"image"});
$(".popup_content").magnificPopup({});


//give id loop
$('.portfolio_item').each(function(i) {
	$(this).find(".port_item_cont").children("a").attr("href", "#portfolio_" + i);
	$(this).find(".port_descr").attr("id", "portfolio_" + i);
});

//scroll to id
$(".top_mnu ul a").mPageScroll2id();


//animation
$(".top_text h1").animated("fadeInDown", "fadeOutUp");
$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

$(".animation_1").animated("flipInY", "flipOutY");
$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
$(".animation_3").animated("fadeInRight", "fadeOutRight");

$(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
$(".right .resume_item").animated("fadeInRight", "fadeOutRight");


//height detected
	function heightDetect() {
		$(".main_head").css("height", $(window).height())
	};
	heightDetect();

$(window).resize(function() {
	heightDetect();
});


//click menu
$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
}).append("<span>");


//close or open menu
$(".toggle_mnu").click(function() {
if($(".top_mnu").is(":visible")) {
	$(".sandwich").removeClass("active")
	$(".top_text").removeClass("h_opacity")
	$(".top_mnu").fadeOut(600);
	$(".top_mnu ul a").removeClass('animated fadeInUp')
} else {
	$(".sandwich").addClass("active")
	$(".top_text").addClass("h_opacity")
	$(".top_mnu").fadeIn(600);
	$(".top_mnu ul a").addClass('animated fadeInUp')
}
});



/*//toggle menu
$(".toggle_mnu, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
}); */



//validation mnu
//$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});