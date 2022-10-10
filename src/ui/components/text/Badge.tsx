import React from "react"
import styled from "styled-components";
import { styles } from '../../styles'

export const Badge: React.FC<Props> = (props) => {
    return <Text>{props.title}</Text>
}

const Text = styled.span`
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    color: ${styles.colors.white};
    width: fit-content;
    font-size: small;
    background-color: ${styles.colors.primary};
`;

interface Props {
    title: string
}