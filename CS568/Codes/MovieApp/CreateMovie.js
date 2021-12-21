import React from "react";

function add (a,b){
    return a + b;
}


function CreateMovie(props) {
    return (
        <div>
            Name: <input
                type='text'
                value={props.name}
                onChange={props.nameChanged}
            />
            Rating : <input
                type='text'
                value={props.rating}
                onChange={props.ratingChanged}
            />
            <input
                type='button'
                value='Save Movie'
                onClick={props.onSave}
            />
        </div>
    )
}

export default CreateMovie;