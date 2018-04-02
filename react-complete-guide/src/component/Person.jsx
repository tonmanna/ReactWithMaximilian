import React from 'react';
import './Person.css'
const person = (props) => {
    return (
        <div>
            <p className="Person" onClick={props.click}>I'm a {props.name}! and I am {props.age} year old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}/>
        </div>
    )
}
export default person;