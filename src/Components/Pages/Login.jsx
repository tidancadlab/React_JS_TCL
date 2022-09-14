import React, { useEffect, useState, useRef } from "react";
import { Route, Routes } from 'react-router-dom'
import '../CSS/Login.css'
import { FcBusinessman } from 'react-icons/fc'
import Navbar from '../JS/nav';
import SideBar from '../JS/SideBar'
import Footer from '../JS/Footer'
import Dashboard from '../Pages/Dashboard'
import Expenses from '../Pages/Expenses'
import backimg from '../Images/background_img.jpg'
import Approval from "./Approval";




const Login = () => {

    // let Component;
    // switch (window.location.pathname) {
    //     case "/":
    //         Component = <Dashboard/>
    //         break
    //     case "/Expenses":
    //         Component = <Expenses/>
    //         break
    // }

    const userRef = useRef();
    const passwordRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(true);
    // useEffect(() => {
    //     userRef.current.focus()
    // }, [])




    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, password);
        setUser('');
        setPassword('');
        setSuccess(true)

    }

    return (
        <>
            {success ? (
                <div>
                    <Navbar/>
                    <SideBar/>
                    <Routes>
                        <Route path="/" element={<Dashboard/>} />
                        <Route path="/Expenses" element={<Expenses/>} />
                        <Route path="/Approved" element={<Approval/>} />
                    </Routes>
                    {/* <Footer/> */}
                </div>

            ) : (


                < div >
                    <div className="login_main">
                        <div className="display_div">
                            <div className="inner_display">
                            </div>

                        </div>
                        <div className="logIn_div">
                            <form className="login_input" onSubmit={handleSubmit}>
                                <h1 className="welcomeH1">Welcome to TIDAN CAD LAB</h1>
                                <div className="avtar"><FcBusinessman /></div>
                                <input
                                    id="username"
                                    ref={userRef}
                                    autoComplete='off'
                                    className="userName"
                                    value={user}
                                    onChange={(e) => { setUser(e.target.value) }}
                                    placeholder="Username"
                                    type="text"
                                    required
                                />
                                <input
                                    id="password"
                                    ref={passwordRef}
                                    className="passCode"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    placeholder="Password"
                                    type="password"
                                    required
                                    autoComplete ="off"
                                />
                                <button className="logIn_btn">Login</button>
                                {/* <button className="register_btn">Register</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )


}

export default Login;