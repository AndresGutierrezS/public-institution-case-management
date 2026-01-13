export const PersonalDataSection = () => {
  return (
    <section>
      <div className="px-6 py-5 bg-(--color-secondary) flex justify-between rounded-t-lg items-center">
        <h2 className="text-(--color-principal) font-bold text-lg">
          Datos Personales del Menor
        </h2>
        <span className="text-sky-700 text-xs px-2.5 py-1 bg-blue-50 rounded-full font-semibold">
          Obligatorio
        </span>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-3 py-6 border border-gray-200 rounded-md">
        <div className="flex flex-col">
          <label htmlFor="first-name" className="label">
            Nombre(s) <span className="text-red-500">*</span>
          </label>
          <input id="first-name" name="first_name" type="text" className="input" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="paternal-last-name" className="label">
            Apellido Paterno <span className="text-red-500">*</span>
          </label>
          <input
            id="paternal-last-name"
            name="paternal_last_name"
            type="text"
            className="input"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="maternal-last-name" className="label">
            Apellido Materno
          </label>
          <input
            id="maternal-last-name"
            name="maternal_last_name"
            type="text"
            className="input"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="curp" className="label">
            CURP <span className="text-red-500">*</span>
          </label>
          <input id="curp" name="curp" type="text" className="input" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="birth-date" className="label">
            Fecha de Nacimiento <span className="text-red-500">*</span>
          </label>
          <input
            id="birth-date"
            name="birth_date"
            type="date"
            className="input"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="gender" className="label">
            Sexo <span className="text-red-500">*</span>
          </label>
          <select id="gender" name="gender" className="input">
            <option value="">Seleccionar...</option>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="nationality" className="label">
            Nacionalidad
          </label>
          <input
            id="nationality"
            name="nationality"
            type="text"
            className="input"
          />
        </div>
      </div>
    </section>
  )
}
