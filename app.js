let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

//function() {
//    function str_rand() {
//        var result       = '';
//        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
//        var max_position = words.length - 1;
//            for( i = 0; i < 5; ++i ) {
//                position = Math.floor ( Math.random() * max_position );
//                result = result + words.substring(position, position + 1);
//            }
//        return result;
//    }

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function(){
//	let url = "";
    tg.openLink("https://www.google.com")
//	window.location.href = "https://www.google.com";
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатил");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатил");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатил");
		item = "3";
		tg.MainButton.show();
	}
});



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p);




