function test() {
	//console.log('test');
	//$('#container').addClass('magictime vanishOut');

	// setTimeout(() => {
	// 	$('#rant').val('');
	// }, 500);

	// $('#fire').css({
	// 	top: `${-$('img.fire').height()}px`
	// })

	$('#fire').addClass('top');



	setTimeout(() => {
		MessengerExtensions.requestCloseBrowser(function success() {
			// webview closed
		}, function error(err) {
			console.error(err);
		});
	}, 2000)


}

$(document).ready(() => {
	let params = (new URL(document.location)).searchParams;
	let default_text = params.get('name') ? `Hey ${params.get('name')}, how is it going?` : 'How is it going?';
	console.log('Text', default_text);
	$('#header').text(default_text);
})

// window.extAsyncInit = function () {
// 	alert("Loaded MSG SDK");

// 	MessengerExtensions.getUserID(function success(uids) {
// 	var psid = uids.psid; alert(psid);
// }, function error(err) {
// 	alert("Messenger Extension Error: " + err);
// });
};


var defaultPrevent=function(e){e.preventDefault();}
elem.addEventListener("touchstart", defaultPrevent);
elem.addEventListener("touchmove" , defaultPrevent);