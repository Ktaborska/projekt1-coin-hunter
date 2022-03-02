
document.addEventListener("keydown", movingHunter);
let height = window.innerHeight;
let width = window.innerWidth;

let x = (width/2)-35;
let y = (height/2)-32;
document.querySelector('#panacek').style.top = y+'px';
document.querySelector('#panacek').style.left = x+'px';

const movement = 20;


function movingHunter(event) {

let key = event.key
let hunter = document.querySelector('#panacek');

	if (key === "ArrowDown"){
		hunter.src = 'obrazky/panacek.png';
		if(y+20+64 < height){
			y = y+20;
			hunter.style.top = y +'px';
		}
	}

	if (key === "ArrowUp"){
		hunter.src = 'obrazky/panacek-nahoru.png';
		if(y-20 < 0){
			hunter.style.top='0px'
		}else{
			y = y-20;
			hunter.style.top = y +'px';
			}
	}

	if (key === "ArrowLeft"){
		hunter.src = 'obrazky/panacek-vlevo.png';
		if(x-20 < 0){
			hunter.style.left='0px'
		}else{
			x = x-20;
			hunter.style.left = x +'px';
		}
	}

	if (key === "ArrowRight"){
		hunter.src = 'obrazky/panacek-vpravo.png';
		if((x+20+70) < width){
			x = x+20;
			hunter.style.left = x +'px';
		}	
	}

	if (!( x + 70 < xCoin || xCoin + 36 < x || y + 64 < yCoin || yCoin + 36 < y)) {
		movingCoin();
	}
}

let xCoin = 0;
let yCoin = 0;

function movingCoin(){
	
	let coin = document.querySelector('#mince');
	xCoin = Math.floor(Math.random() * width);
	yCoin = Math.floor(Math.random() * height);

	if(xCoin + 36 > width){
		xCoin = xCoin - 36;
	}

	if(yCoin + 36 > height){
		yCoin = yCoin - 36;
	}

	coin.style.left = xCoin +'px';
	coin.style.top = yCoin + 'px';
}

window.addEventListener('load', movingCoin);



