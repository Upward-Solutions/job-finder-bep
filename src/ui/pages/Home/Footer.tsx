import styled from "styled-components"
import footerBanner from './footer_2.png'

export const Footer: React.FC = () => {
    return <Content>
        <img src={footerBanner} />
    </Content>
}

const Content = styled.div`
    text-align: center;
    padding: 50px;
    background-color: #222222;
    height: 100px;
`;