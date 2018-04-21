import React from 'react'

const UserOutput = (props) =>{
    return(
        <div>
            <div><h3>Value1 : {props.val1}</h3></div>
            <div><h3>Value2 : {props.val2}</h3></div>
        </div>
    );
}

export default UserOutput;