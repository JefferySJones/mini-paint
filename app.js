$(document).ready(function () {

    var color = '#FFFFFF'; //default color white

    var undoArr = [];

    //store a limited history in the undoArr
    function logHistory(that) {
        if (that.css('background-color') !== color) {
            if (undoArr.length > 40) {
                undoArr.shift();
            }
            var arr = [];
            arr.push(that);
            arr.push(that.css('background-color'));
            undoArr.push(arr);
        }
    }

    var drawing = false;

    //log history and color
    function draw(that) {
        that.css('background-color', color);
    }

    //color on click
    $('.box').on('click', function () {
        logHistory($(this));
        draw($(this));
    });

    //color on click drag
    $('.box').on('mouseover', function () {
        if (drawing) {
            logHistory($(this));
            draw($(this));
        }
    });

    $('.box').on('mousedown', function () {
        drawing = true;
    });

    //turn off coloring
    $('.box').on('mouseup', function () {
        drawing = false;
    });

    //dblclick erase *note: behaves strange with history
    $('.box').on('dblclick', function () {
        $(this).css('background-color', '#000000');
    });

    //undo button
    $('#undo').on('click', function () {
        if (undoArr.length) {
            var element = undoArr[undoArr.length - 1][0];
            var elementLastColor = undoArr[undoArr.length - 1][1].toString();
            $(element).css('background-color', elementLastColor);
            undoArr.pop();
        } else {
            console.log('NOTHING TO UNDO');
        }
    });

    //reset button
    $('#reset').on('click', function () {
        $('.box').css('background-color', '#000000');
        undoArr = [];
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
