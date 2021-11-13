import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { FiX } from "react-icons/fi";
import './mod.css'
import { GlobalContext } from '../../context/GlobalContext';

const ModalContainer = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 height: 100%;
 width: 100%;
 padding: 20px;
 background: #26266F;
 color: white;
 opacity: 1;
 border-radius: 8px;
`

const CloseBtn = styled.div`
 position: absolute;
 top: 0;
 right: 15px;
 color: red;
 font-size: 24px;
 font-weight: 600; 
 cursor: pointer;
`


const ModalWrapper = ({showModal}) => {

    const {addTransaction} = useContext(GlobalContext);

    const [amount, setAmount] = useState(0);
    const [name, setname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            alert("Please enter Transaction description!")
        } else {
            const options = { weekday: 'short', month: 'long', day: 'numeric' };
            const today  = new Date();  

            const newTransaction = {
               id:Math.floor(Math.random() * 300) + 6,
               description:name,
               time:today.toLocaleDateString("en-US", options),
               amount:+amount
            }

        addTransaction(newTransaction);
        }
        setAmount(0);
        setname("");

    }


    return (
        <>
            <ModalContainer>
            <form onSubmit={handleSubmit}>
                <h3>ADD NEW TRANSACTION</h3>
                    <div className="form-control">
                        <label htmlFor="name">Transaction</label>
                        <input 
                        type="text" 
                        name="name" id="" 
                        value={name}
                        onChange={(e) => setname(e.target.value)}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input 
                        type="number" 
                        name="amount" 
                        id="" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}/>
                    </div>
                    <button type="submit" className='submit'>Add Transaction</button>
                </form>
                <CloseBtn onClick={showModal}>
                <FiX />
                </CloseBtn>
            </ModalContainer>
        </>
    )
}

export default ModalWrapper
