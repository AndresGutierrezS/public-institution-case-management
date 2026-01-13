

export const CurrentLocationSection = () => {
  return (
    <section>
      <div className="px-6 py-5 bg-(--color-secondary) flex justify-between rounded-t-lg items-center">
        <h2 className="text-(--color-principal) font-bold text-lg">
          Ubicación Actual
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-3 py-6 border border-gray-200 rounded-md">
        <div className="flex flex-col">
          <label htmlFor="location-type" className="label">
            Tipo de Ubicación
          </label>
          <select
            id="location-type"
            name="location_type"
            className="input"
          >
            <option value="">Seleccionar...</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="location-name" className="label">
            Nombre (Albergue/Familiar)
          </label>
          <input
            id="location-name"
            name="location_name"
            type="text"
            className="input"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="relationship" className="label">
            Parentesco (si aplica)
          </label>
          <input
            id="relationship"
            name="relationship"
            type="text"
            className="input"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location-status" className="label">
            Estatus
          </label>
          <select
            id="location-status"
            name="location_status"
            className="input"
          >
            <option value="">Seleccionar...</option>
          </select>
        </div>

        <div className="flex flex-col lg:col-span-3 md:col-span-2 col-span-1">
          <label htmlFor="location-address" className="label">
            Dirección
          </label>
          <input
            id="location-address"
            name="location_address"
            type="text"
            className="input"
          />
        </div>
      </div>
    </section>
  )
}
