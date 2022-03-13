//na stisknutí klávesy se zavolá funkce movingHunter
document.addEventListener("keydown", movingHunter);

//výška, šířka okna prohlížeče
let height = window.innerHeight;
let width = window.innerWidth;

let score = 0;

//výchozí pozice huntera
let hunter = document.querySelector('#panacek');
let hunterWidth = hunter.naturalWidth;
let hunterHeight = hunter.naturalHeight;
let x = (width/2)-(hunterWidth/2);
let y = (height/2)-(hunterHeight/2);

//napozicování huntera
hunter.style.top = y+'px';
hunter.style.left = x+'px';

//pohyb 20px
const movement = 20;

//funkce pro pohyb huntera
function movingHunter(event) {
	//proměnná pro klávesu
	let key = event.key
	console.log(event.key) 

	if (key === "ArrowDown"){
		hunter.src = 'obrazky/panacek.png';
		if(y + movement + hunterHeight < height){
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
		if((x + movement + hunterWidth) < width){
			x = x + movement;
			hunter.style.left = x +'px';
		}	
	}

	collision();
}

//při načtení stránky se zavolá funkce movingCoin
window.addEventListener('load', movingCoin);

//výchozí pozice mince
let xCoin = 0;
let yCoin = 0;

//funkce pro náhodný pohyb mince
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

//funkce pro kolizi
function collision(){
	//proměnné pro audio
	let coinSound = document.querySelector('#zvukmince');
	let victorySound = document.querySelector('#zvukfanfara');
	
	//if (!( x + hunterWidth < xCoin || xCoin + 36 < x || y + hunterHeight < yCoin || yCoin + 36 < y)) {
	if (( x + hunterWidth > xCoin && xCoin + 36 > x && y + hunterHeight > yCoin && yCoin + 36 > y)) {
		movingCoin();
		score++;
		document.querySelector('#score').innerHTML = score; 

		if(score===5){
			let overlay = document.querySelector('.overlay');
			overlay.style.display = 'block';
			victorySound.play();
		}else{
			coinSound.play();
		}
	}
}

//funkce pro začátek nové hry
function newGame (){
	let overlay = document.querySelector('.overlay');
	overlay.style.display = 'none';
	score=0;
	document.querySelector('#score').innerHTML = score;
	x = (width/2)-(hunterWidth/2);
	y = (height/2)-(hunterHeight/2);
	hunter.style.top = y+'px';
	hunter.style.left = x+'px';
	hunter.src = 'obrazky/panacek.png';
}

//funkce pro konec hry
function endGame(){
	alert('Jsi v pasti, tato hra nikdy nekončí!'); 
	newGame();
}

let musicPlay = 'hraje';

//fuknce pro zvukový podkres
function backgroundSound(){
	let music = document.querySelector('#hudba');
	let bgSound = document.querySelector('.backgroundSound');

	if (musicPlay === 'hraje'){
		musicPlay = 'nehraje';
		bgSound.src = 'obrazky/mute.png';
		music.pause();
	}
	else if (musicPlay === 'nehraje'){
		musicPlay = 'hraje';
		music.play();
		bgSound.src = 'obrazky/volume.png';
	}
}