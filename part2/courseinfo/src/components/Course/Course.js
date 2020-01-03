
import React from 'react';
import Header from './Header/Header'
import Content from './Content/Content'
import Total from './Total'


const Course = (props) => {

	const rows = () => props.data.map( (raw, index) =>
		<div key={index}>
			<h1>{raw.name}</h1>
			<Content parts={raw.parts}/>
			<Total parts={raw.parts} />
		</div>
	)
	
	return (
		<div>
			<Header/>
			{rows()}
		</div>
	)
}

export default Course;