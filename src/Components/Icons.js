import React from "react";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";


class Icons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false,
            isSaved:false,
        };
    }

    handleLike = () => {
        this.setState({ like: !this.state.like });
    };

    handleSave = () => {
        this.setState({isSaved: !this.state.isSaved});
    }

    render() {
        const IsLike = this.state.like ? (
            <FcLike onClick={this.handleLike} />
        ) : (
            <FaRegHeart onClick={this.handleLike} />
        );        

        const isSaved = this.state.isSaved ?  <BsBookmarkFill onClick = {this.handleSave} /> : <BsBookmark onClick = {this.handleSave}  />
        return (
            <div className="icons">
                <div>
                    {IsLike}
                    <FaRegComment />
                    <FiSend />
                </div>
                <div>
                    {isSaved}
                </div>
            </div>
        );
    }
}

export default Icons;
