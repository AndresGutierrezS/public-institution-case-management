import type { Minor } from "../../mocks/minor.model.mock"
import { calculateAge } from "../../utils/calculateAge"


interface Props {
  minor: Minor;
}

export const MinorSummaryCard = ({minor}: Props) => {
  
  return (
    <section className="bg-white my-6 p-6 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
        
        <img
          src="/images/user.png"
          alt="Minor Image"
          className="w-20 h-20 sm:w-24 sm:h-24 border-4 rounded-full border-gray-200"
        />

        <div className="text-gray-600 flex flex-col gap-1 text-center sm:text-left">
          <p className="font-bold text-xl sm:text-2xl text-(--color-principal)">
            {minor.fullName}
          </p>

          <p className="text-sm">
            Curp: {minor.curp} · Edad: {calculateAge(minor.birthday)} anios · Sexo: {minor.gender}
          </p>

          <p className={`${minor.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-shadow-red-700'}  px-3 py-1 rounded-2xl text-xs w-fit mx-auto sm:mx-0`}>
            {minor.status}
          </p>

          <p className="text-sm">
            Registro: {minor.placementDate}
          </p>
        </div>
      </div>
    </section>
  )
}
