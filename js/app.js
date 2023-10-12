// const icon = document.querySelector("#icon");
// icon.onclick = () => {
// 	icon.classList.toggle("filled");
// };
// const heartButtons = document.querySelectorAll(".add-to-favorite");
// heartButtons.forEach((button) => {
// 	button.addEventListener("click", () => {
// 		button.classList.toggle("clicked");
// 	});
// });

$(document).ready(function(){
	if ($('.program_detail')) {
		$('.program_detail .cards_container_mobile .icon').click(function () {
			$('body').addClass('program_detail_active');
			$('.cards_container').addClass('active');
		})

		$('.cards_container .close').click(function () {
			$('body').removeClass('program_detail_active');
			$('.cards_container').removeClass('active');
		})
	}

	if ($('.banking_tab')) {
		$('.banking_tab .tab_head .tab_head_item').click(function () {
			$('.banking_tab .tab_head .tab_head_item').not($(this)).removeClass('active')
			$(this).addClass('active')
			let index = $(this).attr('data-index');
			$('.banking_tab .tab_content').not($('.tab_content_' + index)).removeClass('active');
			$('.banking_tab .tab_content_' + index).addClass('active');
		})

		$('.tab_content .card_list .card_list_item').click(function () {
			$('.tab_content .card_list .card_list_item').not($(this)).removeClass('active')
			$(this).addClass('active')
		})

		$('.tab_content .form_control_select').select2()

		let img = document.createElement('img');
		img.setAttribute('src', './images/dropdown_icon.svg');
		let icon = document.querySelector('.select2-selection--single .select2-selection__arrow');
		if (icon) {
			icon.appendChild(img);
		}

		$('.tab_content .open_modal').click(function () {
			$('.banking_tab .card_modal').removeClass('noActive');
			$('.banking_tab .card_modal').addClass('active');
		})

		$('.banking_tab .card_modal .modal_close').click(function () {
			$('.banking_tab .card_modal').removeClass('active');
			$('.banking_tab .card_modal').addClass('noActive');
		})
	}

	if ($('.help')) {
		$('.accordions .accordion .accordion_content').slideUp(0);

		$('.accordions .accordion').each(function (index, el) {
			let btn = $(el).find('.accordion_head');
			let accordion_body = $(el).find('.accordion_content');
			
			$(btn).click(function () {
				$('.accordions .accordion .accordion_head').not($(this)).removeClass('active')
				$(this).toggleClass('active')
				$('.accordions .accordion .accordion_content').not($(accordion_body)).slideUp();
				$(accordion_body).slideToggle();
			})
		})
	}

	$('.card_hover button').click(function(){
		$(this).find('svg').toggleClass('active')
	})

	$('.header_burger').click(function(){
		$('.burger_wrapper').toggleClass('active');
		$('body').toggleClass('hidden');
		$(this).toggleClass('active')
	})

	$('.account_icon, .account_down').click(function(){
		$('.account_burger').toggleClass('active');
		$('body').toggleClass('hidden2');
		$('.account_down').toggleClass('active');
		$('.account_person').toggleClass('active')
	})

	$('.provider_search input').on('focus',function(){
		$('.provider_search').toggleClass('active');
	})
	
	
});



// var parallaxElement = document.getElementsByClassName('thumbnail');
// var parallaxElement = document.querySelector('.thumbnail');

// // Scroll o'zgarishlarini kuzatish
// window.addEventListener('scroll', function() {
//     // Olingan scroll o'rtasida paytni aniqlash
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // Paytning kattalash koefitsiyentini o'zgartirib ketish
//     var scale = 1 + (scrollTop / 1000); // O'zgartirilishi kerak bo'lgan koefitsiyentni o'zingiz belgilang

//     // Elementni kattalashtirish
//     parallaxElement.style.transform = 'scale(' + scale + ')';
// });