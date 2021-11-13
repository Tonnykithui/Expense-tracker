import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import styled from 'styled-components';
import AddTransaction, { showModal } from '../popup/AddTransaction'

const AddBtnWrap = styled.div`
 position: absolute;
 height: 40px;
 width: 40px;
 border-radius: 50%;
 background: #3D6371;
 display: flex;
 justify-content: center;
 align-items: center;
 top: 92%;
 right: 20px;
 color: #fff;
 font-size: 30px;
 font-weight: 600;

 :hover{
     background: blue;
 }
`


const AddBtn = () => {

    const [Wrapper, setWrapper] = useState(false);

    const showModal = () => {
        setWrapper(!Wrapper);
    }

    return (
        <>
        <AddBtnWrap onClick={showModal}>
            <IoIosAdd />
        </AddBtnWrap>
        {
            Wrapper && (
                <AddTransaction showModal={showModal}/>
            )
        }
        </>
    )
}

export default AddBtn
