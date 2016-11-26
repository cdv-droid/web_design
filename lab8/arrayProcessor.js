function validateCell(cell) {
	if (!isNaN(parseFloat(cell.value)) && isFinite(cell.value)) {
		cell.style.border = "thin dashed #42f453";
		document.getElementById("error").innerHTML = " ";
		return true;
	} else {
		cell.style.border = "thin solid #ff622d";
		document.getElementById("error").innerHTML = "Element should be number!";
		return false;
	}
}

function sumOfNegatives(form) {   
	var cells = [];
	for (var i = form.children.length - 1; i >= 0; i--) {
		if (form.children[i].type === 'text') {
			cells.push(form.children[i]);
		}
	}
	var hasErrors = false;
	for (var i = cells.length - 1; i >= 0; i--) {
		if (!validateCell(cells[i])) {
			hasErrors = true;
			document.getElementById("error").innerHTML = "Data is invalid!";
			return 0;
		} else {
			document.getElementById("error").innerHTML = "";
		}
	}
	if (hasErrors) {
		return 0;
	}

	var sum = 0;
	for (var i = cells.length - 1; i >= 0; i--) {
		var current = parseFloat(cells[i].value);
		if (current < 0) {
			sum += current;
		}
	}
	document.getElementById("result").innerHTML = "Sum of negatives = " + sum;
}