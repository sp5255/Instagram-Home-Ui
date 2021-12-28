import { Avatar } from "@mui/material";
import {Link} from 'react-router-dom'
import "../styles/left_home_container/leftHome.css";


export default function LeftHome(props) {
    const userName = props.userName;
    const avatar_image = props.avatar_image;

    return (
        <div className="home-avatar-container">
            <div>
                <Avatar alt={userName} src={avatar_image} id="home-avatar" />
                <div className = "avatar-user">
                    <label>{userName}</label>
                    {/* <label>{userName}</label> */}
                </div>
            </div>
            <div>
                <Link to = '/login'> Switch </Link>
            </div>
        </div>
    );
}
