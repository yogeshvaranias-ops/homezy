console.log("Login JS Connected");

function loginUser(){

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Empty field validation
    if(email === "" || password === ""){
        alert("⚠️ Please enter email and password");
        return;
    }

    // Get registered user
    let user = JSON.parse(localStorage.getItem("userData"));

    // Check registration
    if(!user){
        alert("❌ Please Register First");
        return;
    }

    // Check login details
    if(email === user.email && password === user.password){

        localStorage.setItem("isLogin", "true");
        localStorage.setItem("userEmail", email);

        window.location.href = "dashboard.html";

    } else {

        alert("❌ Invalid Email or Password");
    }
}
