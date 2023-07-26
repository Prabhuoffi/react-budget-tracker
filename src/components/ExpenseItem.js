import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill">₹{props.cost}</span>
        <TiDelete onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
