

export const AdmissionDataSection = () => {
  return (
    <section>
      <div className="px-6 py-5 bg-(--color-secondary) flex justify-between rounded-t-lg items-center">
        <h2 className="text-(--color-principal) font-bold text-lg">
          Datos de Ingreso
        </h2>
        <span className="text-sky-700 text-xs px-2.5 py-1 bg-blue-50 rounded-full font-semibold">
          Obligatorio
        </span>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-3 py-6 border border-gray-200 rounded-md">
        <div className="flex flex-col">
          <label htmlFor="admission-date" className="label">
            Fecha de Ingreso <span className="text-red-500">*</span>
          </label>
          <input
            id="admission-date"
            name="admission_date"
            type="date"
            className="input"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="shelter" className="label">
            Albergue <span className="text-red-500">*</span>
          </label>
          <select id="shelter" name="shelter_id" className="input">
            <option value="">Seleccionar...</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="admitting-authority" className="label">
            Autoridad que Ingresa <span className="text-red-500">*</span>
          </label>
          <select
            id="admitting-authority"
            name="admitting_authority_id"
            className="input"
          >
            <option value="">Seleccionar...</option>
          </select>
        </div>

        <div className="flex flex-col lg:col-span-3">
          <label htmlFor="admission-reason" className="label">
            Motivo de Ingreso
          </label>
          <textarea
            id="admission-reason"
            name="admission_reason"
            className="input min-h-24"
          />
        </div>
      </div>
    </section>
  )
}
