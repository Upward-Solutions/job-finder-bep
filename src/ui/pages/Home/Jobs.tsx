import styled from "styled-components";
import { styles } from "../../styles";

export const Jobs: React.FC = () => {
    return (
        <Content>
            <Card>
                <Body>
                    <Title>APadeA Asociación Argentina de Padres de Autistas</Title>
                    <h3>Descripción</h3>
                    <p>
                        Búsqueda de profesionales independientes para el Área de Acompañamiento Escolar.
                        -Estudiantes avanzados con =/+ del 80% de la carrera aprobada o profesionales recibidos
                        en Psicología/Psicopedagogía o Fonoaudiología. -Profesor Especial o afines
                        con experiencia en terapias Cognitivo Conductual con título. IMPORTANTE:
                        Precisa curso AT solo en GBA. Zonas CABA y GBA (Zonas Norte, Oeste y Sur). Turnos mañana y tarde.
                    </p>
                    <h3>Cargo</h3>
                    <p>Integración escolar</p>
                </Body>
                <Actions>
                    <Terms>Requisitos</Terms>
                    <Apply>Postularme</Apply>
                </Actions>
            </Card>
            <Card>
                <Body>
                    <Title>Luderé</Title>
                    <h3>Descripción</h3>
                    <p>
                        Acompañante terapéutico/a.
                    </p>
                    <h3>Cargo</h3>
                    <p>Acompañante terapéutico/a.</p>
                </Body>
                <Actions>
                    <Terms>Requisitos</Terms>
                    <Apply>Postularme</Apply>
                </Actions>
            </Card>
            <Card>
                <Body>
                    <Title>APadeA Asociación Argentina de Padres de Autistas</Title>
                    <h3>Descripción</h3>
                    <p>
                        Búsqueda de profesionales independientes para el Área de Acompañamiento Escolar.
                        -Estudiantes avanzados con =/+ del 80% de la carrera aprobada o profesionales recibidos
                        en Psicología/Psicopedagogía o Fonoaudiología. -Profesor Especial o afines
                        con experiencia en terapias Cognitivo Conductual con título. IMPORTANTE:
                        Precisa curso AT solo en GBA. Zonas CABA y GBA (Zonas Norte, Oeste y Sur). Turnos mañana y tarde.
                    </p>
                    <h3>Cargo</h3>
                    <p>Integración escolar</p>
                </Body>
                <Actions>
                    <Terms>Requisitos</Terms>
                    <Apply>Postularme</Apply>
                </Actions>
            </Card>
            <Card>
                <Body>
                    <Title>Luderé</Title>
                    <h3>Descripción</h3>
                    <p>
                        Acompañante terapéutico/a.
                    </p>
                    <h3>Cargo</h3>
                    <p>Acompañante terapéutico/a.</p>
                </Body>
                <Actions>
                    <Terms>Requisitos</Terms>
                    <Apply>Postularme</Apply>
                </Actions>
            </Card>
            <Card>
                <Body>
                    <Title>APadeA Asociación Argentina de Padres de Autistas</Title>
                    <h3>Descripción</h3>
                    <p>
                        Búsqueda de profesionales independientes para el Área de Acompañamiento Escolar.
                        -Estudiantes avanzados con =/+ del 80% de la carrera aprobada o profesionales recibidos
                        en Psicología/Psicopedagogía o Fonoaudiología. -Profesor Especial o afines
                        con experiencia en terapias Cognitivo Conductual con título. IMPORTANTE:
                        Precisa curso AT solo en GBA. Zonas CABA y GBA (Zonas Norte, Oeste y Sur). Turnos mañana y tarde.
                    </p>
                    <h3>Cargo</h3>
                    <p>Integración escolar</p>
                </Body>
                <Actions>
                    <Terms>Requisitos</Terms>
                    <Apply>Postularme</Apply>
                </Actions>
            </Card>
            <Card>
                <Body>
                    <Title>Luderé</Title>
                    <h3>Descripción</h3>
                    <p>
                        Acompañante terapéutico/a.
                    </p>
                    <h3>Cargo</h3>
                    <p>Acompañante terapéutico/a.</p>
                </Body>
                <Actions>
                    <Terms>Requisitos</Terms>
                    <Apply>Postularme</Apply>
                </Actions>
            </Card>
            <Card>
                <Body>
                    <Title>APadeA Asociación Argentina de Padres de Autistas</Title>
                    <h3>Descripción</h3>
                    <p>
                        Búsqueda de profesionales independientes para el Área de Acompañamiento Escolar.
                        -Estudiantes avanzados con =/+ del 80% de la carrera aprobada o profesionales recibidos
                        en Psicología/Psicopedagogía o Fonoaudiología. -Profesor Especial o afines
                        con experiencia en terapias Cognitivo Conductual con título. IMPORTANTE:
                        Precisa curso AT solo en GBA. Zonas CABA y GBA (Zonas Norte, Oeste y Sur). Turnos mañana y tarde.
                    </p>
                    <h3>Cargo</h3>
                    <p>Integración escolar</p>
                </Body>
                <Actions>
                    <Terms>Requisitos</Terms>
                    <Apply>Postularme</Apply>
                </Actions>
            </Card>
            <Card>
                <Body>
                    <Title>Luderé</Title>
                    <h3>Descripción</h3>
                    <p>
                        Acompañante terapéutico/a.
                    </p>
                    <h3>Cargo</h3>
                    <p>Acompañante terapéutico/a.</p>
                </Body>
                <Actions>
                    <Terms>Requisitos</Terms>
                    <Apply>Postularme</Apply>
                </Actions>
            </Card>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
  width: 400px;
  padding: 20px;
  box-shadow: 0px 3px 8px 0px #454545bf;
  border-radius: 20px;
  margin: 20px 0;
`;

const Body = styled.div`
`;

const Title = styled.h1`
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Apply = styled.button`
  border-radius: 10px;
  padding: 10px;
  border: none;
  height: fit-content;
  align-self: center;
  color: ${styles.colors.white};
  background-color: ${styles.colors.alternative};
  font-size: medium;
  cursor: pointer;
`;

const Terms = styled.button`
  border-radius: 10px;
  padding: 10px;
  border: none;
  height: fit-content;
  font-size: medium;
  align-self: center;
  color: ${styles.colors.white};
  background-color: ${styles.colors.primary};
  cursor: pointer;
`;
