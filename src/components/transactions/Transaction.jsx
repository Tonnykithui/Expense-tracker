import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import './transaction.css'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { GlobalContext } from '../../context/GlobalContext';


const TransactionListWrapper  = styled.div`
 list-style: none;
 padding: 5px 2px;
 margin: 0;
`

const TransactionListItem = styled.li`
 padding: 4px 4px;
 width: 95%;
 background: #fff;
 border-radius: 8px;
 margin-top: 5px;
 position: relative;
 display: flex;
 flex-direction: row;
 justify-content: space-between;

 div{
     h5{
         margin: 0;
     }

     p{
         margin: 0;
     }
 }

 p{
     opacity: .8;
 }
 
`


const TransactionList = styled.ul`
 list-style-type: none;
 overflow-y:scroll;
 height: 280px;
`
const Transaction = () => {
    const [transaction, setTransaction] = useState([]);

    const { Transaction,deleteTransaction } = useContext(GlobalContext);


    return (
        <>
            <h5 className='transactions-head'>Transactions</h5>
            <TransactionListWrapper>
                
                <TransactionList>
                    {
                        Transaction.map(item => {
                            return(
                                <TransactionListItem key={item.id}>
                                <div>
                                   <h6>{item.description}</h6>
                                   <p>{item.time}</p>
                                </div>
                                <p className='transaction-amount'>{item.amount}</p>
                                <div className='edit-delete-icons active'>
                                     <FiEdit className='edit'/>
                                     <AiOutlineDelete 
                                     className='delete' 
                                     onClick={() => deleteTransaction(item.id)}
                                     />
                                </div>
                                </TransactionListItem>
                            )
                        })
                    }
               {/*  <TransactionListItem>
                    <div>
                    <h6>Dribble design</h6>
                    <p>24 sept,2021</p>
                    </div>
                    <p className='transaction-amount'>-$340</p>
                    <div className='edit-delete-icons active'>
                        <FiEdit className='edit'/>
                        <AiOutlineDelete className='delete'/>
                    </div>
                </TransactionListItem>
                <TransactionListItem>
                    <div>
                    <h6>Dribble design</h6>
                    <p>24 sept,2021</p>
                    </div>
                    <p className='transaction-amount'>-$340</p>
                    <div className='edit-delete-icons active'>
                        <FiEdit className='edit'/>
                        <AiOutlineDelete className='delete'/>
                    </div>
                </TransactionListItem>
                <TransactionListItem>
                    <div>
                    <h6>Dribble design</h6>
                    <p>24 sept,2021</p>
                    </div>
                    <p className='transaction-amount'>-$340</p>
                    <div className='edit-delete-icons active'>
                        <FiEdit className='edit'/>
                        <AiOutlineDelete className='delete'/>
                    </div>
                </TransactionListItem>
                <TransactionListItem>
                    <div>
                    <h6>Dribble design</h6>
                    <p>24 sept,2021</p>
                    </div>
                    <p className='transaction-amount'>-$340</p>
                    <div className='edit-delete-icons active'>
                        <FiEdit className='edit'/>
                        <AiOutlineDelete className='delete'/>
                    </div>
                </TransactionListItem>
                <TransactionListItem key='4'>
                    <div>
                    <h6>Dribble design</h6>
                    <p>24 sept,2021</p>
                    </div>
                    <p className='transaction-amount'>-$340</p>
                    <div className='edit-delete-icons active'>
                        <FiEdit className='edit'/>
                        <AiOutlineDelete className='delete'/>
                    </div>
                </TransactionListItem> */}
                {/* <TransactionListItem>
                    <div>
                    <h6>Dribble design</h6>
                    <p>24 sept,2021</p>
                    </div>
                    <p className='transaction-amount'>-$340</p>
                </TransactionListItem> */}
                {/* <TransactionListItem>
                    <div>
                    <h6>Dribble design</h6>
                    <p>24 sept,2021</p>
                    </div>
                    <p className='transaction-amount'>-$340</p>
                    <div className='edit-delete-icons active'>
                        <FiEdit className='edit'/>
                        <AiOutlineDelete className='delete'/>
                    </div>
                </TransactionListItem>
                <TransactionListItem>
                    <div>
                    <h6>Dribble design</h6>
                    <p>24 sept,2021</p>
                    </div>
                    <p className='transaction-amount'>-$340</p>
                    
                    <div className='edit-delete-icons active'>
                        <FiEdit className='edit'/>
                        <AiOutlineDelete className='delete'/>
                    </div>
                </TransactionListItem> */}
                </TransactionList>
            </TransactionListWrapper>
        </>
    )
}

export default Transaction
