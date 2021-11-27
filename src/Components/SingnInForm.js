import { useState } from "react";
import InputField from "./InputField";

import "../styles/SignInForm/signInForm.css";

import { Link } from "react-router-dom";
import instaF from "../images/instaF.png";

export default function SignInForm() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        console.log("exec", password.length);
        e.preventDefault();
        alert("sign in successfull");
        setUser("");
        setPassword("");
    };

    console.log(user, password, "times");
    return (
        <div className="signIn-container">
            <div className="side-image">
                <img src={instaF} />
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
}
