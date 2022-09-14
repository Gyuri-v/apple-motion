// 
const colors = (function () {
	const colors = document.querySelector('.content-colors');
	const colorsGallery = colors.querySelector('.gallery');
	const colorsChipArea = colors.querySelector('.colorchip-area');
	const colorChipColors = colors.querySelectorAll(".color-item");
	const colorChipCurrent = colors.querySelector(".current-colorchip");
	const colorInputs = colors.querySelectorAll("input");
	
	let colorTimeout = 0;
	let currentColorItem = null;
	let currentColorInput = null;
	let currentColorValue = null;
	let currentColorName = '';
	let previousColorValue = '';

	const init = function () {

		if ( colors.querySelector('input:checked') == null ){
			colorInputs[0].checked = true;
		}

		onChange();
		
		colorInputs.forEach(function (item) {
			item.addEventListener('click', function (e) {
				onChange();
			})
		});
	}

	const onChange = function () {
		previousColorValue = currentColorValue;
		currentColorInput = colors.querySelector('input:checked');
		currentColorItem = colors.querySelector(`.color-item[data-color-name="${currentColorInput.value}"]`);
		currentColorValue = currentColorInput.value;
		currentColorName = currentColorItem.innerText;

		colorsGallery.dataset.currentName = currentColorValue;
		colorsGallery.dataset.previousName = previousColorValue;
		colorChipCurrent.innerText = currentColorName;

		colorsGallery.dataset.animState = 'prepare';
		setTimeout(function () {
			colorsGallery.dataset.animState = 'animate';
		}, 100)

		
	}

	init();
	
})();




