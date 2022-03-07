//na stisknutí klávesy se zavolá funkce movingHunter
document.addEventListener("keydown", movingHunter);

//výška, šířka okna prohlížeče
let height = window.innerHeight;
let width = window.innerWidth;

let score = 0;

//výchozí pozice huntera
let x = (width/2)-35;
let y = (height/2)-32;

//napozicování huntera
let hunter = document.querySelector('#panacek');
hunter.style.top = y+'px';
hunter.style.left = x+'px';

//pohyb 20px
const movement = 20;

function movingHunter(event) {
	
	if(score===5){
		alert("Výhra");
		score=0;
		document.querySelector('#score').innerHTML = score;
	}
	
	//proměnná pro klávesu
	let key = event.key
	console.log(event.key) 

	if (key === "ArrowDown"){
		hunter.src = 'obrazky/panacek.png';
		if(y + movement + 64 < height){
			y = y + movement;
			hunter.style.top = y +'px';
		}
	}

	if (key === "ArrowUp"){
		hunter.src = 'obrazky/panacek-nahoru.png';
		if(y - movement > 0){
			y = y - movement;
			hunter.style.top = y +'px';
		}
	}

	if (key === "ArrowLeft"){
		hunter.src = 'obrazky/panacek-vlevo.png';
		if(x - movement > 0){
			x = x - movement;
			hunter.style.left = x +'px';
		}
	}

	if (key === "ArrowRight"){
		hunter.src = 'obrazky/panacek-vpravo.png';
		if((x + movement + 70) < width){
			x = x + movement;
			hunter.style.left = x +'px';
		}	
	}

	//proměnné pro audio
	let coinSound = document.querySelector('#zvukmince');
	let victorySound = document.querySelector('#zvukfanfara');
	
	//if (!( x + 70 < xCoin || xCoin + 36 < x || y + 64 < yCoin || yCoin + 36 < y)) {
	if (( x + 70 > xCoin && xCoin + 36 > x && y + 64 > yCoin && yCoin + 36 > y)) {
		movingCoin();
		score++;
		document.querySelector('#score').innerHTML = score; 

		if(score===5){
			victorySound.play();
		}else{
			coinSound.play();
		}
	}
}

//při načtení stránky se zavolá funkce movingCoin
window.addEventListener('load', movingCoin);

//výchozí pozice mince
let xCoin = 0;
let yCoin = 0;

function movingCoin(){
	
	let coin = document.querySelector('#mince');
	xCoin = Math.floor(Math.random() * width);
	yCoin = Math.floor(Math.random() * height);

	//omezení pohybu mince dolů a vpravo
	if(xCoin + 36 > width){
		xCoin = xCoin - 36;
	}

	if(yCoin + 36 > height){
		yCoin = yCoin - 36;
	}

	coin.style.left = xCoin +'px';
	coin.style.top = yCoin + 'px';
}