import React from 'react'
import './person.css'
// import Radium from 'radium'

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px',

    //     }
    // }; in the div line beside person, for radium to work you need to add style ={style}
    return (
    <div className="Person">
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};



// export default Radium(person);
export default person;