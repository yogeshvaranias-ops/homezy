console.log("Owner JS Connected");



window.onload = function(){

displayOwnerProperties();

}






function addProperty(){


let name =
document.getElementById("propertyName").value;


let location =
document.getElementById("location").value;


let type =
document.getElementById("type").value;


let price =
document.getElementById("price").value;

let image =
document.getElementById("image").value;

let ownerName =
document.getElementById("ownerName").value;


let ownerPhone =
document.getElementById("ownerPhone").value;




if(name=="" || location=="" || price==""){


alert("⚠️ Fill all property details");


return;


}




let property = {

name:name,

location:location,

type:type,

price:price,

image:image,

owner:ownerName,

phone:ownerPhone

};




let properties =

JSON.parse(localStorage.getItem("properties")) || [];





properties.push(property);





localStorage.setItem(

"properties",

JSON.stringify(properties)

);





alert("🏠 Property Added Successfully");





displayOwnerProperties();





// clear input


document.getElementById("propertyName").value="";

document.getElementById("location").value="";

document.getElementById("price").value="";

document.getElementById("image").value="";

document.getElementById("ownerName").value="";

document.getElementById("ownerPhone").value="";


}









function displayOwnerProperties(){


let list =

document.getElementById("ownerProperties");



if(!list) return;




let properties =

JSON.parse(localStorage.getItem("properties")) || [];




list.innerHTML="";





properties.forEach(function(item){



list.innerHTML += `



<div class="property-item">


<h3>
${item.name}
</h3>


<p>
📍 ${item.location}
</p>


<p>
🏠 ${item.type}
</p>


<p>
💰 ₹${item.price}
</p>

<button onclick="deleteProperty('${item.name}')">

🗑 Delete

</button>


</div>


`;



});



}


function deleteProperty(name){


let properties = 
JSON.parse(localStorage.getItem("properties")) || [];



properties =
properties.filter(function(item){

return item.name !== name;

});



localStorage.setItem(
"properties",
JSON.stringify(properties)
);



alert("🗑 Property Deleted");


displayOwnerProperties();


}