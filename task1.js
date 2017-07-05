const MATRIX = [[1, 2, 3, 0, 0],
				[3, 4, 0, 1, 0],
				[2, 0, 0, 0, 8],
				[1, 1, 0, 1, 1],
				[7, 0, 3, 1, 2]];

const CANVAS_ELEMENT 	= "example";
const CANVAS_GRAPHICS 	= '2d';
const CANVAS_HEIGHT		= 480;
const CANVAS_WIDTH 		= 640;

const BORDER_COLOR	= '#B70A02';
const COLOR_BROWN   = "#AF5200";
const COLOR_RED 	= "red";
const COLOR_BLUE	= "blue";
const COLOR_GREEN	= "green";
const COLOR_YELLOW	= "yellow";
const COLOR_PURPLE	= "purple";

const FIRST_RECT = {
	x : 15,
	y : 15,
	height : 170,
	width : 170
};

const SECOND_RECT = {
	x : 18,
	y : 18,
	height : 164,
	width : 164
};


function customizeCanvas(canvas) {
	canvas.height = CANVAS_HEIGHT;
	canvas.width = CANVAS_WIDTH;
}

function getCanvas() {
	var canvas = document.getElementById(CANVAS_ELEMENT);
	customizeCanvas(canvas);
	return canvas;
}

function getContext(canvas) {
	return canvas.getContext(CANVAS_GRAPHICS);
}

function drawBorder(context) {
	context.strokeStyle = BORDER_COLOR;
	context.strokeRect(FIRST_RECT.x, FIRST_RECT.y, FIRST_RECT.height, FIRST_RECT.width);
	context.strokeRect(SECOND_RECT.x, SECOND_RECT.y, SECOND_RECT.height, SECOND_RECT.width);
}

function chooseColor(color_number) {
	switch (color_number) {
		case 1: 
			var color = COLOR_BROWN;
			break;
		case 2: 
			var color = COLOR_RED;
			break;
		case 3: 
			var color = COLOR_BLUE;
			break;
		case 4: 
			var color = COLOR_GREEN;
			break;
		case 7: 
			var color = COLOR_YELLOW;
			break;
		case 8: 
			var color = COLOR_PURPLE;
			break;
	}
	return color;
}

function getArrayCellRect(i, j) {
	var arrayCell = {
		x : 20 + i * 32,
		y : 20 + j * 32,
		height : 32,
		width : 32
	};
	return arrayCell;
}

function drawMatrix(context, matrix) {
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j]) {
				var color = chooseColor(matrix[i][j]);
				context.fillStyle = color;
				var arrayCellRect = getArrayCellRect(i, j);
				console.log(arrayCellRect, color);
				context.fillRect(arrayCellRect.x, arrayCellRect.y, arrayCellRect.height, arrayCellRect.width);
			}
		}
	}
}

function draw() {
	var canvas = getCanvas();
	var contex = getContext(canvas);
	drawBorder(contex);
	drawMatrix(contex, MATRIX);
}