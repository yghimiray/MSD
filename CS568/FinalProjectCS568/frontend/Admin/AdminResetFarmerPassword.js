import React, { Component } from 'react'
import axios from 'axios'


export default class AdminResetFarmerPassword extends Component {

    state={
        message:'',
        thisFarmer: {},
        firstPassword:'',
        secondPassword:''
    }


    componentDidMount() {
        const username = this.props.match.params.username
        axios.get('/farmers/' + username)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisFarmer = response.data;
                this.setState({ thisFarmer: copy.thisFarmer })
            })
    }


    firstPassword = (event) => {
        let copy = { ...this.state};
        copy.firstPassword = event.target.value;
        this.setState(copy)
    }

    
    secondPassword = (event) => {
        let copy = { ...this.state};
        copy.secondPassword = event.target.value;
        this.setState(copy)
    }


    reset=()=>{
        let copy = {...this.state}
        if(this.state.firstPassword===this.state.secondPassword){
            copy.thisFarmer.password=this.state.firstPassword
            this.setState({thisFarmer:copy.thisFarmer})
            const username = this.props.match.params.username
            axios.put('/farmers/' + username, this.state.thisFarmer)
                .then((response) => {
    
                })
                this.setState({message:"Password Successfully Updated"})
        }else{
            this.setState({message:"Two Passwords Mismatch"})
        }
        this.setState({firstPassword:''})
        this.setState({secondPassword:''})

    }





    homepage = () => {
        this.props.history.push('/admin-homepage')
        
    }


    render() {
        return (
            <div>
                  <button onClick={() => { this.homepage() }}>Your Homepage </button>
                <h2> Admin Farmer-Password Reset Page </h2>
                <h5>(* fields are required)</h5>
                <h3>{this.state.message} </h3>
                <ul>
                    New Password *:<input
                        type='text'
                        name='first'
                        value={this.state.firstPassword}
                        onChange={(event) => { this.firstPassword(event) }}
                    ></input>
                </ul>
                <ul>
                    Confirm Password *:<input
                        type='text'
                        name='second'
                        value={this.state.secondPassword}
                        onChange={(event) => { this.secondPassword(event) }}
                    ></input>
                </ul>

                <button onClick={() => this.reset()}>Reset </button>

            </div>
        )
    }
}
