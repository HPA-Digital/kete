function test() {

	$('#fire').addClass('top');

	setTimeout(() => {
		alert("clsoed");
		MessengerExtensions.requestCloseBrowser(function success() {
			// webview closed
		}, function error(err) {
			console.error(err);
		});
	}, 2000);
}

$(document).ready(() => {
	let params = (new URL(document.location)).searchParams;
	let default_text = params.get('name') ? `Hey ${params.get('name')}, how is it going?` : 'How is it going?';
	$('#header').text(default_text);
})

var defaultPrevent=function(e){e.preventDefault();}
elem.addEventListener("touchstart", defaultPrevent);
elem.addEventListener("touchmove" , defaultPrevent);