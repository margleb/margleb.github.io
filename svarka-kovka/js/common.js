$(function() {


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


//mouse icon click
$('.mouse-icon').click(function() {
	$("html, body").animate({
		scrollTop: $(".products").offset().top
	},800);
});


//tabs swither
	$('.main_content .col-lg-3').click(function(e) {

	if($(this).index() != ($(".preview:visible").index() - 2)) {

		$(".item-products").removeClass("active");
		$(this).find('.item-products').addClass("active");
		$(".preview").hide().eq($(this).index()).fadeIn(1000);

		};

		e.preventDefault();
	});

//close preview
	$('.preview .fa-times').click(function() {
		$('.preview').fadeOut(1000);
		$(".item-products").removeClass("active");
	});


//hover gallery
$(window).resize(function() {
	$('.hover_content').css('top', $(".gallery_item").height());
});

$('.gallery_item').hover(function() {
	$(this).find(".hover_content").css('top', $(this).height() / 2);
}, function() {
	$('.hover_content').css('top', $(this).height());
});


var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {

//animate number with blur
$({blurRadius: 5}).animate({blurRadius: 0}, {
	duration: 2000,
	easing: 'swing',
	step: function() {
		$(".lines").css({
			"-webkit-filter": "blur("+this.blurRadius+"px)",
			"filter": "blur("+this.blurRadius+"px)"
		});
	}
});
var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
$(".lines").each(function() {
	var tcount = $(this).data("count");
	$(this).animateNumber({ number: tcount,
		easing: 'easeInQuad',
		"font-size": "25px",
		numberStep: comma_separator_number_step},
		1000);
});
	this.destroy();
  }
})


//magnific popup slider
$('.gallery_item').magnificPopup({
	mainClass: 'mfp-zoom-in',
	type: 'image',
	tLoading: '',
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

//magnific popup form
$('.formactive').magnificPopup({
	type:'inline',
	mainClass: 'my-mfp-zoom-in',
	removalDelay: 300
});

//изменение текста
$("a[href='#callback']").click(function() {
	var DataText = $(this).data('text');
	$(".formpopup h3").text(DataText);
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



});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});