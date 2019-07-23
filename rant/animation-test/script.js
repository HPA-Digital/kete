console.log("Loaded Scripts")


function preloadImg(imgArray) {

	images = []

	imgArray.forEach((img, i) => {
		images[i] = new Image();
		images[i].src = imgArray[i];
		images[i].id = "animation-image"
	})

	return images;
}


function generateArray(root) {

	images = [];

	for (let i = 1; i < 21; i++) {
		images[i - 1] = root + "Capture_" + i + ".JPG"
	}

	return images;
}

function swapImages(e) {
	e.preventDefault();

	var images = preloadImg(generateArray('/img/animation/'));
	console.log(images);

	var container = document.getElementById("animation-container");
	container.appendChild(images[0])

	document.getElementById("input-form").className += "fadeOut"

	var triggerCount = 0;

	var interval = setInterval(() => {

		let element = document.getElementById("animation-image")

		triggerCount++;

		if (!element || triggerCount >= images.length) {
			clearInterval(interval);
		} else {

			console.log(triggerCount, images[triggerCount]);
			document.getElementById("animation-image").replaceWith(images[triggerCount]);

		}



	}, 100);
}


window.onload = () => {

	// images.shift();

	document.querySelector("#input-form > button[type='submit']").addEventListener("click", swapImages)


}
