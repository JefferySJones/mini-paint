$(document).ready(function () {
	
	console.log('I\'m READY!');
	console.log('I\'m READY!');
	console.log('I\'m READY!');


	var colors = 'white green red blue yellow'; //used for removing classes
	var color = 'white'; //default color white

	var undoArr = [];
	
	//store a history in the undoArr
	$('.box').on('click', function () {
		if (undoArr.length > 10) {
			undoArr.shift();
			console.log('YOUR HISTORY IS GETTING TOO LONG! BALETED!')
		}
		console.log('added pixel');
		var arr = [];
		arr.push(this);
		arr.push($(this).attr('class'));
		undoArr.push(arr);
		console.log(arr);
	});
	
	//color
	$('.box').on('click', function () {
		$(this).addClass(color);
	});
	
	//dblclick erase
	$('.box').on('dblclick', function () {
		$(this).removeClass(colors);
	});
	
	//undo button
	$('#undo').on('click', function () {
		if (undoArr.length) {
			var element = undoArr[undoArr.length -1][0]; //Attempting to use the object itself instead of id
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
	
	//reset button
	$('#reset').on('click', function () {
		$('.box').removeClass(colors);
	});

	$('#red').on('click', function () {
		$(this).removeClass(colors);
		color = 'red';
	});

	$('#blue').on('click', function () {
		$(this).removeClass(colors);
		color = 'blue';
	});

	$('#green').on('click', function () {
		$(this).removeClass(colors);
		color = 'green';
	});

	$('#yellow').on('click', function () {
		$(this).removeClass(colors);
		color = 'yellow';
	});

	$('#white').on('click', function () {
		$(this).removeClass(colors);
		color = 'white';
	});
});