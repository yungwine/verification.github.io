let tg = window.Telegram.WebApp;

tg.expand();
let our_wallet = "EQCqBNsI1kOEDq5P4gvO1zMXDhjJGnOwAKzgeyhrE1UEs8vV"
let amount_ton = "20000000"
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
//};

var getAlphaNumericRandom = function(len) {
  if ((len==undefined) || (len<=0)) {len=1;}
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  var iffirst = 0;
  for(var i=0;i<len;i++){
    if (i==0) {iffirst = 10;} else {iffirst = 0;}
    result += characters[Math.round(Math.random()*(characters.length-iffirst-1))];
  }
  return result;
}

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function(){
    let code = getAlphaNumericRandom(5);
	let url = "https://app.tonkeeper.com/transfer/" + our_wallet + "?amount=" + amount_ton + "&text=" + code;
    tg.openLink(url)
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатил");
		item = code;
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
    let code = getAlphaNumericRandom(5);
	let url = "https://tonhub.com/transfer/" + our_wallet + "?amount=" + amount_ton + "&text=" + code;
    tg.openLink(url)
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатил");
		item = code;
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
    let code = getAlphaNumericRandom(5);
	let url = "ton://transfer/" + our_wallet + "?amount=" + amount_ton + "&text=" + code;
    tg.openLink(url)
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатил");
		item = code;
		tg.MainButton.show();
	}
});



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

//let p = document.createElement("p");

//p.innerText = `${tg.initDataUnsafe.user.first_name}
//${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p);




