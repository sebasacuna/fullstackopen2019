import React from 'react'


const Statistic = (props) => {

	return (
		<>
			<tr>
				<td>{props.text} </td>
				{	(props.text === 'positive')
					? <td>{Math.round(props.value)} %</td> 
					: <td>{Math.round(props.value)}</td>
				}
			</tr>
		</>
	)

}

export default Statistic;