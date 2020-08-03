//cart & media modal
$(function () {
	$('.goods-cart').on('click', function () {
		$('.cart-modal').show();
	});
	var embed = $('#player');
	$('.media-video a').on('click', function () {
		var path = $(this).attr('href');
		$('.media-modal .media-con').append(embed);
		$(path).show();
	});
	$('.modal-layer, .modal-close').on('click', function () {
		$('.modal').hide();
		$('.media-modal .media-con').empty();
	});
});