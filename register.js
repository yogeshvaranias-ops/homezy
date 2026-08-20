console.log("Register JS Connected");


function registerUser(){


let name =

document.getElementById("name").value;



let email =

document.getElementById("email").value;



let password =

document.getElementById("password").value;





if(name=="" || email=="" || password==""){


alert("⚠️ Please fill all details");

return;


}




let user = {


name:name,

email:email,

password:password


};





localStorage.setItem(

"userData",

JSON.stringify(user)

);





alert("✅ Registration Successful");



window.location.href="login.html";


}