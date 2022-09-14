import { React, useState, useEffect } from "react";

import "../CSS/Approval.css"
import ApprovalList from "../JS/ApprovalList";





const Approval = (props) => {
    const [approvalTrans, setApprovalTrans] = useState({});
   
    const [transactionData, setTransactionData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/Product/')
            .then(Response => Response.json())
            .then(transactionData => {
                setTransactionData(transactionData)
            })
    })
    {
        return (
            <>
                <div className="Approval_div">
                    <div className="div2">
                        <div className="mainApproval">
                            <ul>
                                <li className="iDul">#</li>
                                <li className="dateLi">Date</li>
                                <li>Biller Name</li>
                                <li>Item Description</li>
                                <li className="projectLi">Amount</li>
                                <li className="projectLi">Project</li>
                                <li >Remark</li>
                                <li className="text_center approvalSelect">Approval</li>
                                <li className="text_center">Comments</li>
                                <li className="btnLi text_center">Button</li>
                            </ul>
                            {
                                transactionData.map(dAta => {
                                    return (
                                        <ul key={dAta.id}>
                                            <li className="iDul">{dAta.id}</li>
                                            <li className="dateLi">{dAta.Date}</li>
                                            <li>{dAta.Biller}</li>
                                            <li>{dAta.Item}</li>
                                            <li className="projectLi">{dAta.Amount}</li>
                                            <li className="projectLi">{dAta.Approval}</li>
                                            <li>{dAta.Remark}</li>
                                            <ApprovalList props = {dAta}/>
                                        </ul>)
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Approval;