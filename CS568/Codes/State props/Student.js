
import React from 'react';


// function Student(props) {
//     return (
//         <div>
//             <div>{props.name}</div>
//             <div>{props.age}</div>
//         </div>
//     )
// }

function Student(props) {
    return (
        <div>
            <div>{props.name}</div>
            <input
                type='text'
                onChange={props.changeName}
                value={props.name}
            />
            <div>{props.age}</div>
            <div>{props.lname}</div>
            <input
                type='button'
                value='Increment'
                onClick={props.makeOlder}
            />
        </div>
    )

}

export default Student;