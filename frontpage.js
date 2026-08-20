console.log("Index JS Connected");


function searchHome(){


let location =
document.getElementById("location").value;


let type =
document.getElementById("type").value;



if(location==""){

alert("Please enter location");

return;

}



window.location.href =
"properties.html?location="
+location+
"&type="
+type;


}

function openLogin(){

document.getElementById("loginBox").style.display="flex";

}



function closeLogin(){

document.getElementById("loginBox").style.display="none";

}




function loginUser(){


let email =
document.getElementById("loginEmail").value;



if(email==""){

alert("Enter Email");

return;

}



localStorage.setItem(
"user",
email
);



alert("✅ Login Successful");


closeLogin();


}