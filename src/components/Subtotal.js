import React from 'react';

const Subtotal = ({subtotal, orderItems, clearCart}) => {
    console.log(subtotal)
    return (
        <div class="cart">
            <div class="subtotal">
                <p class="item-price">Subtotal: ${subtotal.toFixed(2)}</p>
            </div>
            <div class="subtotal">
                <button onClick={() => orderItems()} class="cart-button">Order</button>
                <button onClick={() => clearCart()} class="cart-button">Clear All</button>
            </div>
        </div>
    )
}

export default Subtotal;