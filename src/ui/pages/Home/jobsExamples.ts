import { Job } from "../../../models/Job"
import { Requirements } from "../../../models/Requirements"

const job1 = new Job(
    1537,
    "APadeA Asociación Argentina de Padres de Autistas",
    "Búsqueda de profesionales independientes para el Área de Acompañamiento Escolar. -Estudiantes avanzados con =/+ del 80% de la carrera aprobada o profesionales recibidos en Psicología/Psicopedagogía o Fonoaudiología. -Profesor Especial o afines con experiencia en terapias Cognitivo Conductual con título. IMPORTANTE: Precisa curso AT solo en GBA. Zonas CABA y GBA (Zonas Norte, Oeste y Sur). Turnos mañana y tarde.",
    "Integración escolar",
    "Turnos mañana y tarde",
    "CABA. PBA: Zona Sur, Oeste y Norte.",
    [Requirements.At]
)

const job2 = new Job(
    1536,
    "Luderé",
    "Acompañante terapéutico/a.",
    "Acompañante terapéutico/a",
    "Lunes a Viernes de 13 a 17 hs",
    "CABA",
    [Requirements.At]
)

const job3 = new Job(
    1535,
    "Luderé",
    "Acompañante terapéutico/a.",
    "Acompañante terapéutico/a",
    "Lunes a Viernes de 8 a 12 hs",
    "CABA",
    [Requirements.At]
)

const job4 = new Job(
    1534,
    "Luderé",
    "Maestro/a de apoyo / Acompañante personal no docente / Maestro/a integrador/a",
    "Integración escolar",
    "Lunes a Viernes de 13 a 17 hs",
    "CABA",
    [Requirements.At, Requirements.Psicopatologia]
)

const job5 = new Job(
    1533,
    "Luderé",
    "Maestro/a de apoyo / Acompañante personal no docente / Maestro/a integrador/a",
    "Integración escolar",
    "Lunes a Viernes de 8 a 12 hs",
    "CABA",
    [Requirements.At, Requirements.Psicopatologia]
)

const job6 = new Job(
    1532,
    "APAdeA",
    "Se busca estudiante avanzado de Psicología o Graduado para desempeñarse como Acompañante escolar para acompañar a un niño de 3 años en el Jardin Nenelandya en la zona de Malaver, de lunes a viernes en el turno mañana. Nomenclador + Plus. Seguros a cargo del centro.",
    "Integración escolar",
    "Lunes a Viernes de 7:45 a 12 hs",
    "Malaver, Partido de Villa Ballester.",
    [Requirements.Psicometricas]
)

export const jobsExamples = [job1, job2, job3, job4, job5, job6]