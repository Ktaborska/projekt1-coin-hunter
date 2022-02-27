// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

function movingHunter(event) {



	let key = event.key
	let panacek = document.querySelector('#panacek');

	if (key === "ArrowDown"){	
		panacek.src = 'obrazky/panacek.png';
		let moveDown = parseInt(window.getComputedStyle(panacek).top);
		panacek.style.top = (moveDown + 20) +'px';
	}
	if (key === "ArrowUp"){
		panacek.src = 'obrazky/panacek-nahoru.png';
		let moveUp = parseInt(window.getComputedStyle(panacek).top);
		panacek.style.top = (moveUp - 20) +'px';
	}
	if (key === "ArrowLeft"){
		panacek.src = 'obrazky/panacek-vlevo.png';
		let moveLeft = parseInt(window.getComputedStyle(panacek).left);
		panacek.style.left = (moveLeft - 20) +'px';
	}
	if (key === "ArrowRight"){
		panacek.src = 'obrazky/panacek-vpravo.png';
		let moveRight = parseInt(window.getComputedStyle(panacek).left);
		panacek.style.left = (moveRight + 20) +'px';
	}

}

// na celem dokumentu se pri stisku jakekoliv klavesy zavola funkce movingHunter

document.addEventListener("keydown", movingHunter);

