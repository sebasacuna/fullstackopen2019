import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/Header.js'
import Button from './components/Button.js'
import Statistics from './components/Statistics'


const App = () =>{

    const[store,setStore] = useState(
        {
            good: 0,
            neutral: 0,
            bad: 0,
            average: 0,
            positive: 0,
            all: 0,
        }
    )

    const handleGoodClick = () => {
        const newStatistics = { 
          ...store, 
          good: store.good + 1,
          average: (((store.good+1) + store.neutral + store.bad) / 3),
		  all:  (((store.good+1)+ store.neutral + store.bad) ),
		  positive:  (store.good+1)/((store.good+1)+ store.neutral + store.bad)  * 100
        }
        setStore(newStatistics)
      }

    const handleNeutralClick = () => {
        const newStatistics = { 
          ...store, 
          neutral: store.neutral + 1 ,
          average: ((store.good + (store.neutral+1) + store.bad) / 3),
		  all:  ((store.good + (store.neutral+1) + store.bad) ),
		  positive: (store.good)/(store.good+ (store.neutral+1) + store.bad)  * 100
        }
        setStore(newStatistics)
    }

    const handleBadClick = () => {
        const newStatistics = { 
          ...store, 
          bad: store.bad + 1 ,
          average: ((store.good + store.neutral + (store.bad+1)) / 3),
		  all:  ((store.good + store.neutral + (store.bad+1)) ),
		  positive: (store.good)/(store.good + store.neutral + (store.bad+1))  * 100
        }
        setStore(newStatistics)
    }

    return(
        <div>
            {store.size}
            <Header title="give feedback" />
            <Button name="good" handleClick={handleGoodClick}/>
            <Button name="neutral" handleClick={handleNeutralClick}/>
            <Button name="bad" handleClick={handleBadClick}/>
            <Statistics store={store}/>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));
