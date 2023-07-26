import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    setName('');
    setCost('');
  };

  return (
    <form onSubmit={onSubmit} className="expense-form">
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="number"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <button type="submit" className="save-button">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
