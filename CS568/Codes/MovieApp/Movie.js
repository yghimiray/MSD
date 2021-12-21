import React from 'react'

// class Movie extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>{this.props.movieName}</div>
//                 <div>{this.props.movieRating}</div>
//                 <div>{this.props.movieGenre}</div>
//             </div>
//         )
//     }
// }

function Movie(props) {
    
    return (
        <div>
            <div>{props.movieName}</div>

            <div>---</div>

            <div>{props.movieRating}</div>

            <div>---</div>

            <div>{props.movieGenre}</div>


            <input
                type='button'
                value='Delete'
                onClick={props.deleteMovieEventHandler}
            />

            {/* <input
                type='button'
                value='Add to Favorite'
                onClick={props.addFavorite}
            />

            <input
                type='button'
                value='Update'
                onClick={props.updateButtonClickEventhandler}
            /> */}
            <div>===</div>
        </div>
    )
}

export default Movie;