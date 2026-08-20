console.log("Properties JS Connected");


let properties = [

{
name:"Luxury Apartment",
location:"Chennai",
type:"Apartment",
price:"15000",
image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
},

{
name:"Modern Villa",
location:"Coimbatore",
type:"Villa",
price:"25000",
image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
},

{
name:"Family House",
location:"Madurai",
type:"House",
price:"12000",
image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be"
}

];



// Owner Added Properties

let ownerProperties =
JSON.parse(localStorage.getItem("properties")) || [];



properties = properties.concat(ownerProperties);





function displayProperties(){


let list =
document.getElementById("propertyList");


list.innerHTML="";



properties.forEach(function(item){


list.innerHTML += `


<div class="property-card">


<img src="${item.image || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'}">



<h2>
${item.name}
</h2>


<p>
📍 ${item.location}
</p>


<p>
🏠 ${item.type}
</p>


<p>
💰 ₹${item.price}
</p>

<button onclick="viewDetails('${item.name}')">

👁 View Details

</button>


<button onclick="addWishlist('${item.name}','${item.location}','${item.price}')">

❤️ Wishlist

</button>



<button onclick="openBooking('${item.name}')">

🏠 Book Now

</button>



</div>


`;



});


}









function filterProperty(){


let location =

document.getElementById("location").value.toLowerCase();



let type =

document.getElementById("type").value;




let filtered = properties.filter(function(item){


return (

(item.location.toLowerCase().includes(location) || location=="")
&&
(item.type.includes(type) || type=="")

);


});





let list =
document.getElementById("propertyList");



list.innerHTML="";



filtered.forEach(function(item){



list.innerHTML += `


<div class="property-card">


<img src="${item.image || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'}">


<h2>
${item.name}
</h2>


<p>
📍 ${item.location}
</p>


<p>
🏠 ${item.type}
</p>


<p>
💰 ₹${item.price}
</p>

<button onclick="viewDetails('${item.name}')">

👁 View Details

</button>

<button onclick="addWishlist('${item.name}','${item.location}','${item.price}')">

❤️ Wishlist

</button>



<button onclick="openBooking('${item.name}')">

🏠 Book Now

</button>


</div>


`;



});



}







// Booking System


let selectedProperty="";



function openBooking(name){


selectedProperty=name;


document.getElementById("bookingBox").style.display="flex";


}





function closeBooking(){


document.getElementById("bookingBox").style.display="none";


}







function confirmBooking(){


let name =
document.getElementById("bookingName").value;



let mobile =
document.getElementById("bookingMobile").value;



let date =
document.getElementById("bookingDate").value;





if(name=="" || mobile=="" || date==""){


alert("⚠️ Please fill all details");


return;


}






let booking={


property:selectedProperty,

user:name,

mobile:mobile,

date:date


};






let bookings =

JSON.parse(localStorage.getItem("bookings")) || [];




bookings.push(booking);




localStorage.setItem(

"bookings",

JSON.stringify(bookings)

);





alert("✅ Booking Confirmed Successfully");



closeBooking();



}







window.onload=function(){

displayProperties();

}


function viewDetails(name){


let property = properties.find(function(item){


return item.name === name;


});



localStorage.setItem(

"selectedProperty",

JSON.stringify(property)

);



window.location.href="property-details.html";


}

function addWishlist(name, location, price, image){

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    let exists = wishlist.some(function(item){
        return item.name === name;
    });

    if(exists){

        alert("❤️ Already Added to Wishlist");
        return;

    }

    wishlist.push({

        name: name,
        location: location,
        price: price,
        image: image || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"

    });

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert("❤️ Added to Wishlist Successfully");

}