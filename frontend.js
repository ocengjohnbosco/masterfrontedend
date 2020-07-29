function welcome(){
let username=document.getElementById('Username').value;
let userpassword=document.getElementById('Userpass').value;
if (username=="") {
	alert("Input Username");
}else if (userpassword=="") {
	alert("Input your password");
	}
	else{
		window.open("https://www.google.com");
	}
}