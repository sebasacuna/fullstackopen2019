import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const App = () => {

  /* only for testing*/
  
  const course = {
    name: 'Half Stack application development',
    parts:[
      {
      name: 'Fundamentals of React',
      exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name:'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header  course={course.name} />
      <Content parts={course.parts}/>
      <Total   parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))