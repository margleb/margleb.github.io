$(function() {
	
	//equalheights
	$('.nametop').equalHeights();
	
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
	
});