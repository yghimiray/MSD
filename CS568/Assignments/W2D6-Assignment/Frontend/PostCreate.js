import React, { Component } from 'react'
// import { BrowserRouter, Link, Route, Switch,Redirect} from 'react-router-dom'
import axios from 'axios'

export default class PostCreate extends Component {

    state = {
        post: {
            PID: '',
            head: '',
            description: ''
        }
    }

    propertyChange = (event) => {
        let copy = { ...this.state.post }
        copy[event.target.name] = event.target.value;
        this.setState({ post: copy })
    }

addPost=()=>{
    axios.post('/posts',this.state.post)
    .then((response)=>{

    })
    
}



    render() {
        return (
            <div>
                <h2>Add a new post</h2>
                PID:<input
                    type='text'
                    name='PID'
                    onChange={(event) => { this.propertyChange(event) }}
                ></input>

                Head:<input
                    type='text'
                    name='head'
                    onChange={(event) => { this.propertyChange(event) }}
                ></input>

                Description:<input
                    type='text'
                    name='description'
                    onChange={(event) => { this.propertyChange(event) }}
                ></input>

            <button onClick={()=>{this.addPost()}}>Add</button>
            

            </div>
        )
    }
}
