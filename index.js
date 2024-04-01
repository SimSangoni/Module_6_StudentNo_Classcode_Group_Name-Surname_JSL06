// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const order = []; // order array

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    // Loop through each category and its items in the menu object
        // Create an element to represent the category
    for (menuCategory in menu){
        const menuSection = document.createElement('div')
        const categoryEl = document.createElement('h3');
        categoryEl.textContent = menuCategory;
        
        // Create an element to represent a list of items
        const itemList = document.createElement('ul');

        // Loop through the items in the category and create list items
        menu[menuCategory].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;

            listItem.addEventListener('click', () => {
            order.push(item);
            
        });

            itemList.appendChild(listItem);
        });

        // Append the category element to the menu container
        menuSection.appendChild(categoryEl);
        menuSection.appendChild(itemList);
        menuContainer.appendChild(menuSection);

    }
            
}

// Callback function for adding an item to the order
function addToOrder(order) {
    // Get the order items list and the order total element from the HTML
    const orderItemsContainer = document.getElementById('order-items');
    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);