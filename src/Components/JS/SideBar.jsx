import React from "react";
import '../CSS/SideBar.css'
import { BsBank2, BsFillCreditCard2BackFill, BsPatchCheckFill, BsReception4, BsFillExclamationSquareFill } from 'react-icons/bs'
import { RiQrScan2Line } from 'react-icons/ri'
import { useState } from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'





export default function SideBar() {



    const [Active, setActive] = useState(true)

    const expendSideBar = () => {
        if(Active == true){
            setActive(false)
        }
        else{
        setActive(true)
        }
    }


    {
        return (
            <>
                <div className={Active? "sidebar-container" : "sidebar-container sidebar-container_not"}>
                    <div className="bi-list" onClick={expendSideBar}></div>
                    <div id="side_bar_main" className="barMenu">
                        <CustomLink to="/">
                            <div id="div1" className="barMenuBtn">
                                <BsBank2 />
                                <p className="btn-link link-dashboard">Dashboard</p>
                            </div>
                        </CustomLink>
                        <CustomLink to="/Expenses">
                            <div id="div2" className="barMenuBtn">
                                <RiQrScan2Line />
                                <p className="btn-link link-expenses">Expenses</p>
                            </div>
                        </CustomLink>
                        <CustomLink to="/Approved">
                            <div id="div3" className="barMenuBtn">
                                <BsPatchCheckFill />
                                <p className="btn-link link-expenses">Approval</p>
                            </div>
                        </CustomLink>
                        <CustomLink to="/Graph">
                            <div id="div4" className="barMenuBtn">
                                <BsReception4 />
                                <p className="btn-link link-expenses">Graph</p>
                            </div>
                        </CustomLink>
                        <CustomLink to="/Help">
                            <div id="div5" className="barMenuBtn">
                                <BsFillExclamationSquareFill />
                                <p className="btn-link link-expenses">Contact Us</p>
                            </div>
                        </CustomLink>

                    </div>
                    <div className="logIn-container">
                        <h1 className="logIn-avatar">P</h1>
                    </div>
                    <div></div>
                </div>
            </>
        );
    }
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <Link className={isActive ? 'active' : 'notActive'} to={to} {...props}> {children} </Link>
    )
};