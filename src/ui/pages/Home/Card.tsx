import styled from "styled-components";
import { styles } from "../../styles";
import React from "react";
import { Badge } from "../../components/Badge";
import { BiMap, BiTimeFive, BiDownArrowCircle } from "react-icons/bi";
import { AiOutlineWarning } from "react-icons/ai";
import { Job as JobModel } from '../../../models/Job'

export const Card: React.FC<Props> = (props) => {
    const job = props.job
    return (
        <Content>
            <Body>
                <Title>{job.company}</Title>
                <Job>
                    <BiDownArrowCircle />
                    {job.position} <br />
                    <BiTimeFive />
                    {job.time} <br />
                    <BiMap />
                    {job.place}
                </Job>
                <Description>{job.description}</Description>
                <Job><AiOutlineWarning />Requisitos</Job>
                <Requirements>
                    {
                        job.requirements.map(req => <Badge title={req} key={req} />)
                    }
                </Requirements>
            </Body>
            <Apply>Postularme</Apply>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    padding: 20px;
    box-shadow: 0 2px 3px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%);
    border-radius: 20px;
    margin: 20px 0;

    &:hover {
        box-shadow: 2px 2px 13px 1px rgb(0 0 0 / 36%);
        transition: all ease-in-out 300ms;
    }
`;

const Body = styled.div`
`;

const Requirements = styled.div`
    display: flex;
    gap: 5px;
    margin: 5px auto;
`;

const Job = styled.p`
    font-size: x-small;
    font-weight: 300;
    color: #8d8c8c;
    padding: auto;
`;

const Description = styled.p`
    text-align: justify;
`;

const Title = styled.h1`
    margin: 0 auto 10px;
`;

const Apply = styled.button`
  border-radius: 10px;
  padding: 10px;
  border: none;
  height: fit-content;
  text-transform: uppercase;
  width: 100%;
  align-self: center;
  color: ${styles.colors.white};
  background-color: ${styles.colors.alternative};
  font-size: medium;
  cursor: pointer;

  &:active {
    background-color: #492b59;
  }
`;

interface Props {
    job: JobModel;
}