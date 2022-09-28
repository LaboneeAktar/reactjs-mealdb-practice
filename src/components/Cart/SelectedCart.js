import React from 'react';
import './SelectedCart.css'

const SelectedCart = ({ cart }) => {
    // console.log(cart);
    return (
        <div className='cart'>
            <h3>Selected Meals</h3>
            <h4>Selected Item: {cart.length}</h4>
            <h5>Meals Name</h5>
            <div style={{ listStyle: 'decimal' }}>
                {
                    cart.map(meal => <li style={{ padding: '10px' }}>{meal.strMeal}</li>)
                }
            </div>

        </div >
    );
};

export default SelectedCart;