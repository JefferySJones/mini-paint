$(document).ready(function() {
	
	
	console.log('I\'m READY!');
	console.log('I\'m READY!');
	console.log('I\'m READY!');
	
	var colors = 'white green red blue yellow';
	var color = 'white';
	
	var undoArr = [];
	
	$(".box").each(function(i) {
    // Store an id with format "uniqueId_{index}" in a variable.
    var id = "uniqueId_" + i;
    // Give the ID to the div
    $(this).attr("id", id);
	});
	
	$('.box').on('click', function() {
		if(undoArr.length > 10) {
			undoArr.shift();
			console.log('YOUR HISTORY IS GETTING TOO LONG! BALETED!')
		}
		console.log('added pixel');
		var arr = [];
		arr.push($(this).attr('id'));
		arr.push($(this).attr('class'));
		undoArr.push(arr);
		console.log(arr);
	});
	
	$('.box').on('click', function() {
		$(this).addClass(color);
	});
	
	$('.box').on('dblclick', function() {
		$(this).removeClass(colors);
	});
	
	$('#undo').on('click', function() {
		if(undoArr.length) {
			var element = "#" + undoArr[undoArr.length - 1][0].toString();
			var elementLastColor = undoArr[undoArr.length - 1][1];
			console.log(element);
			console.log(elementLastColor);
			$(element).removeClass(colors);
			$(element).addClass(elementLastColor);
			undoArr.pop();
		} else {
			console.log('NOTHING TO UNDO');
		}
	});
	
	$('#reset').on('click', function() {
		$('.box').removeClass(colors);
	});
	
	$('#red').on('click', function() {
		$(this).removeClass(colors);
		color = 'red';
	});
	
	$('#blue').on('click', function() {
		$(this).removeClass(colors);
		color = 'blue';
	});
	
	$('#green').on('click', function() {
		$(this).removeClass(colors);
		color = 'green';
	});
	
	$('#yellow').on('click', function() {
		$(this).removeClass(colors);
		color = 'yellow';
	});
	
	$('#white').on('click', function() {
		$(this).removeClass(colors);
		color = 'white';
	});
});