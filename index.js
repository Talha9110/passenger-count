let counter = document.querySelector("#count");
let saved = document.querySelector("#saved");

let count = 0;

function increment() {
	count += 1;
	counter.textContent = count;
}

function save() {
	let countStr = count + " - ";
	saved.textContent += countStr;
	counter.textContent = 0;
	count = 0;
}

// innerText does not display hidden elements such as spacing while textContent does
