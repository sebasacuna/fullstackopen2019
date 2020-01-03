
import React from 'react';
import Part from './Part';


const Content = (props) =>(
    <div>
      { props.parts.map((value, index) => {
        return  <Part name={value.name} exercises={value.exercises} key={index} />
        })
      }
    </div>
)

export default Content;