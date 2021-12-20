import React, { Component } from 'react'

export default class AdminDeactivateAccount extends Component {


    homepage = () => {
        this.props.history.push('/admin-homepage')
    }

    
    render() {
        return (
            <div>
                 <button onClick={() => { this.homepage() }}>Your Homepage </button>
                <h2> Account Deactivation Page </h2>
            </div>
        )
    }
}
