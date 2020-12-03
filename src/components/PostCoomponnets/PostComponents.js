import React, {Component} from 'react';
import PostComp from "./PostComp";

class PostComponents extends Component {
    state = {posts: [] , chosenPost: null}


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI});
            });
    }

    selectPost = (id)=> {
        let chosenPost = this.state.posts.find(value => value.id === id);
        this.setState({chosenPost});
    }
    render() {
        let {posts, chosenPost} = this.state

        return (


            <div>
                {
            posts.map(value => (
               <PostComp item={value}
               key={value.id} selectPost={this.selectPost}/>))

                }
                <hr/>
                {

                    chosenPost && <PostComp item={chosenPost}/>
                }
            </div>
        );
    }
}

export default PostComponents;