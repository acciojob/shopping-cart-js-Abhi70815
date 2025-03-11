//your code here
// Function to load cart items from Local Storage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = ''; // Clear the list before loading

    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItem(index);
        li.appendChild(removeButton);
        cartItemsList.appendChild(li);
    });
}

// Function to add an item to the cart
function addItem() {
    const itemInput = document.getElementById('item');
    const itemName = itemInput.value.trim();
    
    if (itemName) {
        const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        cartItems.push(itemName);
        localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
        itemInput.value = ''; // Clear input field
        loadCart(); // Reload the cart
    } else {
        alert('Please enter an item name.');
    }
}

// Function to remove an item from the cart
function removeItem(index) {
    const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    cartItems.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
    loadCart(); // Reload the cart
}

// Event listener for the "Add to Cart" button
document.getElementById('addItem').addEventListener('click', addItem);

// Load the cart items when the page loads
window.onload = loadCart;