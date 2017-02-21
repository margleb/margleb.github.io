$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//equal height
	$(".item_sect p").equalHeight();

	//mixi tup
	var mixer = mixitup('#gallery_grid');

	//add and remove class active
	$(".controls ul li").click(function() {
		$(".controls ul li").removeClass("active");
		$(this).addClass("active");
	});

	//parallax
	$('.pricelow').parallax();

	//magnific-popup
	$(".popup_content").magnificPopup({});

	//magnific-popup form
	$("a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});
	
	//magnific-popup promocod
	$("a[href='#promoСod']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

	//сkick next
$(".scroll").click(function() {
$("html, body").animate({
		scrollTop: $(".s-about").offset().top
	}, 800);
});

//add diffrents titles for popup
$("a[href='#callback']").click(function() {
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".formpopup h3").text(dataText);
	$(".formpopup [name=admin-data]").val(dataForm);
	});

//append top
$("body").append('<div class="top"><i class="fa fa-angle-double-up">');

//top
$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});

$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});


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

});
