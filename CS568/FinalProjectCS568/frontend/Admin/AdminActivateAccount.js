import React, { Component } from 'react'

export default class AdminActivateAccount extends Component {

    homepage = () => {
        this.props.history.push('/admin-homepage')
    }

    render() {
        return (
            <div>
                 <button onClick={() => { this.homepage() }}>Your Homepage </button>
                <h2> Account Activation Page</h2>
            </div>
        )
    }
}
