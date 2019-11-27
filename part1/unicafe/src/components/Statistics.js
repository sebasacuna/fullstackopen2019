import React from 'react'
import Statistic from './Statistic.js'


const Statistics = (props) =>{


   

    return(
        <>
        <h1>statistics</h1>
        <table>
            <tbody>
                <Statistic text="good" value={props.store.good}></Statistic>
                <Statistic text="neutral"  value={props.store.neutral}></Statistic>
                <Statistic text="bad"  value={props.store.bad}></Statistic>
                <Statistic text="all"  value={props.store.all}></Statistic>
                <Statistic text="average"  value={props.store.average}></Statistic>
                <Statistic text="positive" value={props.store.positive}></Statistic>
            </tbody>
        </table>
        </>
    )

}

export default Statistics;