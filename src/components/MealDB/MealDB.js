import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SelectedCart from '../Cart/SelectedCart';
import Meal from '../Meal/Meal';
import './MealDB.css';


const MealDB = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [search])


    const handleAddToCart = (meal) => {
        console.log(meal);

        if (cart.length >= 5) {
            alert("You Can't Add More than 5");
            return;
        }
        else {

            const exists = cart.find(m => m.idMeal === meal.idMeal);
            if (exists) {
                alert('Already Exists')
            }
            else {
                const newCart = [...cart, meal];
                setCart(newCart);
            }
        }

    }

    return (
        <div className='container'>
            <div>
                <h1>Welcome to MealDB !!</h1>
                <input onChange={(e) => setSearch(e.target.value)} type="search" className='search-field' />
                <button className='btn-search'>Search</button>
                <h2>Available Meal: {meals.length}</h2>
                <div className='meal-container'>
                    {
                        meals.map(meal => <Meal
                            meal={meal}
                            key={meal.idMeal}
                            handleAddToCart={handleAddToCart}
                        ></Meal>)
                    }
                </div>
            </div>
            <div className='meal-lists'>
                <SelectedCart
                    cart={cart}
                ></SelectedCart>
            </div>
        </div>
    );
};

export default MealDB;