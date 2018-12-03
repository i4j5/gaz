$(document).ready(()=>{

	let $items = $('.tabs__item')

	$items.each((index, el) => {
		let $el = $(el)
		$el.children('.tabs__title').click(function(event) {
			$el.toggleClass('tabs__item_active')

			let $progressBar = $el.children('.tabs__text').children('.progress-bar')
			let interest = $progressBar.data('interest')

			
			if ( $el.hasClass('tabs__item_active') ) {
				$progressBar.children('.progress-bar__pace').children('.progress-bar__interest').text('')
				$progressBar.children('.progress-bar__pace').width('0%')
				$el.children('.tabs__text').slideDown(500)
				setTimeout(() => {
					$progressBar.children('.progress-bar__pace').width(interest + '%')
					let n = 0
					let timerId = setInterval(() => {
						++n
						$progressBar.children('.progress-bar__pace').children('.progress-bar__interest').text(n + '%')
						// $progressBar.children('.progress-bar__pace').width(n + '%')
					}, 1000 / interest)

					setTimeout(() => {
						clearInterval(timerId)
					},1000)
				}, 500)
			} else {
				$el.children('.tabs__text').slideUp(500)
				setTimeout(() => {
					$progressBar.children('.progress-bar__pace').width('0%')
				}, 500)
			}
		});	
	})
})

$(document).ready(function(){
  $('.slider').bxSlider({
  	pager: true,
  	nextText: '',
  	prevText: '',
  });
});

$(window).on('load', e => {
	window.setTimeout(function() {
		$('.loader').removeClass('loader_active')
	}, 100);   
})