import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [selected, setSelected] = useState(0)

  const [max, setMax] = useState(0)

  const points = [0, 0, 0, 0, 0, 0]

  const[pointsvotes,setPointsvotes] = useState(points)

 const modifyPointsVote = () => {
	let copy = [...pointsvotes]
	copy[selected] += 1
	selectMax(copy)    
	return copy
  }

  const selectMax = (copy) => {
    const indexOfMaxValue = copy.indexOf(Math.max.apply(Math, copy));
  	setMax(indexOfMaxValue)
  }

  
  const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  return (
    <>
      {anecdotes[selected]} {pointsvotes[selected]}
	  <p>
	  <button onClick={() => setPointsvotes(modifyPointsVote())}>Vote </button>
	  </p> 
	  <p>
	  <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote </button>
	  </p> 
	  <h1>Anecdote with most votes</h1>
	  <p>
	  {anecdotes[max]} has {pointsvotes[max]} votes
	  </p>
	</>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)