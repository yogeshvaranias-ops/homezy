console.log("Details JS Connected");


let property = JSON.parse(
localStorage.getItem("selectedProperty")
);


console.log(property);

if(property){


document.getElementById("propertyImage").src = 
property.image;



document.getElementById("propertyName").innerHTML =
property.name;



document.getElementById("propertyLocation").innerHTML =
"📍 " + property.location;



document.getElementById("propertyType").innerHTML =
"🏠 " + property.type;



document.getElementById("propertyPrice").innerHTML =
"💰 ₹" + property.price;

document.getElementById("ownerName").innerHTML =
"👤 Owner : " + (property.owner || "HomeRent Owner");


document.getElementById("ownerPhone").innerHTML =
"📞 Phone : " + (property.phone || "+91 98765 43210");



document.getElementById("mapFrame").src =

"https://maps.google.com/maps?q=" 
+ property.location 
+ "&output=embed";



}

else{


alert("No Property Selected");


window.location.href="properties.html";


}







function bookNow(){


alert(
"🏠 Booking started for " + property.name
);



window.location.href="properties.html";


}