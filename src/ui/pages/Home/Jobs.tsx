import styled from "styled-components"
import { Card } from "./Card"
import React from "react"
import { jobsExamples } from './jobsExamples'

export const Jobs: React.FC = () => {
    return (
        <Content>
            {jobsExamples.map(job => <Card key={job.description} job={job}/>)}
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

