console.log("Admin JS Connected");



window.onload = function(){


loadCounts();


loadAllBookings();


}







function loadCounts(){



// Users Count


let user =

localStorage.getItem("userData");



if(user){


document.getElementById("userCount").innerHTML = 1;


}

else{


document.getElementById("userCount").innerHTML = 0;


}





// Property Count


let properties =

JSON.parse(localStorage.getItem("properties")) || [];



document.getElementById("propertyCount").innerHTML =

properties.length;







// Booking Count


let bookings =

JSON.parse(localStorage.getItem("bookings")) || [];



document.getElementById("bookingCount").innerHTML =

bookings.length;



}









function loadAllBookings(){



let bookings =

JSON.parse(localStorage.getItem("bookings")) || [];



let list =

document.getElementById("allBookings");




if(bookings.length==0){


list.innerHTML =

"<p>No Bookings Found</p>";

return;


}




list.innerHTML="";





bookings.forEach(function(item){



list.innerHTML += `


<div class="booking-card">


<h3>
🏠 ${item.property}
</h3>


<p>
👤 User : ${item.user}
</p>


<p>
📞 Mobile : ${item.mobile}
</p>


<p>
📅 Date : ${item.date}
</p>


</div>


`;



});



}


function deleteAllBookings(){

    let bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];


    if(bookings.length === 0){

        alert("📭 No bookings available");

        return;

    }


    let confirmDelete =
    confirm(
        "⚠️ Are you sure you want to delete ALL bookings?"
    );


    if(!confirmDelete){

        return;

    }


    localStorage.removeItem("bookings");


    alert("🗑️ All bookings deleted successfully");


    displayBookings();

}