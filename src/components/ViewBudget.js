import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
		  <span className="view-budget-span">Budget: ₹{props.budget}</span>
		  <button
			type="button"
			className="edit-button"
			onClick={props.handleEditClick}
		  >
			Edit
		  </button>
		</>
	  );
	  
};

export default ViewBudget;