import React from 'react';

const Total = (props) => {
    
    let total = 0;

    props.parts.map((value, index) => (total = total + value.exercises));

    return(
    <>
        <p>Number of exercises total {total}</p>
    </>)
}

export default Total;