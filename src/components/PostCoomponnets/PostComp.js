import React, {Component} from 'react';

class PostComp extends Component {


    render() {

        let {item, selectPost} = this.props;

        return (
            <div>
                {item.id}-{item.body}
                <button onClick= {() => selectPost(item.id)}>choose</button>
            </div>
        );
    }
}

export default PostComp;