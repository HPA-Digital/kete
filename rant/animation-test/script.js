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

	var container = document.getElementById("animation-container");

	container.appendChild(images[0])

	document.getElementById("content").className += "fadeOut"

	var triggerCount = 0;

	var interval = setInterval(() => {

		let element = document.getElementById("animation-image")

		triggerCount++;

		if (!element || triggerCount >= images.length) {
			clearInterval(interval);

			MessengerExtensions.requestCloseBrowser();

		} else {
			document.getElementById("animation-image").replaceWith(images[triggerCount]);
		}
	}, 100);
}

function getAvatarImage(){
	var url = new URL(window.location.href);

	var avatar = url.searchParams.get("avatar");

	var avatar_image = new Image();
	avatar_image.id = "avatar-image";
	avatar_image.src = `/img/avatars/${avatar || "KUINI_AVATAR_1"}.jpg`;
	return avatar_image;
}

var avatar_image = getAvatarImage();

window.onload = () => {

	document.getElementById("avatar-container").appendChild(avatar_image);

	document.querySelector("#submit-button > button[type='submit']").addEventListener("click", swapImages)
}




