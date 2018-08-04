var judge = document.getElementsByClassName("judge");
var user_name = document.getElementById("User");
var pass_word = document.getElementById("Password");
var con_firm = document.getElementById("Confirm");
var e_mail = document.getElementById("Email");
var mo_bile = document.getElementById("Mobile");
var reg1 = /^[a-z0-9A-Z_-]{4,8}$/;
var reg2 =  /^[0-9a-zA-Z]{6,16}$/;
var reg3 =  /^[a-z0-9]\w+@[a-z0-9]{2,3}(\.[a-z]{2,3}){1,2}$/;
var reg4 = /^1[34578]\d{9}$/;
var key1 = 0;
var key2 = 0;
var key3 = 0;
var key4 = 0;
var key5 = 0;
var timer;
var timer1;
var timer2;
var timer3;
var timer4;
function change(n){
	judge[n].style.color = "green";
	judge[n].innerHTML = "√";
}
function userName(){
	if(reg1.test(user_name.value)){
		key1 = 1;
		change(0);
	}else{
		judge[0].style.color = "red";
		judge[0].innerHTML = "×";
	}
	//console.log(user_name.value,key1,reg1.test(user_name.value))
}
timer = setInterval(userName,100);
function passWord(){
	if(reg2.test(pass_word.value)){
		Key2 = 1;
		change(1);
	}else{
		judge[1].style.color = "red";
		judge[1].innerHTML = "×";
	}
}
timer1 = setInterval(passWord,100);
function conFirm(){
	if(reg2.test(con_firm.value) && con_firm.value == pass_word.value){
		Key3 = 1;
		change(2);
	}
	else{
		judge[2].style.color = "red";
		judge[2].innerHTML = "×";
	}
	console.log(key3,con_firm.value)
}
timer2 = setInterval(conFirm,100);
function eMail(){
	if(reg3.test(e_mail.value) && e_mail.value != ""){
		Key4 = 1;
		change(3);
	}else{
		judge[3].style.color = "red";
		judge[3].innerHTML = "×";
	}
}
timer3 = setInterval(eMail,100);
function moBile(){
	if(reg4.test(mo_bile.value) && mo_bile.value != ""){
		Key5 = 1;
		change(4);
	}else{
		judge[4].style.color = "red";
		judge[4].innerHTML = "×";
	}
}
timer4 = setInterval(moBile,100);