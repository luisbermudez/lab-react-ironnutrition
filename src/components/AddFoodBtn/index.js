import React, { useState } from "react";
import './AddFoodBtnStyle.css';
import AddFoodForm from "../AddFoodForm";

function AddFoodBtn({ newFoodFunct }) {
  const [modalStatus, setModalStatus] = useState('');

  const modalStatusFunct = (status) => {
    setModalStatus(status);
  };

  const addNewFood = (newFood) => {
    newFoodFunct(newFood);
  };

  return (
    <div>
      <button
        className="button addFoodBtn"
        onClick={() => modalStatusFunct('is-active')}
      >
        Add Food
      </button>

      <div className={'modal ' + modalStatus}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add New Food</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setModalStatus('')}
            ></button>
          </header>
          <section className="modal-card-body">
            <AddFoodForm
              modalFunct={modalStatusFunct}
              newFoodFunct={addNewFood}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default AddFoodBtn;