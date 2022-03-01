// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

console.log(typeof window.innerWidth)
console.log(window.innerWidth + 20)

let height = window.innerHeight;
let width = window.innerWidth;
const movement = 20;

function movingHunter(event) {

	let key = event.key
	let panacek = document.querySelector('#panacek');
	

	if (key === "ArrowDown"){	
		panacek.src = 'obrazky/panacek.png';
		let moveDown = parseInt(window.getComputedStyle(panacek).top);

		if((moveDown + 64 + movement) > height){
			console.log('stop')
		}else{
			panacek.style.top = (moveDown + movement) +'px';
		}
	}

	if (key === "ArrowUp"){
		panacek.src = 'obrazky/panacek-nahoru.png';
		let moveUp = parseInt(window.getComputedStyle(panacek).top);
	
	//když by následující pohyb šel do záporu, tak mu nastavím výchozí pozici top=0

		if((moveUp - movement) < 0){
			panacek.style.top = '0px';
		}else{
			panacek.style.top = (moveUp - movement) +'px';
		}
	}

	if (key === "ArrowLeft"){
		panacek.src = 'obrazky/panacek-vlevo.png';
		let moveLeft = parseInt(window.getComputedStyle(panacek).left);

	//když by následující pohyb šel do záporu, tak mu nastavím výchozí pozici left=0

		if((moveLeft -movement) < 0){
			panacek.style.left = '0px';
		}else{
			panacek.style.left = (moveLeft - movement) +'px';
		}
	}
	
	if (key === "ArrowRight"){
		panacek.src = 'obrazky/panacek-vpravo.png';
		let moveRight = parseInt(window.getComputedStyle(panacek).left);
	

		if((moveRight + 70 + movement) > width){
			console.log('stop')
		}else{
			panacek.style.left = (moveRight + movement) +'px';
		}
	}
}

// na celem dokumentu se pri stisku jakekoliv klavesy zavola funkce movingHunter

document.addEventListener("keydown", movingHunter);


/*
let x = 0;
let y = 0;

function movingHunter(event) {

let key = event.key
let panacek = document.querySelector('#panacek');

	if (key === "ArrowDown"){
		x=x;
		y=y+30;
		panacek.style.top = (y +30) +'px';
	}

}

document.addEventListener("keydown", movingHunter);*/