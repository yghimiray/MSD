import React from "react";

export default class Login extends React.Component {
    state = {
        user: {
            username: "",
            password: ""
        }
    }

    propertyChanged = (event) => {
        let copy = { ...this.state.user };
        copy[event.target.name] = event.target.value;
        this.setState({ user: copy })
    }

    render() {
        return (
            <div className="home">
                <div className='login'>
                    <div id="welcomeLine">WelCome to SignUP page</div>
                    <div>Please Enter Your Username and Password to login in the Farmers Online Market </div>
                    <div>
                        <p>
                            Username : <input type="text" name={this.state.user.username} onChange={(event) => { this.propertyChanged(event) }} />
                        </p>
                        <p>
                            Password : <input type="text" name={this.state.user.password} onChange={(event) => { this.propertyChanged(event) }} />
                        </p>
                        <p>
                            <button onClick={this.loginSubmitBtnHandler}>Login</button>
                        </p>
                    </div>
                </div>
                <hr />
                

            </div>
        )
    }
}