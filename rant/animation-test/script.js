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
	console.log("A")

	document.getElementById("animation-container").classList.add("animate");

	// document.querySelectorAll("animation-container > img").forEach(img => {
	// 	img.classList.add("animate");
	// })

	setTimeout(() => {
		document.getElementById("content").classList.add("fadeOut");
	}, 1000)


	console.log("B");
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

	images.reverse().forEach((img, i) => {
		console.log(img);
		img.style.animationDelay = `${(images.length-i)/5}s`;
		img.style.zIndex = i-images.length;
		animation_container.appendChild(img);
	})

	document.querySelector("#submit-button > button[type='submit']").addEventListener("click", swapImages)
}




