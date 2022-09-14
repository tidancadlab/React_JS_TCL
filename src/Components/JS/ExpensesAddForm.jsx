import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { RiCloseFill } from 'react-icons/ri'
import { BsCalendar4Event, BsPlusLg, BsFillPersonBadgeFill, BsChatSquareTextFill, BsFillCreditCard2BackFill, BsFillFilePptFill, BsFillFileEarmarkPdfFill, BsBlockquoteLeft } from 'react-icons/bs'


let curr = new Date();
curr.setDate(curr.getDate() + 0);
let date = curr.toISOString().substring(0, 10);




function ExpensesAddForm() {
    let id1 = uuidv4()
    let [id, setId] = useState(id1)
    const [Date, setDate] = useState(date)
    const [Biller, setBiller] = useState("");
    const [Item, setItem] = useState("");
    let [Amount, setAmount] = useState(Number(0.00));
    const [Approval, setApproval] = useState("");
    const [billFile, setBillFile] = useState("Not Enclosed");
    const [Remark, setRemark] = useState("");


    const submit = (() => {
        Amount = Number(Amount);
        let data = { id, Date, Amount, Biller, Item, Approval, billFile, Remark };

        fetch('http://localhost:3000/Product', {
            method: 'POST',
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
        }).then(() => {
            setId(id1);
            setDate(date);
            setBiller("");
            setItem("");
            setAmount(0.00);
            setApproval("");
            setRemark("");
        })
    })
    let [btnActive, setBtnActive] = useState(false)
    const Btn_close = () => {
        if (btnActive === true) {
            setBtnActive(false)

        }
        else {
            setBtnActive(true)
        }
    }

        return (
            <>
                <button className={btnActive ? "btnAddExpesnes_notActive btnAddExpesnes" : "btnAddExpesnes"} onClick={Btn_close}><BsPlusLg /> Add Expenses</button>
                <div className={btnActive ? "addExpContainer" : "addExpContainer BtnNotActive"}>
                    <div className="transId" >
                        Transaction id:  - {id}
                        <div onClick={Btn_close}><RiCloseFill /></div>
                    </div>
                    <div className="inputExp">
                        <div>
                            <label htmlFor="addDate"><BsCalendar4Event /> Date</label>
                            <input type="date" className="label-dat noborder" name="Date" max={date} value={Date} onChange={(e) => { setDate(e.target.value) }} id="addDate" />
                        </div>
                        <div>
                            <label htmlFor="Biller"><BsFillPersonBadgeFill /> Biller Name</label>
                            <input required className="label-dat" type="text" name="Biller" value={Biller} onChange={(e) => { setBiller(e.target.value) }} id="Biller" placeholder="Biller" />
                        </div>
                        <div>
                            <label htmlFor="Item"><BsChatSquareTextFill /> Item Description</label>
                            <input type="text" name="Item" value={Item} onChange={(e) => { setItem(e.target.value) }} id="Item" placeholder="Item Description" />
                        </div>
                        <div >
                            <label htmlFor="billAmount"><BsFillCreditCard2BackFill /> Bill Amount</label>
                            <input type="number" name="Amount" value={parseInt(Amount)} onChange={(e) => { setAmount(e.target.value) }} id="billAmount" placeholder="Amount" />
                        </div>
                        <div>
                            <label htmlFor="projectName"><BsFillFilePptFill /> Project Name</label>
                            <select name="Approval"
                                value={Approval} onChange={(e) => { setApproval(e.target.value) }} id="projectName" >
                                <option htmlFor='projectInput' >-- Please Select --</option>
                                <option htmlFor='projectInput' value="RBPL">RBPL</option>
                                <option htmlFor='projectInput' value="BCPL">BCPL</option>
                                <option htmlFor='projectInput' value="ITFPL">ITFPL</option>
                                <option htmlFor='projectInput' value="Doraha">Doraha</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="Bill_File"><BsFillFileEarmarkPdfFill /> Bill Scan Copy</label>
                            <input className="fileInput" type="file" onChange={(e) => { setBillFile(e.target.value) }} id="Bill_File" />
                        </div>
                        <div className="remarkDiv">
                            <label htmlFor="rEmark"><BsBlockquoteLeft /> Remark</label>
                            <textarea type="text" name="Remark" value={Remark} onChange={(e) => { setRemark(e.target.value) }} id="rEmark" />
                        </div>
                        <button type="submit" onClick={submit} >Submit</button>
                    </div>
                </div>

            </>
        );
}

export default ExpensesAddForm;