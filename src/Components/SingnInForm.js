import { useState } from "react";
import InputField from "./InputField";

import "../styles/SignInForm/signInForm.css";

import { Link, Navigate } from "react-router-dom";
import instaF from "../images/instaF.png";
// import Post from './Post';
// const userName = 'sachin.pundir';

export default function SignInForm(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
         props.getUserName(user);        
        // console.log("exec", password.length);
        // console.log(props);
        alert("sign in successfull");
        // return;
        setUser("");
        setPassword("");
        setLoggedIn(true);
    };
    

    console.log(user, password,isLoggedIn, "times");
    if(!isLoggedIn)
    return (
        <div className="signIn-container">
            <div className="side-image">
                <img src={instaF} alt = "instagram signup"/>
            </div>

            <div className="form_container">
                <div className="login-form">
                    <div className="form__title">
                        <label>Instagram </label>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputField
                            type="text"
                            placeholder="user name"
                            value={user}
                            required
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <InputField
                            type="password"
                            placeholder="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputField
                            type="submit"
                            value="Login"
                            disabled={
                                user.length > 0 && password.length > 4
                                    ? false
                                    : true
                            }
                        />
                    </form>
                    <hr />
                    <div className="fbLogin">
                        <Link to="/">Login with Facebook </Link>
                    </div>
                    <div className="forgotPass">
                        <Link to="/">forgot Password?</Link>
                    </div>
                </div>
                <div className="footer">
                    <label>
                        Don't have an account?
                        <Link to="/signUp"> Sign up </Link>
                    </label>
                </div>
            </div>
        </div>
    );

    else if(isLoggedIn)
    return(
        // <Post userName = {userName} />
        <Navigate to = '/' />
        // <Home />
    )
}
