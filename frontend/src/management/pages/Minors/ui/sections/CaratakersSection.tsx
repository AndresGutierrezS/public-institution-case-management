
export const CaretakersSection = () => {
  return (
    <section>
      <div className="px-6 py-5 bg-(--color-secondary) flex justify-between items-center rounded-t-lg">
        <h2 className="text-(--color-principal) font-bold text-lg">
          Progenitores o Tutores
        </h2>
        <button type="button" className="text-sky-600 text-sm font-semibold">
          + Agregar otro
        </button>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-3 py-6 border border-gray-200 rounded-md">
        <div className="flex flex-col">
          <label htmlFor="caretaker-name" className="label">
            Nombre completo
          </label>
          <input
            id="caretaker-name"
            name="caretaker_name"
            type="text"
            className="input"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="caretaker-relationship" className="label">
            Parentesco
          </label>
          <input
            id="caretaker-relationship"
            name="caretaker_relationship"
            type="text"
            className="input"
          />
        </div>
      </div>
    </section>
  )
}
