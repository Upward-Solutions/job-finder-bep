import styled from "styled-components";
import { styles } from "../../styles";

export const Banner: React.FC = () => {
    return (
        <Content>
            <Title>Bienestar Estudiantil - Psicología UBA</Title>
            <Login>Ingresar</Login>
        </Content>
    )
}

const Content = styled.div`
  display: flex;
  position: sticky;
  top: 10px;
  background-color: ${styles.colors.primary};
  padding: 0.25em 1em;
  border-radius: 20px;
  justify-content: space-between;
  box-shadow: 0px 3px 8px 0px #454545bf;
`;

const Title = styled.h1`
  color: ${styles.colors.white};
  font-size: x-large;
  font-weight: 500;
`;

const Login = styled.button`
  border-radius: 10px;
  padding: 10px;
  border: none;
  height: fit-content;
  align-self: center;
  color: ${styles.colors.white};
  background-color: ${styles.colors.alternative};
  cursor: pointer;
`;