// const icon = document.querySelector("#icon");
// icon.onclick = () => {
// 	icon.classList.toggle("filled");
// };
const heartButtons = document.querySelectorAll(".add-to-favorite");
heartButtons.forEach((button) => {
	button.addEventListener("click", () => {
		button.classList.toggle("clicked");
	});
});
