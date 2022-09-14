import React, { useState, useEffect } from "react";
import {BsHourglassTop, BsHourglassSplit, BsHourglassBottom, BsPatchCheckFill, BsPatchExclamationFill, BsPatchQuestionFill} from 'react-icons/bs'
import '../CSS/Dashboard.css';
import Graph from "../JS/Graph";
import Pencil from '../../icon/pencil.svg';
import '../JS/functions'


const Dashboard = () => {

    const receivedFund = 400000;
    let expensesFund = 0;
    let formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      });

    const [transactionData, setTransactionData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/Product/')
            .then(Response => Response.json())
            .then(transactionData => {
                setTransactionData(transactionData)
            })
    })
    var i;
    for (i = 0; i < transactionData.length; i++) {
        expensesFund += transactionData[i].Amount;
    }
    expensesFund = String(expensesFund).slice(0,10)
    let balanceFund = String(receivedFund - expensesFund).slice(0,10);
    balanceFund= Number(balanceFund);
    let approvedExpenses = String(expensesFund * 0.5).slice(0,10);
    approvedExpenses = Number(approvedExpenses);
    let pendingExpenses = String(expensesFund * 0.4).slice(0,10);
    pendingExpenses = Number(pendingExpenses);
    let rejectedExpenses = String(expensesFund - approvedExpenses - pendingExpenses).slice(0,10);
    rejectedExpenses = Number(rejectedExpenses);



    function deleteItem(id) {
        console.log(id);
        fetch('http://localhost:3000/Product/' + id, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {

            })
        })

    }



    return (
        <>
            <div className="home">
                <div className="home-container">
                    <div className="main-container">
                        <div className="status-container">
                            <div className="card">
                                <p className="card-inner">Fund Status</p>
                                <div className="status received">
                                    <p className="name-received status-items"><BsHourglassTop/> Received</p>
                                    <p className="item-amount status-items">{formatter.format(receivedFund)}</p>
                                </div>
                                <div className="status received">
                                    <p className="name-expenses status-items"><BsHourglassSplit/> Expenses</p>
                                    <p className="item-amount status-items">{formatter.format(expensesFund)}/-</p>
                                </div>
                                <div className="status received">
                                    <p className="name-available status-items"><BsHourglassBottom/> Available</p>
                                    <p className="item-amount status-items">{formatter.format(balanceFund)}/-</p>
                                </div>
                            </div>
                            <div className="card">
                                <p className="card-inner">Expenses Approval Status</p>
                                <div className="status received">
                                    <p className="name-received status-items"><BsPatchCheckFill className="approved_svg"/> Approved</p>
                                    <p className="item-amount status-items">{formatter.format(approvedExpenses)}/-</p>
                                </div>
                                <div className="status received">
                                    <p className="name-expenses status-items"><BsPatchExclamationFill  className="pending_svg"/> Pending</p>
                                    <p className="item-amount status-items">{formatter.format(pendingExpenses)}/-</p>
                                </div>
                                <div className="status received">
                                    <p className="name-available status-items"><BsPatchQuestionFill className="reject_svg"/> Rejected</p>
                                    <p className="item-amount status-items">{formatter.format(rejectedExpenses)}/-</p>
                                </div>
                            </div>
                            <div className="card graph-card">
                                    <Graph />
                            </div>
                        </div>
                        < div className="tran-container">
                            <div className="tran-list">
                                <table>
                                    <caption>
                                        <code> Latest Transaction Details</code></caption>
                                    <thead>
                                        <tr>
                                            <th className="table-srno">#</th>
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
                                        transactionData.map(transactionData => {
                                            return (
                                                <tbody key={transactionData.id}>
                                                    <tr>
                                                        <td className="index-id">{transactionData.id}</td>
                                                        <td className="index-date">{transactionData.Date}</td>
                                                        <td>{transactionData.Biller}</td>
                                                        <td>{transactionData.Item}</td>
                                                        <td className="amountList">{formatter.format(transactionData.Amount)}</td>
                                                        <td className="index-approval">{transactionData.Approval}</td>
                                                        <td>{transactionData.approvalTrans === "Approved"? 
                                                                <span><BsPatchCheckFill className="approved_svg"/> Approved</span>
                                                                : transactionData.approvalTrans === "Rejected"? 
                                                                <span><BsPatchQuestionFill className="reject_svg"/> Rejected</span> 
                                                                : <span><BsPatchExclamationFill className="pending_svg" /> Pending</span>}</td>
                                                        <td>{transactionData.Remark}</td>
                                                        <td onClick={() => deleteItem(transactionData.id)}><img className="edit-img" src={Pencil} alt="Edit" />
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

export default Dashboard;