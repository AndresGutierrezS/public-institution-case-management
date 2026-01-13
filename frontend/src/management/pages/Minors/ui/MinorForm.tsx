import { Link } from "react-router-dom"
import { PersonalDataSection } from "./sections/PersonalDataSection"
import { AdmissionDataSection } from "./sections/AdmisionDataSection"
import { CaretakersSection } from "./sections/CaratakersSection"
import { JudicialRecordSection } from "./sections/JudicialRecordSection"
import { FollowUpSection } from "./sections/FollowUpSection"
import { ProtectionMeasuresSection } from "./sections/ProtectionMeasuresSection"
import { EscapeRecordsSection } from "./sections/EscapeRecordsSection"
import { CurrentLocationSection } from "./sections/CurrentLocationSection"


export const MinorForm = () => {


    return (
        <form>
            <div className="my-6 p-6 bg-white flex flex-col gap-6 rounded-xl">
                {/* Jumbotron */}
                <div className="flex justify-between border-b-2 border-gray-200 py-3">
                    <h1 className="font-bold text-(--color-principal) text-2xl">Nuevo Registro de Menor</h1>
                    <Link to={'/'}>
                        <button className="px-5 py-2 text-sm text-(--color-principal) bg-(--color-secondary) rounded-md hover:bg-gray-700 hover:text-white hover:transition font-semibold">
                            Cancelar
                        </button>
                    </Link>
                </div>

                {/* Warning */}
                <p className="px-5 py-3 bg-blue-50 text-sky-700 border-l-4 border-sky-700 text-md rounded-sm">
                    Los campos marcados con * son obligatorios.
                </p>

                {/* Sections */}
                <PersonalDataSection />
                <AdmissionDataSection />
                <CaretakersSection />
                <JudicialRecordSection />
                <FollowUpSection />
                <ProtectionMeasuresSection />
                <CurrentLocationSection />
                <EscapeRecordsSection />

                {/* Action buttons */}
                <div className="flex flex-col md:flex-row md:justify-end gap-4 mt-4">
                    <Link to={'/'}>
                        <button className="px-5 py-2 text-sm text-(--color-principal) bg-(--color-secondary) rounded-md hover:bg-gray-700 hover:text-white hover:transition font-semibold w-full">
                            Cancelar
                        </button>
                    </Link>
                    <Link to={'/'}>
                        <button className="px-5 py-2 text-sm text-white bg-(--color-principal) rounded-md hover:bg-cyan-950 hover:transition font-semibold w-full">
                            Guardar Registro
                        </button>
                    </Link>
                </div>
            </div>
        </form>
    )
}