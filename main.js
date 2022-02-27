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
		let moveDown = parseInt(window.getComputedStyle(panacek).top);
		panacek.style.top = (moveDown + 20) +'px';
	}
	if (key === "ArrowUp"){
		let moveUp = parseInt(window.getComputedStyle(panacek).top);
		panacek.style.top = (moveUp - 20) +'px';
	}
	if (key === "ArrowLeft"){
		let moveLeft = parseInt(window.getComputedStyle(panacek).left);
		panacek.style.left = (moveLeft - 20) +'px';
	}
	if (key === "ArrowRight"){
		let moveRight = parseInt(window.getComputedStyle(panacek).left);
		panacek.style.left = (moveRight + 20) +'px';
	}

}

// na celem dokumentu se pri stisku jakekoliv klavesy zavola funkce movingHunter

document.addEventListener("keydown", movingHunter);

