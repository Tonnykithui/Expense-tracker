import React, { useContext } from 'react'
import styled from 'styled-components'
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";
import { GlobalContext } from '../../context/GlobalContext';

const CardWrapper = styled.div`
 width: 100%;
 height: 150px;
 display: flex;
 justify-content: center;
 align-items: center;
`

const CardContent = styled.div`
 width: 90%;
 height: 100%;
 background: #254652;
 border-radius: 8px;
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

const IncomeExpenseWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`

const Income = styled.div`
 background: #fff;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: center;
 margin-right: 8px;
 width: 140px;
 border-radius: 8px;
`
 
const Expense = styled.div`
 background: #fff;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: center;
 width: 140px;
 border-radius: 8px;

`

const Balance = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 color: #fff;
`

const IncomeWrap = styled.div`
 display: flex;
 flex-direction: column;
 margin-left: 5px;
h6{
    margin: 0;
}

p{
    margin: 0;
}
`

const IncomeWrapIcon = styled.div`
 width: 30px;
 height: 30px;
 border-radius: 50%;
 background: #f4f4f4;
 display: flex;
 justify-content: center;
 align-items: center;
 color: blue;
 font-size: 20px;
 
`

const ExpenseWrap = styled.div`
 display: flex;
 flex-direction: column;
margin-left: 5px;
h6{
    margin: 0;
}

p{
    margin: 0;
}
`

const ExpenseWrapIcon = styled.div`
 width: 30px;
 height: 30px;
 border-radius: 50%;
 background: #f4f4f4;
 display: flex;
 justify-content: center;
 align-items: center;
 color: red;
 font-size: 20px;
`


const Card = () => {

    const {Transaction} = useContext(GlobalContext);
    const tamount = Transaction.map(item => item.amount);
    const totAmount = tamount.reduce((item, tot) => item + tot, 0);

    const totIncome = tamount.filter(item => item > 0)
    .reduce((t,init) => t + init, 0);

    const totExpense = tamount.filter(item => item < 0)
    .reduce((t, init) => t + init, 0);

    return (
        <>
            <CardWrapper>
                <CardContent>
                    <Balance>
                        <h2>{totAmount}</h2>
                        <p>Balance</p>
                    </Balance>
                <IncomeExpenseWrapper>
                    <Income>
                        <IncomeWrapIcon>
                        <FiArrowUpRight />
                        </IncomeWrapIcon>
                        <IncomeWrap>
                        <h6>+${totIncome}</h6>
                        <p>Income</p>
                        </IncomeWrap>
                    </Income>
                    <Expense>
                        <ExpenseWrapIcon>
                        <FiArrowDownLeft/>
                        </ExpenseWrapIcon>
                        <ExpenseWrap>
                        <h6>-${totExpense}</h6>
                        <p>Expense</p>
                        </ExpenseWrap>
                    </Expense>
                </IncomeExpenseWrapper>
                </CardContent>
            </CardWrapper>
        </>
    )
}

export default Card
