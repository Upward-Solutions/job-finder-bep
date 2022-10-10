import styled from "styled-components"
import { Card } from "./Card"
import React from "react"
import { jobsExamples } from './jobsExamples'

export const Jobs: React.FC = () => {
    return (
        <Content>
            {jobsExamples.map((job, idx) => <Card key={idx} job={job}/>)}
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

