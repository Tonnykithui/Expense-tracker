import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

const initialState = {
    Transaction:[
        {
            id:2,
            description:"Dribble design",
            time:"24th Jun, 2021",
            amount: 350
        },
        {
            id:3,
            description:"cook",
            time:"24th Jun, 2021",
            amount: 350
        },
        {
            id:7,
            description:"design",
            time:"24th Jun, 2021",
            amount: 350
        }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    function deleteTransaction(id){
        alert("Are you sure you want to delete?");
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    return(
        <GlobalContext.Provider value={{Transaction:state.Transaction, addTransaction, deleteTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}