//import logo from './logo.svg';
// import Post from './Components/Post';

import { Route, Routes } from "react-router";
import Form from './Components/Form'
import "./App.css";

import SignInForm from "./Components/SingnInForm";
// import Form from './Components/Form'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<h1>welcome to instagram project </h1>} />
                <Route path = '/signUp' element = {<Form />} />   
                <Route path = '/login' element = {<SignInForm />} />
            </Routes>
        </div>
    );
}

export default App;
