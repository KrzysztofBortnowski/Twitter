import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Post extends React.Component {
    state = {
        post: {}
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ post: data })

            })
            .catch(error => console.log('error fetching', error))
    }

    render() {

        return (
            <div className="App">
                <Header />
                {/* <div>{this.props.match.params.id}</div> */}
                <div>{this.state.post.title}</div>
                <div>{this.state.post.body}</div>
                <Footer />
            </div>
        );
    }
}
export default Post;