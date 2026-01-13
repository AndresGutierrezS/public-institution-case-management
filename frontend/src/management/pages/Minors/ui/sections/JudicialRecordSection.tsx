

export const JudicialRecordSection = () => {
  return (
    <section>
      <div className="px-6 py-5 bg-(--color-secondary) rounded-t-lg">
        <h2 className="text-(--color-principal) font-bold text-lg">
          Expediente Judicial
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-3 py-6 border border-gray-200 rounded-md">
        <select
          id="judicial-authority"
          name="judicial_authority_id"
          className="input"
        >
          <option value="">Autoridad Judicial</option>
        </select>

        <select
          id="procedural-status"
          name="procedural_status"
          className="input"
        >
          <option value="">Estado Procesal</option>
        </select>

        <input
          id="process-start-date"
          name="process_start_date"
          type="date"
          className="input"
        />

        <input
          id="investigation-file"
          name="investigation_file"
          type="text"
          className="input lg:col-span-3"
          placeholder="Carpeta de Investigación"
        />

        <textarea
          id="judicial-notes"
          name="judicial_notes"
          className="input lg:col-span-3 min-h-24"
          placeholder="Observaciones"
        />
      </div>
    </section>
  )
}
