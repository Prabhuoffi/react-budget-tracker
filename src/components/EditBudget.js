import React, { useState } from 'react';

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  return (
    <>
      <input
        required
        type="number"
        className="edit-budget-input"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="budget-button"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
