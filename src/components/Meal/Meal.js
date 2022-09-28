import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meal.css';

const Meal = (props) => {
    // console.log(props);
    const { handleAddToCart, meal } = props;
    const { strMealThumb, strMeal, strCategory, strInstructions } = meal;
    // console.log(meal);
    return (
        <div className='meals-container'>
            <img src={strMealThumb} alt="" />
            <div className='meals-details'>
                <h2>{strMeal}</h2>
                <h3>Category: {strCategory}</h3>
                <p>Instructions: {strInstructions.slice(0, 210) + '...'}</p>
            </div>
            <button onClick={() => handleAddToCart(meal)} className='btn-select'>
                <p style={{ marginRight: '10px' }}>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Meal;