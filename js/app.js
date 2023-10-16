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

	if ($('.circle_box').length) {
		$('.circle_bloks').slideUp(0)
		$('.provider_select').click(function(){
			$('.circle_bloks').slideToggle(300)
		})

		$('.circle_box').each(function(index,el){
			$(el).click(function(){
				$('.circle_box').not($(el)).removeClass('active')
				$(el).toggleClass('active')
			})
		})
	}	
	if ($('.checkbox_in').length) {
		$('.checkbox_in').each(function(index,el){
			$(el).click(function(){
				$('.checkbox_in').not($(el)).removeClass('active')
				$(el).toggleClass('active')
			})
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
	
	if ($('.account .account_link1')){

		$('.account .account_link1').click(function(e){
			e.preventDefault()
			$('.sign_in').addClass('active')
			$('.bg_sign').addClass('active')
		})
		$('.sign_in .close_btn').click(function(){
			$('.sign_in').removeClass('active')
			$('.bg_sign').removeClass('active')
		})

		$('.account .account_link2').click(function(e){
			e.preventDefault()
			$('.sign_up').addClass('active')
			$('.bg_sign').addClass('active')
		})
		$('.sign_up .close_btn').click(function(){
			$('.sign_up').removeClass('active')
			$('.bg_sign').removeClass('active')
		})
	}
	
});