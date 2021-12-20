import React, { Component } from 'react'

export default class LimitedTextArea extends Component {
    render() {
        return (
            <div>
                 Maximum Text Length : {this.props.limit}
                Type Your Text Here :{this.props.text}
                Number of Characters :{this.props.count}
            </div>
        )
    }
}
