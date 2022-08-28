import React from "react";
import '../CSS/SideBar.css'


class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
                <div className="container">
                    <div className="bi-list"></div>
                    <div className="barMenu">
                        <div className="barMenu-btn btn-dashboard">
                            <div className="bar-icon icon-house"></div>
                            <p className="btn-link link-dashboard">Dashboard</p>
                        </div>
                        <div className="barMenu-btn btn-expenses">
                            <div className="bar-icon icon-expenses"></div>
                            <p className="btn-link link-expenses">Expenses</p>
                        </div>
                        <div className="barMenu-btn btn-expenses">
                            <div className="bar-icon icon-approval"></div>
                            <p className="btn-link link-expenses">Approval</p>
                        </div>
                        <div className="barMenu-btn btn-expenses">
                            <div className="bar-icon icon-graph"></div>
                            <p className="btn-link link-expenses">Graph</p>
                        </div>
                        <div className="barMenu-btn btn-expenses">
                            <div className="bar-icon icon-help"></div>
                            <p className="btn-link link-expenses">Help</p>
                        </div>
                    </div>
                    <div className="logIn-container">
                        <h1 className="logIn-avatar">P</h1>

                    </div>
                </div>
            </>
        );
    }
}

export default SideBar;