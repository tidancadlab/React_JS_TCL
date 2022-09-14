import React, { useState, useEffect } from "react";
import { BsPatchCheckFill, BsPatchExclamationFill, BsPatchQuestionFill, BsX } from 'react-icons/bs'
import '../CSS/Expenses.css'
import ExpensesAddForm from "../JS/ExpensesAddForm";


let curr = new Date();
curr.setDate(curr.getDate() + 0);
let date = curr.toISOString().substring(0, 10);
curr.setDate(curr.getDate() - 7);
let dateSevenDayBack = curr.toISOString().substring(0, 10);




const Expenses = () => {
    const [id, setId] = useState()
    const [Date, setDate] = useState()
    const [Biller, setBiller] = useState("");
    const [Item, setItem] = useState("");
    let [Amount, setAmount] = useState(Number(0.00));
    const [Approval, setApproval] = useState("");
    const [billFile, setBillFile] = useState("Not Enclosed");
    const [Remark, setRemark] = useState("");
    const [transactionData, setTransactionData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/Product/')
            .then(Response => Response.json())
            .then(transactionData => {
                setTransactionData(transactionData)
            })
    })



    function editExpenses(id) {
        var index = -1;
        transactionData.forEach((a, idx) => {
            if (a.id === id) {
                index = idx;
            }
        });

        if (index !== -1) {
            setId(transactionData[index].id)
            setDate(transactionData[index].Date)
            setBiller(transactionData[index].Biller);
            setItem(transactionData[index].Item);
            setAmount(transactionData[index].Amount);
            setApproval(transactionData[index].Approval);
            setRemark(transactionData[index].Remark);
        }
        else {
            alert("you cant do it");
        }
    }




    return (
        <>
            <div className="expenses-container">
                <div className="data-container">
                    <div className="transaction-container">
                        <div class="alert alert-info alert-dismissible fade show" role="alert">
                                <strong>Hey</strong> Expenses Added
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        <div className="add-expenses">
                            <div>
                                <ExpensesAddForm />
                            </div>
                            <div className="new-transaction">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Date</th>
                                            <th>Biller</th>
                                            <th>Item</th>
                                            <th>Amount</th>
                                            <th>Site</th>
                                            <th>File</th>
                                            <th>Remark</th>
                                            <th>Edit/Submit</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr className="inputExpenses">
                                            <td style={{ width: "3%" }}>{id}</td>
                                            <td style={{ width: "9.5%" }}>
                                                <input type="date" className="label-dat noborder" name="Date" max={date} value={Date} onChange={(e) => { setDate(e.target.value) }} id="addDate" />
                                            </td>
                                            <td>
                                                <input required className="label-dat" type="text" name="Biller" value={Biller} onChange={(e) => { setBiller(e.target.value) }} id="Biller" placeholder="Biller" />
                                            </td>
                                            <td>
                                                <input type="text" name="Item" value={Item} onChange={(e) => { setItem(e.target.value) }} id="Item" placeholder="Item Description" />
                                            </td>
                                            <td style={{ width: "12%" }}>
                                                <input type="number" name="Amount" value={Amount} onChange={(e) => { setAmount(e.target.value) }} id="billAmount" placeholder="Amount" />
                                            </td>
                                            <td>
                                                <select name="Approval"
                                                    value={Approval} onChange={(e) => { setApproval(e.target.value) }} id="approvalStatus" >
                                                    <option htmlFor='projectInput' >Please Select</option>
                                                    <option htmlFor='projectInput' value="RBPL">RBPL</option>
                                                    <option htmlFor='projectInput' value="BCPL">BCPL</option>
                                                    <option htmlFor='projectInput' value="ITFPL">ITFPL</option>
                                                    <option htmlFor='projectInput' value="Doraha">Doraha</option>
                                                </select>
                                            </td>
                                            <td>{billFile}</td>
                                            <td>
                                                <input type="text" name="Remark" value={Remark} onChange={(e) => { setRemark(e.target.value) }} />
                                            </td>
                                            <td style={{ width: "12%", textAlign: "end" }}>
                                                <button type="submit">Update</button>
                                            </td>
                                        </tr>

                                        {
                                            transactionData.map(getData => {
                                                function deleteItem(id) {
                                                    if (getData.Date >= dateSevenDayBack) {
                                                        if (window.confirm("Do you want to Really Delete it")) {
                                                            fetch('http://localhost:3000/Product/' + id, {
                                                                method: 'DELETE'
                                                            }).then((result) => {
                                                                result.json().then((resp) => {
                                                                    let itemDltd = "Item Deleted"
                                                                })
                                                            })
                                                        }
                                                    }


                                                }

                                                return (
                                                    <tr className="dataTable" key={getData.id}>
                                                        <td className="uuid">{getData.id}</td>
                                                        <td >{getData.Date}</td>
                                                        <td>{getData.Biller}</td>
                                                        <td className="textExpend">{getData.Item}</td>
                                                        <td>{getData.Amount}</td>
                                                        <td>{getData.Approval}</td>
                                                        <td>
                                                            {getData.approvalTrans === "Approved" ?
                                                                <span><BsPatchCheckFill className="approved_svg" /> Approved</span>
                                                                : getData.approvalTrans === "Rejected" ?
                                                                    <span><BsPatchQuestionFill className="reject_svg" /> Rejected</span>
                                                                    : <span><BsPatchExclamationFill className="pending_svg" /> Pending</span>}
                                                        </td>
                                                        <td className="textExpend">{getData.Remark}</td>
                                                        <td style={{ textAlign: "end" }}>
                                                            <button onClick={() => editExpenses(getData.id)} >Edit</button>
                                                            <button onClick={() => deleteItem(getData.id)} >Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            )

                                        }

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}




export default Expenses;