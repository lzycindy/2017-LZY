var text_remarks = document.getElementById("remarks_text");
text_remarks.onclick = function(){
	text_remarks.value = "";
}
var c1 = document.getElementById("laba");
var ctx1 = c1.getContext("2d");
ctx1.beginPath();
ctx1.lineJoin = "round";
ctx1.moveTo(1,0);
ctx1.lineTo(23,17.5);
ctx1.lineTo(0,35);
ctx1.lineTo(1,0);
ctx1.stroke();
var c2 = document.getElementById("laba_left");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.moveTo(5,0);
ctx2.lineTo(16,8);
ctx2.stroke();
ctx2.beginPath();
ctx2.moveTo(1,17.5);
ctx2.lineTo(15,17.5);
ctx2.stroke();
ctx2.beginPath();
ctx2.moveTo(5,35);
ctx2.lineTo(15,26);
ctx2.stroke();
