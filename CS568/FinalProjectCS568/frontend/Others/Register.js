
import React from "react";

export default class Register extends React.Component {
    state = {
        user: {
            email: "",
            username: "",
            password: "",
            repassword: ""
        }
    }

    propertyChanged = (event) => {
        let copy = { ...this.state.user };
        copy[event.target.name] = event.target.value;
        this.setState({ user: copy })
    }
    registerFormSubmitHandler = (event) => {

    }

    render() {
        return (
            <div>
                <div className="register">

                    <div>If new user Please Register</div>
                    <span>{this.state.message} </span>
                    <form onSubmit={(event) => { this.registerFormSubmitHandler(event) }}>
                        <div>
                            <p>
                                Email: <input type="text" name={this.state.user.email} onChange={(event) => { this.propertyChanged(event) }} />
                            </p>
                            <p>
                                Username: <input type="text" name={this.state.user.username} onChange={(event) => { this.propertyChanged(event) }} />
                            </p>
                            <p>
                                Password: <input type="text" name={this.state.user.password} onChange={(event) => { this.propertyChanged(event) }} />
                            </p>
                            <p>
                                Re-enter Password: <input type="text" name={this.state.user.repassword} onChange={(event) => { this.propertyChanged(event) }} />
                            </p>
                            <p>
                                <input type='submit' value="Submit" />
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        )
    }

}