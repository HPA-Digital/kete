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

	MessengerExtensions.requestCloseBrowser(function success() {
		// webview closed
	  }, function error(err) {
		console.error(err);
	  });

}

$(document).ready(() => {

	let params = (new URL(document.location)).searchParams;

	let default_text = params.get('name') ? `Hey ${params.get('name')}, how is it going?` : 'How is it going?';
	console.log('Text', default_text);
	$('#header').text(default_text);
})

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/messenger.Extensions.js";
	fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'Messenger'));