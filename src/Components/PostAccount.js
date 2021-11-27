import React from "react";
class PostAccount extends React.Component {
    render() {
        return (
            <div className="account--name">
                <div className="account__name">
                    <img
                        src={this.props.profilePic}
                        className="account__name__avtar"
                    />
                    <h5>{this.props.name}</h5>
                </div>
                <div>
                    <h4>...</h4>
                </div>
            </div>
        );
    }
}

export default PostAccount;
