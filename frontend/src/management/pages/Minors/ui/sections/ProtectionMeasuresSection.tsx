

export const ProtectionMeasuresSection = () => {
  return (
    <section>
      <div className="px-6 py-5 bg-(--color-secondary) flex justify-between items-center rounded-t-lg">
        <h2 className="text-(--color-principal) font-bold text-lg">
          Medidas de Protección
        </h2>
        <button type="button" className="text-sky-600 text-sm font-semibold">
          + Agregar otra medida
        </button>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-3 py-6 border border-gray-200 rounded-md">
        <select
          id="protection-measure-type"
          name="protection_measure_type"
          className="input"
        >
          <option value="">Tipo de Medida</option>
        </select>

        <input
          id="protection-start-date"
          name="protection_start_date"
          type="date"
          className="input"
        />

        <select
          id="protection-status"
          name="protection_status"
          className="input"
        >
          <option value="">Estado</option>
        </select>
      </div>
    </section>
  )
}
