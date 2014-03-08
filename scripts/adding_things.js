$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------
// copied, modified from http://jsbin.com/ikehep/1/edit

// version 1: adding_things.html

$('#boxy1')
.before('<span> .before("before the matched element(s), outside") </span>')
.prepend('<span> .prepend("before the content inside the matched element(s)") </span>')
.append('<span> .append("after the content inside the matched element(s)") </span>')
.after('<span> .after("after the matched element(s), outside") </span>');

// version 2: adding_things2.html
// all the same things, written in different jQuery syntax

$('<span> ("after the content inside the matched element(s)").appendTo() </span>').appendTo($('#boxy2'));
$('<span> ("before the content inside the matched element(s)").prependTo() </span>').prependTo($('#boxy2'));
$('<span> ("before the matched element(s), outside").insertBefore() </span>').insertBefore($('#boxy2'));
$('<span> ("after the matched element(s), outside").insertAfter() </span>').insertAfter($('#boxy2'));

  
// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
