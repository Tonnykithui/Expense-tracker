import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs"
import styled from 'styled-components'

const WelcomeWrapper = styled.div`
 height: 100%;
 width: 100%;
 background: #5233E2;
`

const Welcome = () => {
    return (
        <>
        <WelcomeWrapper>
            <BsFillLightningChargeFill />
        </WelcomeWrapper>
            
        </>
    )
}

export default Welcome
