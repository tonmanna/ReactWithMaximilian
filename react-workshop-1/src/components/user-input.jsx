import React,{} from 'react';
const UserInput = (props) =>{
    return (
        <div>
            <div>Current Username is : {props.currentUserName}</div>
            <input type="text" onChange={props.change}/>
        </div>
    );

    
}

export default UserInput;