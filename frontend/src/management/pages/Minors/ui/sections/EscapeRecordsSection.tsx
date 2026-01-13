

export const EscapeRecordsSection = () => {
  return (
    <section>
      <div className="px-6 py-5 bg-(--color-secondary) flex justify-between rounded-t-lg items-center">
        <h2 className="text-(--color-principal) font-bold text-lg">
          Registro de Fugas
        </h2>
        <button
          type="button"
          className="text-sky-700 text-xs px-2.5 py-1 bg-blue-50 rounded-full font-semibold"
        >
          + Agregar otro registro de fuga
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-3 py-6 border border-gray-200 rounded-md">
        <div className="flex flex-col">
          <label htmlFor="escape-date" className="label">
            Fecha
          </label>
          <input
            id="escape-date"
            name="escape_date"
            type="date"
            className="input"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="escape-status" className="label">
            Estatus
          </label>
          <select
            id="escape-status"
            name="escape_status"
            className="input"
          >
            <option value="">Seleccionar...</option>
          </select>
        </div>

        <div className="flex flex-col lg:col-span-3 md:col-span-2 col-span-1">
          <label htmlFor="escape-description" className="label">
            Descripción
          </label>
          <input
            id="escape-description"
            name="escape_description"
            type="text"
            className="input"
          />
        </div>
      </div>
    </section>
  )
}
