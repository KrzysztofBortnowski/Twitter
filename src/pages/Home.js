import React, { Component } from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';;



class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/posts/")
        //     .then(response => response.json())
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data })

            })
            .catch(error => console.log('error fetching', error))
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {

        return (
            <div className="App">
                <div>

                    {this.state.posts.map((post) =>
                        <Link to={`/posts/${post.id}`}>
                            {post.title}
                        </Link>)}
                </div>
            </div>
        )
    }
}

export default Home;