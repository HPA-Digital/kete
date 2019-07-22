function test() {

	$('body').append(`	<div id="fire" class="bottom">
	<img class="fire" src="./img/fire.png">
	<div class="fire">

	</div>
</div>`);

	let fire = $('#fire');

	setTimeout(() => {
		fire.addClass('top');
	}, 100);

	console.log(fire.css('top'));




	setTimeout(() => {
		MessengerExtensions.requestCloseBrowser(function success() {
			// webview closed
		}, function error(err) {
			console.error(err);
		});

		$('#container').css('background', '#000000');

	}, 2000);
}

$(document).ready(() => {
	let params = (new URL(document.location)).searchParams;
	let default_text = params.get('name') ? `Hey ${params.get('name')}, how is it going?` : 'How is it going?';
	$('#header').text(default_text);
})

// var defaultPrevent=function(e){e.preventDefault();}
// elem.addEventListener("touchstart", defaultPrevent);
// elem.addEventListener("touchmove" , defaultPrevent);