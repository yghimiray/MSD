import React, { Component } from 'react'

export default class PostOne extends Component {
    render() {
        return (
            <div>
                PID:{this.props.PID}
                Head:{this.props.head}
                Description:{this.props.description}

            </div>
        )
    }
}
