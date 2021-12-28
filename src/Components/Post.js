import React from "react";
import "../styles/post.css";
import procreate from "../images/procreat.jpg";
import PostAccount from "./PostAccount";
import Icons from "./Icons";

import rahul from '../images/posts/rahul.jpg'


class Post extends React.Component {

    render() {
        const {userName, imgPath} = this.props;
        return (
            <div className="post--container">
                <PostAccount
                    name={userName}
                    profilePic={imgPath}
                />
                <img src={imgPath} alt=" " className="imgStyle"></img>
                <Icons />
                <p> hello {this.props.userName}</p>
            </div>
        );
    }
}

export default Post;
