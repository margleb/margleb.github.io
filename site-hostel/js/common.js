$(function() {

	//height detected
	function heightDetect() {
		$(".main_head").css("height", $(window).height())
	};
	heightDetect();

$(window).resize(function() {
	heightDetect();
});

//
$(".main_nmu ul li a[href ='#about']").mPageScroll2id();
$(".main_nmu ul li a[href ='#gallery']").mPageScroll2id();
$(".main_nmu ul li a[href ='#rules']").mPageScroll2id();
$(".main_nmu ul li a[href ='#contacts']").mPageScroll2id();

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

//klich mnu on tablet
$(".top_line .main_nmu ul li a").click(function() {
	if($(window).width() < 992) {
		$(".main_nmu").fadeOut(1000);
	$(".toggle-mnu").removeClass("on");
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


//scroll top
$("body").append('<div class="top"><i class="fa fa-angle-double-up">')

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

//scroll bottom
$(".mouse-icon").click(function() {
$("html, body").animate({
		scrollTop: $(".about").offset().top
	}, 800);
});


//magnific popup
$("a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

//magnific popup gallery
$(".item_gallery").magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
		enabled: true,
		},
	removalDelay: 300,
	callbacks: {
			beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
			$.magnificPopup.instance.next = function() {
			var self = this;
			self.wrap.removeClass('mfp-image-loaded');
			setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			}
			$.magnificPopup.instance.prev = function() {
			var self = this;
			self.wrap.removeClass('mfp-image-loaded');
			setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			}
		},
			imageLoadComplete: function() { 
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
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


//hidden-button
$(".video-js").click(function() {
	$(".vjs-big-play-button").hide();
});

//equalHeight
$(".item_rule").equalHeights();

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
