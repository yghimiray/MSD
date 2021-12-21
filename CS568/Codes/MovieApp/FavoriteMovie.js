function FavoriteMovie(props) {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.rating}</div>
            <div>{props.genre}</div>
            <input type='button' value ='Delete' />
        </div>
    )
}

export default FavoriteMovie