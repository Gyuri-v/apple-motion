// 
const colors = (function () {
	const contentColors = document.querySelector('.content-colors');
	const colorsGallery = contentColors.querySelector('.gallery');
	const colorChipCurrent = contentColors.querySelector(".current-colorchip");
	const colorInputs = contentColors.querySelectorAll("input");
	
	let currentColorItem = null;
	let currentColorInput = null;
	let currentColorValue = null;
	let currentColorName = '';
	let currentColorIndex = 0; 
	let previousColorValue = '';
	let previousColorIndex = 0;
	let animationDirection = null;

	const init = function () {
		if ( contentColors.querySelector('input:checked') == null ){
			colorInputs[0].checked = true;
			currentColorValue = 0;
		} else {
			currentColorItem = document.querySelector('input:checked').parentNode;
			currentColorValue = indexInParent(currentColorItem);
		}

		colorInputs.forEach(function (item) {
			item.addEventListener('click', function (e) {
				onChange();
			})
		});
	}

	const onChange = function () {
		previousColorValue = currentColorValue;
		previousColorIndex = currentColorIndex;
		currentColorInput = contentColors.querySelector('input:checked');
		currentColorItem = contentColors.querySelector(`.color-item[data-color-name="${currentColorInput.value}"]`);
		currentColorValue = currentColorInput.value;
		currentColorName = currentColorItem.innerText;
		currentColorIndex = indexInParent(currentColorItem);
		animationDirection = currentColorIndex > previousColorIndex ? 'right' : 'left';

		colorsGallery.dataset.currentIndex = currentColorIndex;
		colorsGallery.dataset.currentName = currentColorValue;
		colorsGallery.dataset.previousIndex = previousColorIndex;
		colorsGallery.dataset.previousName = previousColorValue;
		colorsGallery.dataset.previousIndex = previousColorIndex;
		colorsGallery.dataset.direction = animationDirection;
		colorsGallery.dataset.animState = 'prepare';
		setTimeout(function () {
			colorsGallery.dataset.animState = 'animate';
		}, 100);
		setTimeout(function () {
			colorChipCurrent.innerText = currentColorName;
		}, 400);
	}

	init();
	onChange();
})();


function indexInParent(node) {
	var children = node.parentNode.childNodes;
	var num = 0;
	for (var i = 0; i < children.length; i++) {
		if (children[i] == node) return num;
		if (children[i].nodeType == 1) num++;
	}
	return -1;
}

