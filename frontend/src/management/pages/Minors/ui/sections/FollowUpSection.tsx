

export const FollowUpSection = () => {
  return (
    <section>
      <div className="px-6 py-5 bg-(--color-secondary) rounded-t-lg">
        <h2 className="text-(--color-principal) font-bold text-lg">
          Seguimiento
        </h2>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-3 py-6 border border-gray-200 rounded-md">
        {[
          { id: "legal-follow-up", name: "legal_follow_up", label: "Seguimiento Jurídico" },
          { id: "psychological-follow-up", name: "psychological_follow_up", label: "Seguimiento Psicológico" },
          { id: "social-follow-up", name: "social_work_follow_up", label: "Seguimiento Trabajo Social" },
        ].map(({ id, name, label }) => (
          <div key={id} className="flex flex-col">
            <label htmlFor={id} className="label">{label}</label>
            <select id={id} name={name} className="input">
              <option value="">Seleccionar...</option>
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
        ))}
      </div>
    </section>
  )
}
