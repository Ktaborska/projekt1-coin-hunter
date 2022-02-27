// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

function movingHunter(event) {

	console.log(event)

	console.log(event.key)

	let key = event.key
	let panacek = document.querySelector('#panacek');

	if (key === "ArrowDown"){
		panacek.style.left = '25px';
	}
	if (key === "ArrowUp"){
		panacek.style.left = '25px';
	}
	if (key === "ArrowLeft"){
		panacek.style.left = '25px';
	}
	if (key === "ArrowRight"){
		panacek.style.left = '25px';
	}
}

// na celym dokumentu pri stisku jakekoliv klavsy se zavola moje funkce moviengHunter
document.addEventListener("keydown", movingHunter);

