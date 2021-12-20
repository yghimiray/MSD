import React, { Component } from 'react'
import axios from 'axios';
import PostOne from './PostOne';

export default class PostAll extends Component {
    state = {
        posts: [],
        PID: ''
    }


    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                let copy = { ...this.state };
                copy.posts = response.data;
                this.setState({ posts: copy.posts })
            })
    }


    PIDChange = (event) => {
        let copy = { ...this.state }
        copy.PID = event.target.value;
        this.setState({ PID: copy.PID })
    }

    searchButtonHandler = (PID) => {
        this.props.history.push('/search-post/' + PID)
    }



    render() {
        let allposts = this.state.posts.map((item) => {
            return (
                <PostOne
                    key={item._id}
                    PID={item.PID}
                    head={item.head}
                    description={item.description}
                ></PostOne>
            )
        });
        return (
            <div>
                <li>
                    <input type='text' placeholder='Enter the key to search' onChange={(event) => { this.PIDChange(event) }}></input>
                    <button onClick={() => { this.searchButtonHandler(this.state.PID) }}>Search</button>
                </li>

                <h1>List of All Posts</h1>

                {allposts}

            </div>
        )
    }
}
