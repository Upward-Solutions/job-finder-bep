import styled from "styled-components";
import { styles } from "../../styles";

export const Card: React.FC = () => {
    return (
        <Content>
            <Body>
                <Title>APadeA Asociación Argentina de Padres de Autistas</Title>
                <Job>Integración escolar</Job>
                <Description>
                    Búsqueda de profesionales independientes para el Área de Acompañamiento Escolar.
                    -Estudiantes avanzados con =/+ del 80% de la carrera aprobada o profesionales recibidos
                    en Psicología/Psicopedagogía o Fonoaudiología. -Profesor Especial o afines
                    con experiencia en terapias Cognitivo Conductual con título. IMPORTANTE:
                    Precisa curso AT solo en GBA. Zonas CABA y GBA (Zonas Norte, Oeste y Sur). Turnos mañana y tarde.
                </Description>
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

const Job = styled.p`
    font-size: x-small;
    font-weight: 300;
    color: #8d8c8c;
`;

const Description = styled.p`
    text-align: justify;
`;

const Title = styled.h1`
    margin-bottom: 10px;
`;

const Apply = styled.button`
  border-radius: 10px;
  padding: 10px;
  border: none;
  height: fit-content;
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
