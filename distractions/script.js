const min = 60000;

let index = 0;
let content = [
	'A',
	'B',
	'C'
]

$('#button').click(nextIdea);

console.log("Loaded Custom Scripts");

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",
        success: function(res) {
			content = res.data.lines;

			index = Math.floor(Math.random()*content.length);

			nextIdea();

			$('#bar').css('width', '100%')

			setTimeout(() => {
				$('#bar').css('background', 'limegreen')
			}, min*2)
		}
     });
});

function nextIdea(){

	$('#idea').text(content[index%content.length]);

	index++;
}