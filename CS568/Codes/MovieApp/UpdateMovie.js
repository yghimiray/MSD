function UpdateMovie(props) {
    return (
        <div>
            Name: <input
                type='text'
                onChange={props.updateMovieNameChanged}
                value={props.name}
            />
            <input type='button' value='Apply' />
        </div>
    )
}

export function Test(props) {
    return (
        <div>
            {props.name}
            {props.children}
        </div>
    )
}

export default UpdateMovie;