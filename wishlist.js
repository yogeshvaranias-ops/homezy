console.log("Wishlist JS Connected");


function displayWishlist(){

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    let list =
    document.getElementById("wishlistList");

    list.innerHTML = "";


    if(wishlist.length === 0){

        list.innerHTML = `

        <div class="empty-wishlist">

            <h2>💔 No Properties in Wishlist</h2>

            <p>Add your favourite property from the Properties page.</p>

            <a href="properties.html">
                🏠 Browse Properties
            </a>

        </div>

        `;

        return;
    }


    wishlist.forEach(function(item, index){

        list.innerHTML += `

        <div class="property-card">

            <img src="${item.image}">

            <div class="property-content">

                <h2>${item.name}</h2>

                <p>📍 ${item.location}</p>

                <p>💰 ₹${item.price}</p>

                <button onclick="removeWishlist(${index})">

                    ❌ Remove

                </button>

            </div>

        </div>

        `;

    });

}



function removeWishlist(index){

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.splice(index, 1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    displayWishlist();

    alert("❌ Removed from Wishlist");

}



window.onload = function(){

    displayWishlist();

};