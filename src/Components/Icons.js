import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
class Icons extends React.Component {
    render() {
        return (
            <div className="icons">
                <div>
                    <FcLike />
                    <FaRegComment />
                    <FiSend />
                </div>
                <div>
                    <BsBookmarkFill />
                </div>
            </div>
        );
    }
}

export default Icons;
