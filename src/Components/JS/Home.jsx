import React from "react";
import '../CSS/Home.css';
import Graph from "./Graph";
import Pencil from '../../icon/pencil.svg';
import Data from '../JS/Data.json';


class Home extends React.Component {
    state = {}
    render() {
        return (

            <>
                <div className="home">
                    <div className="home-container">
                        <div className="main-container">
                            <div className="status-container">
                                <div className="card">
                                    <p className="card-inner">Fund Availability Status</p>
                                    <div className="status received">
                                        <p className="name-received status-items">Received</p>
                                        <p className="item-amount status-items">50,000</p>
                                    </div>
                                    <div className="status received">
                                        <p className="name-expenses status-items">Expenses</p>
                                        <p className="item-amount status-items">50,000</p>
                                    </div>
                                    <div className="status received">
                                        <p className="name-available status-items">Available</p>
                                        <p className="item-amount status-items">651894915</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <p className="card-inner">Expenses Approval Status</p>
                                    <div className="status received">
                                        <p className="name-received status-items">Approved</p>
                                        <p className="item-amount status-items">50,000</p>
                                    </div>
                                    <div className="status received">
                                        <p className="name-expenses status-items">Pending</p>
                                        <p className="item-amount status-items">50,000</p>
                                    </div>
                                    <div className="status received">
                                        <p className="name-available status-items">Rejected</p>
                                        <p className="item-amount status-items">651894915</p>
                                    </div>
                                </div>
                                <div className="card graph-card">
                                    <div>
                                        <Graph />
                                    </div>
                                </div>
                            </div>
                            <div className="tran-container">
                                <div className="tran-list">
                                    <table>
                                        <caption>Latest Transaction Details</caption>
                                        <thead>
                                            <tr>
                                                <th className="table-srno">S. No.</th>
                                                <th className="table-date">Date</th>
                                                <th className="table-biller">Biller Name</th>
                                                <th className="table-item">Item Description</th>
                                                <th className="table-amount">Transaction Amount</th>
                                                <th className="table-approval">Approval Status</th>
                                                <th className="table-file">Bill File</th>
                                                <th className="table-remark">Remark</th>
                                                <th className="table-edit">Edit</th>
                                            </tr>
                                        </thead>
                                        {
                                            Data.map(transactionData => {
                                                return (
                                                    <tbody key={transactionData.id}>
                                                        <tr>
                                                            <td>{transactionData.id}</td>
                                                            <td>{transactionData.Date}</td>
                                                            <td>{transactionData.Item}</td>
                                                            <td>{transactionData.Biller}</td>
                                                            <td>{transactionData.Amount}</td>
                                                            <td>{transactionData.Approval}</td>
                                                            <td>{transactionData.File}</td>
                                                            <td>{transactionData.Remark}</td>
                                                            <td ><img className="edit-img" src={Pencil} alt="Edit" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                        }

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default Home;