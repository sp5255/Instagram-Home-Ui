//import logo from './logo.svg';
// import Post from './Components/Post';
import { Navigate, Route, Routes } from "react-router";
import SignInForm from "./Components/SingnInForm";
import SignUpForm from "./Components/SignUpForm";
import {useState} from 'react' ;
// import Nav from "./Components/Nav";
// import Form from './Components/Form'
// import Post from './Components/Post' ;
import Home from "./Components/Home";

function App() {

    const [userName, setUserName] = useState('');

    const getUser = (user) => {
        console.log('getuser', user);
        setUserName(user);
    }
    
    return (                
        <div className="App">
            <Routes>                
                <Route path="/" element={<Home userName = {userName}/>} />
                {/* <Route path="/" element={<>
                    <Nav /> <Post userName = 'sachin.pundir' /> </>} /> */}
                <Route path = '/signUp' element = {<SignUpForm  />} />   
                <Route path = '/login' element = {<SignInForm getUserName = {getUser}/>} />
            </Routes>
        </div>
    );
}

export default App;
