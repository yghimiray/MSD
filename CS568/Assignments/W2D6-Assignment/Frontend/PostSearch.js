import React, { Component } from 'react'
import axios from 'axios'

export default class PostSearch extends Component {

    state = {
        post: {}
    }


    componentDidMount() {
        const PID = this.props.match.params.PID
        console.log(PID)
        axios.get('/posts/' + PID)
            .then((response) => {
                let copy = { ...this.state }
                copy.post = response.data
                this.setState(copy)
            })
    }




    render() {
        return (
            <div>
                <h2>Details about searched post</h2>
                <p>PostID:{this.state.post.PID}</p>
                <p>Head:{this.state.post.head} </p>
                <p>Description:{this.state.post.description} </p>
            </div>
        )
    }
}
