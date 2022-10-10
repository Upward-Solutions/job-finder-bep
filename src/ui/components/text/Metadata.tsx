import styled from "styled-components"
import React from "react"

export const Metadata: React.FC<Props> = (props) => {
    return (
        <Content>
            <Icon>{props.icon}</Icon>
            <Text>{props.content}</Text>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

const Text = styled.p`
    font-size: x-small;
    font-weight: 300;
    color: #8d8c8c;
    padding: auto;
    margin: 2px 0;
    font-family: 'Robot';
`;

const Icon = styled.p`
    font-size: x-small;
    font-weight: 300;
    color: #8d8c8c;
    padding: auto;
    margin: 2px 0;
    font-family: 'Robot';
`;

interface Props {
    icon: JSX.Element,
    content: string
}