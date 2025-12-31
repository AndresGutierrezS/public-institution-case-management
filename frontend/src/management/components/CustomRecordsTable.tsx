import { Eye, FileText, Pencil } from "lucide-react"

export const CustomRecordsTable = () => {
  return (
    <section className="bg-white rounded-md shadow-sm overflow-hidden">
      
      {/* Table header */}
      <div className="bg-(--color-principal) text-white px-4 py-3 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Registros de menores</h2>
        <button className="bg-white text-(--color-principal) text-sm font-semibold px-4 py-2 rounded-md">
          Nuevo registro
        </button>
      </div>

      {/* Responsive wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          
          {/* Table head */}
          <thead className="bg-blue-100 text-(--color-pricipal) text-left">
            <tr>
              <th className="px-3 py-2">Persona menor</th>
              <th className="px-3 py-2 hidden md:table-cell">CURP</th>
              <th className="px-3 py-2 hidden lg:table-cell">Fecha nac.</th>
              <th className="px-3 py-2 hidden lg:table-cell">Fecha ingreso</th>
              <th className="px-3 py-2 hidden md:table-cell">Albergue</th>
              <th className="px-3 py-2 hidden lg:table-cell">Autoridad</th>
              <th className="px-3 py-2">Estado</th>
              <th className="px-3 py-2 text-center">Acciones</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            <tr className="border-b last:border-b-0">
              <td className="px-3 py-3">
                <p className="font-semibold">María Fernanda López</p>
                <p className="text-xs text-gray-500">Femenino · 8 años</p>
              </td>

              <td className="px-3 py-3 hidden md:table-cell">
                LOGF020101HDFRRA8
              </td>

              <td className="px-3 py-3 hidden lg:table-cell">
                01/01/2015
              </td>

              <td className="px-3 py-3 hidden lg:table-cell">
                15/03/2023
              </td>

              <td className="px-3 py-3 hidden md:table-cell">
                Casa Hogar Esperanza
              </td>

              <td className="px-3 py-3 hidden lg:table-cell">
                DIF Municipal
              </td>

              <td className="px-3 py-3">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                  ACTIVO
                </span>
              </td>

              <td className="px-3 py-3">
                <div className="flex justify-center gap-3">
                  <Pencil className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                  <Eye className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                  <FileText className="w-4 h-4 cursor-pointer hover:text-green-600" />
                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </section>
  );
};