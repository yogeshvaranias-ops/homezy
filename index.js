console.log("Login JS Connected");



function loginUser(){


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;




if(email=="" || password==""){


alert("⚠️ Please enter email and password");


return;


}




// Save user details

localStorage.setItem(
"userEmail",
email
);



alert("✅ Login Successful");



// Go to home page

window.location.href="dashboard.html";



}

console.log("Login JS Connected");


function loginUser(){


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



let user =

JSON.parse(localStorage.getItem("userData"));



if(!user){

alert("❌ Please Register First");

return;

}



if(email === user.email && password === user.password){


localStorage.setItem(
"isLogin",
"true"
);


alert("✅ Login Successful");


window.location.href="dashboard.html";


}

else{


alert("❌ Invalid Email or Password");


}



}