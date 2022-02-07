import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import { FoodBox, AddFoodBtn } from './components';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const [filterFood, setFilterFood] = useState(foodsArr);
  const [todaysFoodArr, setTodaysFoodArr] = useState([])

  const searchHandle = (e) => {
    const searchResults = foodsArr.filter((food) =>
      food.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterFood(searchResults);
  };

  const sumFoods = async (food) => {
    if(todaysFoodArr.length < 1) {
      setTodaysFoodArr([...todaysFoodArr, food])
    } else {
      let foundFood = todaysFoodArr.find((item) => item.name === food.name);
      if (foundFood) {
        let foodFilteredArr = todaysFoodArr.filter(
          (item) => item.name !== food.name
        );

        let totalQuantity = Number(foundFood.quantity) + Number(food.quantity);
        let totalCalories = Number(food.theCal) * Number(totalQuantity);
        let totalFood = {
          name: foundFood.name,
          quantity: totalQuantity,
          calories: totalCalories,
        };
        setTodaysFoodArr([totalFood, ...foodFilteredArr]);
      } else {
        setTodaysFoodArr([...todaysFoodArr, food]);
      }
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1 id="header">IronNutrition</h1>
        <AddFoodBtn
          newFoodFunct={(food) => setFilterFood([...filterFood, food])}
        />
      </div>
      <div className="search-bar">
        <input
          className="input is-primary"
          type="text"
          placeholder="Search for an item"
          name="search"
          onChange={searchHandle}
        />
      </div>
      <section>
        <div className="contentDiv">
          {filterFood.map((food, index) => (
            <FoodBox
              key={index}
              {...food}
              todaysFood={(food) => sumFoods(food)}
            />
          ))}
        </div>

        <div className="column content contentDiv">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            {todaysFoodArr.map((food, index) => (
              <li key={index}>
                {`${food.quantity} ${food.name} = ${food.calories} cal`}
                <a onClick={(e) => 
                setTodaysFoodArr(todaysFoodArr.filter(item => item.name !== food.name))}> x</a>
              </li>
            ))}
          </ul>
          <strong>
            Total: {todaysFoodArr.reduce((prev, cv) => prev + cv.calories, 0)}{' '}
            cal
          </strong>
        </div>
      </section>
    </div>
  );
}

export default App;