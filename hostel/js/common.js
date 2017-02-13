$(function() {

	//height detected
	function heightDetect() {
		$(".main_head").css("height", $(window).height())
	};
	heightDetect();

$(window).resize(function() {
	heightDetect();
});


//toggle switcher
$(".toggle-mnu").click(function() {
if($(".main_nmu").is(":visible")) {
	$(this).removeClass("on");
	$(".main_nmu").fadeOut(1000);
} else {
	$(this).addClass("on");
	$(".main_nmu").fadeIn(1000);
}
});

//show mnu on resize
$(window).resize(function() {
	if($(this).width() > 992) {
		$(".main_nmu").show();
		$(".toggle-mnu").removeClass("on");
	} else {
		if($(".toggle-mnu").hasClass("on")) {
			$(".main_nmu").show();
		} else {
			$(".main_nmu").hide();
		}
	}
});

//give divs sect
i = 1
while(i < 4) {
$(".map").append("<a href='#' class='blocks sect_"+ i + "'><p class='text text_" + i + "'></p></a>");
i++;
}

//text_field sect
$(".text_1").text('8-ми месный общий номер');
$(".text_2").text('8-ми месный женский номер');
$(".text_3").text('8-ми местный мужской номер');


$(".sect_1").addClass("active");
$(".content-about + .preview").show();


//tabs swither
	$('.blocks').click(function(e) {
		$(".blocks").removeClass("active");
		$(this).addClass("active");
		$(".preview").hide().eq($(this).index() - 1).fadeIn(1000);
		e.preventDefault();
	});

//close preview
	$('.preview .fa').click(function() {
		$('.preview').fadeOut(1000);
		$(".blocks").removeClass("active");
	});



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
	

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
