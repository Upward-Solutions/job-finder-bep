import styled from "styled-components";
import { styles } from "../../styles";
import { Card } from "./Card";

export const Jobs: React.FC = () => {
    return (
        <Content>
            <Card />
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

