import React from "react";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import "../styles/form.css";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fullName: "",
            userName: "",
            password: "",
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value, //in js [key] -> key can be set dynamically
        });
    }

    handleSubmit(e) {
        console.log("prevent");
        e.preventDefault();
        alert("Hello " + this.state.fullName + " Sign Up successfull");
        let stateObj = { ...this.state };
        Object.keys(stateObj).forEach((key) => (stateObj[key] = ""));
        this.setState({ ...stateObj });
    }

    render() {
        const { email, fullName, userName, password } = this.state;
        const isEmpty =
            email.length > 0 &&
            fullName.length > 0 &&
            userName.length > 0 &&
            password.length > 0
                ? false
                : true;
        
        return (
            <div className="container">
                <div className="form--container">
                    <div className="form__header">
                        <label> Instagram </label>
                        <p>
                            Sign up to see photos and videos from your friends.
                        </p>
                        <button>Login with Facebook </button>
                    </div>
                    <hr />
                    <div className="form__container">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <InputField
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => this.handleChange(e)}
                            />

                            <InputField
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => this.handleChange(e)}
                            />

                            <InputField
                                type="text"
                                name="userName"
                                placeholder="User Name"
                                value={userName}
                                onChange={(e) => this.handleChange(e)}
                            />

                            <InputField
                                type="password"
                                name="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => this.handleChange(e)}
                            />

                            <InputField
                                type="submit"
                                value="SignUp"
                                disabled={isEmpty}
                            />
                        </form>
                    </div>
                </div>

                <div id="form--footer">
                    <span>Have an account ? </span>
                    <Link to ="/login">Login</Link>
                </div>

            </div>
        );
    }
}

export default SignUpForm;
