import React, { useState } from "react";

function AddFoodForm({ modalFunct, newFoodFunct }) {
  const [inputValue, setInputValue] = useState('');
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFood((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newFoodFunct(newFood);

    let inputs = [...document.getElementsByTagName("input")]
    inputs.forEach(input => input.value = '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Name: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={handleInputChange}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Calories: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="number"
                name="calories"
                onChange={handleInputChange}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Image: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                name="image"
                onChange={handleInputChange}
              />
            </p>
          </div>
        </div>
      </div>
      <footer className="modal-card-foot">
        <button className="button" type="reset" onClick={() => modalFunct('')}>
          Cancel
        </button>
        <button
          className="button is-success"
          type="submit"
          onClick={() => modalFunct('')}
        >
          Save changes
        </button>
      </footer>
    </form>
  );
}

export default AddFoodForm;