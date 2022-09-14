import { React, useState } from "react";
import {BsPatchCheckFill} from 'react-icons/bs'



const ApprovalList = ({props}) => {

    const [approvalTrans, setApprovalTrans] = useState("");
    const [commentApproval, setCommentApproval] = useState("");
    const approved_btn = () => {
        let data = {approvalTrans, commentApproval}
        fetch('http://localhost:3000/Product' + "/" + props.id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/JSON',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                if (resp) {
                    alert("new transaction added and id no is" + resp.id)
                }
            })
        })
    }
    {
        return (
            <>
                <li className="approvalSelect">
                    <select name="approveSelect" value={approvalTrans} onChange={(e) => setApprovalTrans(e.target.value)} id="approve_btn">
                        <option value="Pending">--Please Select--</option>
                        <option value="Approved"><BsPatchCheckFill/>Approve</option>
                        <option value="Rejected">Reject</option>
                    </select>
                </li>
                <li>
                    <input type="text" value={commentApproval} onChange={(e) => setCommentApproval(e.target.value)} placeholder="Comments" />
                </li>
                <li className="btnLi">
                    <button onClick={approved_btn} id="Btn_Approved">Submit</button>
                </li>
            </>
        );
    }
}

export default ApprovalList;