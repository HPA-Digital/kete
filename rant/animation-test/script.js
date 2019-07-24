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

	document.getElementById("content").className += "fadeOut"

	var noChildren = document.getElementById("animation-container").childNodes.length - 1;

	let count = 0;

	let interval = setInterval(() => {

		document.querySelector(`#animation-container > img:nth-child(${noChildren-count})`).style.display = 'none';

		count++;

		console.log(count);
		//We stop on the last frame
		if(count >= noChildren - 1){
			clearInterval(interval);
		}

	}, 100);

}

function getAvatarImage(){
	var url = new URL(window.location.href);

	var avatar = url.searchParams.get("avatar");

	var avatar_image = new Image();
	avatar_image.id = "avatar-image";
	avatar_image.src = `./img/avatars/${avatar || "KUINI_AVATAR_1"}.jpg`;
	return avatar_image;
}

var avatar_image = getAvatarImage();
var images = preloadImg(generateArray('./img/animation/'));;

window.onload = () => {

	document.getElementById("avatar-container").appendChild(avatar_image);

	var animation_container = document.getElementById("animation-container");

	images.reverse().forEach(img => {
		console.log(img);
		animation_container.appendChild(img);
	})

	// document.querySelector("#submit-button > button[type='submit']").addEventListener("click", swapImages)
}




