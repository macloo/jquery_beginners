$(document).ready(function() {

// This file and all linked files copied from "JavaScript: Visual QuickStart 
// Guide, 8th Edition," chapter 15, for demonstration purposes 
// http://www.peachpit.com/store/javascript-visual-quickstart-guide-9780321772978

	$("tr").mouseover(function() {
		$(this).addClass("over");
	});

	$("tr").mouseout(function() {
		$(this).removeClass("over");
	});
	
	$("#theTable").tablesorter({
		sortList:[[1,0]],
		cssAsc: "sortUp",
		cssDesc: "sortDown",
		widgets: ["zebra"]
	});

});
