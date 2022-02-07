import React, { useState } from "react";

function FoodBox(props) {
  const { name, calories, image, quantity } = props;
  const [foodQuantity, setFoodQuantity] = useState(quantity? quantity : 1);

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="Food" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons quantityField">
            <div className="control">
              <input
                className="input"
                type="number"
                value={foodQuantity}
                name="quantity"
                onChange={(e) => setFoodQuantity(e.target.value)}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() =>
                  props.todaysFood({
                    name: name,
                    calories: foodQuantity * calories,
                    quantity: foodQuantity,
                    image: image,
                    theCal: calories
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;