import {Navigate} from 'react-router-dom';
import Nav from "./Nav";
import Post from "./Post";
import Stories from "./Stories";
import "../styles/Home/home.css";
import LeftHome from "./LeftHome";
import procreat from "../images/procreat.jpg";
import Users from "../posts";

export default function Home(props) {        
    // const postArr = [1,2,3];
    const userName = props.userName;
    
    if(userName !== '')
    return (
        <div className="home-component">
            <Nav />

            <div className="home_content">                                
                <div>
                    <Stories Users = {Users} user_name="dev" />
                    {Users.map((user) => (<Post userName={user.userName} imgPath ={user.img} />))}
                </div>
                <div className="home_left">
                    <LeftHome
                        userName={userName}
                        avatar_image={procreat}
                    />
                </div>

            </div>
        </div>
    );
    else
    return(
        <Navigate to = '/login' />
    )
}
