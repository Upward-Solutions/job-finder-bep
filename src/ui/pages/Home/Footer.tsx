import styled from "styled-components"
import footerBanner from './footer_2.png'
import React from "react"

export const Footer: React.FC = () => {
    return <Content>
        <Img src={footerBanner} />
    </Content>
}

const Content = styled.div`
    text-align: center;
    padding: 50px;
    background-color: #222222;
`;

const Img = styled.img`
    width: 100%;
    height: auto;
`;