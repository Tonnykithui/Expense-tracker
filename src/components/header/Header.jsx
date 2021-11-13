import React from 'react'
import styled from 'styled-components'
import { AiOutlineBell } from "react-icons/ai";
import './header.css'


const HeaderWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 padding: 20px 15px;

`

const HeaderG = styled.div`
 h5,h6{
     margin: 0;
 }

 h6{
     opacity: .7;
 }
`
 
const BellNotification = styled.div`
 background: #fff;
 width: 40px;
 height: 40px;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;


`


const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <HeaderG>
                    <h6>Good morning, </h6>
                    <h5>Tonny Kithui</h5>
                </HeaderG>
                <BellNotification>
                    <AiOutlineBell className='notification-icon'/>
                </BellNotification>
            </HeaderWrapper>
           
        </>
    )
}

export default Header
