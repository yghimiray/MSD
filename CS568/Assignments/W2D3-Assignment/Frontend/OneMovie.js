import React, { Component } from 'react'

export default class OneMovie extends Component {
    render() {
        return (
            <div>
                Name:{this.props.name}
                Rating:{this.props.rating}
                <button onClick={this.props.showDetails} >Details</button>
                <button onClick={this.props.updateMovie} >Update</button>
                <button onClick={this.props.deleteMovie} >Delete</button>
            </div>
        )
    }
}
