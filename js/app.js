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