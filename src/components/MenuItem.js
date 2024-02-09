import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div class="item">
            <img 
                src={imageName}
                alt="15pc Meal for 2" 
                class="item-image"
            />
            <div class="item-text">
                <p class="item-name">{title}</p>
                <p class="item-description">{description}</p>
                <div class="item-row">
                    <p class="item-price">${price}</p>
                    <button class="item-button">Add</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
