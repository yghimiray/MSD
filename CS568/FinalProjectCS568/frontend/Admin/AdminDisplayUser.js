import React, { Component } from 'react'


export default class AdminDisplayUser extends Component {
    render() {
        return (
            <div>
                {/* ID:{this.props.id} */}
                Name:{this.props.name}
                Email:{this.props.email}
                Type:{this.props.type}
                Active:{this.props.active}
                <button onClick={this.props.changeStatus}>Activate/Deactivate</button>
                <button onClick={this.props.resetPassword}>Reset Password</button>
            </div>
        )
    }
}
