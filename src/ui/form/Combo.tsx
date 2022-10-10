import React from "react"
import styled from "styled-components"
import { styles } from "../styles"

export const Combo: React.FC<Props> = (props) => {
    return (
        <>
            <Input list="browsers" />
            <datalist id="browsers">
                {props.options.map(option => <option value={option} key={option} />)}
            </datalist>
        </>
    )
}

const Input = styled.input`
    outline: none;
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: .5px solid ${styles.colors.alternative};
`;

interface Props {
    options: string[]
}