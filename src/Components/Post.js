import React from "react";
import "../styles/post.css";
import procreate from "../images/procreat.jpg";
import PostAccount from "./PostAccount";
import Icons from "./Icons";
class Post extends React.Component {
    render() {
        return (
            <div className="post--container">
                <PostAccount
                    name={this.props.userName}
                    profilePic={procreate}
                />
                <img src={procreate} alt=" " className="imgStyle"></img>
                <Icons />
                <p> hello {this.props.userName}</p>
            </div>
        );
    }
}

export default Post;
