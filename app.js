$(document).ready(function () {

	console.log('I\'m READY!');
	console.log('I\'m READY!');
	console.log('I\'m READY!');


	var colors = 'white green red blue yellow'; //used for removing classes
	var color = 'white'; //default color white

	var undoArr = [];

	function logHistory() {
		if (undoArr.length > 40) {
			undoArr.shift();
			console.log('YOUR HISTORY IS GETTING TOO LONG! BALETED!')
		}
		console.log('added pixel');
		var arr = [];
		arr.push($(this));
		arr.push($(this).css('background-color'));
		undoArr.push(arr);
		console.log(arr);

		draw();
	}
	
	//store a history in the undoArr
	$('.box').on('click', logHistory);

	var drawing = false;
	
	//color
	$('.box').on('mousedown', function () {
		drawing = true;
	});

	$('.box').on('mouseup', function () {
		drawing = false;
	});

	$('.box').on('click', function () {
		$(this).css('background-color', color);
	});

	function draw() {
		if (drawing) {
			//$(this).addClass(color);
			
			if ($(this).css('background-color') !== color) {
				if (undoArr.length > 40) {
					undoArr.shift();
					console.log('YOUR HISTORY IS GETTING TOO LONG! BALETED!')
				}
				console.log('added pixel');
				var arr = [];
				arr.push($(this));
				arr.push($(this).css('background-color'));
				undoArr.push(arr);
				console.log(arr);
			}
			
			$(this).css('background-color', color);
		}
	}

	$('.box').on('mouseover', draw);
	
	//dblclick erase
	$('.box').on('dblclick', function () {
		$(this).css('background-color', '#000000');
	});
	
	//undo button
	$('#undo').on('click', function () {
		if (undoArr.length) {
			var element = undoArr[undoArr.length - 1][0]; //Attempting to use the object itself instead of id
			var elementLastColor = undoArr[undoArr.length - 1][1].toString();
			console.log(element);
			console.log(elementLastColor);
			$(element).css('background-color', elementLastColor);
			undoArr.pop();
		} else {
			console.log('NOTHING TO UNDO');
		}
	});
	
	//reset button
	$('#reset').on('click', function () {
		//$('.box').removeClass(colors);
		$('.box').css('background-color', '#000000');
	});

	$('#red').on('click', function () {
		color = 'red';
	});

	$('#blue').on('click', function () {
		color = 'blue';
	});

	$('#green').on('click', function () {
		color = 'green';
	});

	$('#yellow').on('click', function () {
		color = 'yellow';
	});

	$('#white').on('click', function () {
		color = 'white';
	});
});