
export type ProfileFieldData = {
    label: string,
    value: string,
}

export type ProfileSectionData = {
    title: string,
    fields: ProfileFieldData[],
}



export const minorProfileSections: ProfileSectionData[] = [
  {
    title: "Datos Personales",
    fields: [
      { label: "Nombre Completo", value: "Juan Pérez López" },
      { label: "CURP", value: "CURPJUANPEREZ1234" },
      { label: "Fecha de Nacimiento", value: "2010-05-15" },
      { label: "Sexo", value: "Masculino" },
      { label: "Nacionalidad", value: "Mexicana" },
    ],
  },
  {
    title: "Datos de Ingreso",
    fields: [
      { label: "Fecha de Ingreso", value: "2025-08-01" },
      { label: "Albergue Actual", value: "Albergue Infantil Esperanza" },
      { label: "Autoridad que Ingresó", value: "DIF Estatal" },
      { label: "Motivo de Ingreso", value: "Situación de vulnerabilidad" },
    ],
  },
  {
    title: "Progenitores o Tutores",
    fields: [
      { label: "Padre", value: "Juan Pérez García" },
      { label: "Estado (Padre)", value: "Vivo" },
      { label: "Teléfono (Padre)", value: "5512345678" },
      { label: "Madre", value: "María López Ramírez" },
      { label: "Estado (Madre)", value: "Vivo" },
      { label: "Teléfono (Madre)", value: "5598765432" },
    ],
  },
  {
    title: "Expediente Judicial",
    fields: [
      { label: "Autoridad Judicial", value: "Juzgado de Menores No. 5" },
      { label: "Estado Procesal", value: "En curso" },
      { label: "Fecha de Inicio", value: "2024-01-15" },
      { label: "Carpeta de Investigación", value: "CI-2024-001" },
      {
        label: "Observaciones",
        value:
          "El menor está bajo seguimiento judicial por incidente menor.",
      },
    ],
  },
  {
    title: "Seguimiento",
    fields: [
      {
        label: "Seguimiento Jurídico",
        value: "Activo – El menor tiene seguimiento jurídico",
      },
      {
        label: "Seguimiento Psicológico",
        value: "Activo – El menor tiene seguimiento psicológico",
      },
      {
        label: "Seguimiento Trabajo Social",
        value: "Inactivo – El menor no tiene seguimiento social",
      },
    ],
  },
  {
    title: "Ubicación Actual",
    fields: [
      { label: "Tipo de Ubicación", value: "Albergue" },
      { label: "Nombre", value: "Casa Hogar Esperanza" },
      { label: "Estatus", value: "Temporal" },
      {
        label: "Dirección",
        value: "Av. Siempre Viva 742, Col. Flores, CDMX",
      },
    ],
  },
]