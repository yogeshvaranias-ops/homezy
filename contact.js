console.log("Contact JS Connected");



function sendMessage(){


let name =
document.querySelector(
".message-section input[type='text']"
).value;


let email =
document.querySelector(
".message-section input[type='email']"
).value;


let message =
document.querySelector(
".message-section textarea"
).value;



if(name=="" || email=="" || message==""){


alert("⚠️ Please fill all details");

return;

}




alert(
"✅ Message Sent Successfully!\n\nThank you "+name
);



// clear form

document.querySelector(
".message-section input[type='text']"
).value="";


document.querySelector(
".message-section input[type='email']"
).value="";


document.querySelector(
".message-section textarea"
).value="";



}