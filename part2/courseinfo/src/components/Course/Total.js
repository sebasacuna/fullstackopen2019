import React from 'react';

const Total = (props) => {
    
	let total = 0;

	/*total = props.parts.reduce( (sum, b) =>{ 
		return sum + b.exercises;
	},0);*/

	total = props.parts.reduce( (sum,actual) => sum + actual.exercises, 0)

    return(
    <>
    	<h3 style={{fontWeight:'bold'}}>Total of exercises {total}</h3>
    </>)
}

export default Total;