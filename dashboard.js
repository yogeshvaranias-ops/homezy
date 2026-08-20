console.log("Dashboard JS Connected");



window.onload = function(){

loadUser();

loadWishlistCount();

loadBookings();

}





function loadUser(){


let user = 
JSON.parse(localStorage.getItem("userData"));



if(user){


document.getElementById("userName").innerHTML =
"Welcome, " + user.name;



document.getElementById("userEmail").innerHTML =
user.email;



}

else{


document.getElementById("userName").innerHTML =
"Guest User";


document.getElementById("userEmail").innerHTML =
"Please Login";


}



}








function loadWishlistCount(){


let wishlist =

JSON.parse(localStorage.getItem("wishlist")) || [];



document.getElementById("wishlistCount").innerHTML =

wishlist.length;


}







function logout(){


localStorage.removeItem("userData");


localStorage.removeItem("userEmail");



alert("👋 Logout Successfully");



window.location.href="login.html";


}


function loadBookings(){


let bookings =

JSON.parse(localStorage.getItem("bookings")) || [];



let list =

document.getElementById("bookingList");



if(bookings.length==0){


list.innerHTML =

"<p>No Bookings Yet</p>";


return;


}




list.innerHTML="";



bookings.forEach(function(item){



list.innerHTML += `


<div class="booking-item">


<h3>
🏠 ${item.property}
</h3>


<p>
👤 ${item.user}
</p>


<p>
📞 ${item.mobile}
</p>


<p>
📅 ${item.date}
</p>



</div>


`;



});


}