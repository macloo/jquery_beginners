$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------


// exercise 1: add words in quotes in the empty () below
// save this, then reload HTML page
$("h1").text(); 


// exercise 2: add the class "prompter" to the button
// save HTML, then reload page -- and click the button
$('.prompter').on('click', function() {
	var userResponse = prompt("Type something:"); // normal JavaScript
	$("h1").text(userResponse);
});


// exercise 3: add class="item" to one h1 and also to one p 
// save HTML, then reload page
$(".item").append("<p>Hooray!</p>");


// exercise 4: add the ID "states" to the UL 
// save HTML, then reload page
$("#states li:odd").addClass("highlight");


// exercise 5: make a new button anywhere on the HTML page
// add class="change" to that button
// then save, reload HTML and click the button twice
$('.change').on('click', function() {
	var msg = "<div class='rounder'></div>"; // this is in the css
	$('.change').after(msg);
});


// exercise 6: photo tricks 
$('.big').hide();
var current = $('#pics').find('.big').first();
$(current).show().addClass('view');
$('#pics').before(current);

$('.thumb').on('click', function() {
	$(current).remove();
	current = $(this).prev(); // grabs the node before (this)
	$('#pics').before(current); // puts current before the #pics list
	$(current).show().addClass('view');
});



// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
