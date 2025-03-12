function onLoad() {
    let cartList = JSON.parse(localStorage.getItem('items')) || [];
    let productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Corrected from 'inneHTML' to 'innerHTML'

    cartList.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item;
        let button = document.createElement('button');
        button.textContent = 'Remove';
        button.onclick = () => {
            removeItem(index); // Call removeItem with the current index
        };
        li.appendChild(button);
        productList.appendChild(li);
    });
}

function addItem() {
    let itemInput = document.getElementById('itemInput');
    let cartItems = JSON.parse(localStorage.getItem('items')) || []; // Initialize if null
    cartItems.push(itemInput.value); // Add the new item to the cart
    localStorage.setItem('items', JSON.stringify(cartItems)); // Save updated cart to Local Storage
    itemInput.value = ''; // Clear the input field after adding
    onLoad(); // Refresh the displayed cart
}

function removeItem(id) {
    let cartList = JSON.parse(localStorage.getItem('items')) || []; // Initialize if null
    cartList.splice(id, 1); // Remove the item at the specified index
    localStorage.setItem('items', JSON.stringify(cartList)); // Update Local Storage
    onLoad(); // Refresh the displayed cart
}

// Set up the event listener for the "Add Item" button
const addItems = document.getElementById('addItem');
addItems.onclick = () => {
    addItem(); // Call addItem when the button is clicked
};

// Load the cart items when the page loads
window.onload = onLoad; // Correctly assign the function reference