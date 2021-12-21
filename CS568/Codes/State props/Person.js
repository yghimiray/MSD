import React from 'react'

// function Person(props){ 
//     return (
//         <div>
//             <p>{props.fname}</p>
//             <p>{props.lname}</p>
//         </div>
//     )
// }

 class Person extends React.Component {
    render() { 
        console.log(this.props)
        return (
            <div>
                <p>{this.props.fname}</p>
                <p>{this.props.lname}</p> 
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Person;
