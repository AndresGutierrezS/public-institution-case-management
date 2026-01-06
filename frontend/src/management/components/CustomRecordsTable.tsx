import { Eye, FileText, Pencil } from "lucide-react"
import { minorsMock } from "../../mocks/minor.model.mock";
import { calculateAge } from "../../utils/calculateAge";
import { Link, useSearchParams } from "react-router-dom";

export const CustomRecordsTable = () => {
  
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || undefined; 
  
  const queryPage = searchParams.get('page') || '1';
  const page = isNaN(+queryPage) ? 1 : +queryPage;
  const queryRange = searchParams.get('range') || '8';
  const range = isNaN(+queryRange) ? 8 : +queryRange;

  const start = (page - 1) * range;
  const end = start + range;

  const filteredMinors = !query ?
    minorsMock :
    minorsMock.filter(minor => 
      minor.fullName.toLowerCase().includes(query) ||
      minor.curp.toLowerCase().includes(query) ||
      minor.shelter.name.toLowerCase().includes(query)
    );

  
  return (
    <section className="bg-white rounded-md shadow-sm overflow-hidden">
      
      {/* Table header */}
      <div className="bg-(--color-principal) text-white px-4 py-3 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Registros de menores</h2>
        <Link to={'/minor/new'} className="bg-white text-(--color-principal) text-sm font-semibold px-4 py-2 rounded-md">
          Nuevo registro
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          
          {/* Table head */}
          <thead className="bg-(--color-secondary) text-(--color-principal) text-left border-b">
            <tr>
              <th className="px-3 py-3">Persona menor</th>
              <th className="px-3 py-3 hidden md:table-cell">CURP</th>
              <th className="px-3 py-3 hidden lg:table-cell">Fecha nac.</th>
              <th className="px-3 py-3 hidden lg:table-cell">Fecha ingreso</th>
              <th className="px-3 py-3 hidden md:table-cell">Albergue</th>
              <th className="px-3 py-3 hidden lg:table-cell">Autoridad</th>
              <th className="px-3 py-3">Estado</th>
              <th className="px-3 py-3 text-center">Acciones</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            
            { filteredMinors.slice(start, end).map(minor => (
              <tr key={minor.id} className="border-b last:border-b-0">
                <td className="px-3 py-3">
                  <p className="font-semibold">{minor.fullName}</p>
                  <p className="text-xs text-gray-500">{minor.gender} · {calculateAge(minor.birthday)} años</p>
                </td>

                <td className="px-3 py-3 hidden md:table-cell">
                  {minor.curp}
                </td>

                <td className="px-3 py-3 hidden lg:table-cell">
                  {minor.birthday}
                </td>

                <td className="px-3 py-3 hidden lg:table-cell">
                  {minor.placementDate}
                </td>

                <td className="px-3 py-3 hidden md:table-cell">
                  {minor.shelter.name}
                </td>

                <td className="px-3 py-3 hidden lg:table-cell">
                  {minor.autority}
                </td>

                <td className="px-3 py-3">
                  <span 
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${minor.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                    >
                    {minor.status}
                  </span>
                </td>

                <td className="px-3 py-3">
                  <div className="flex justify-center gap-3">
                    <Link to={`/minor/${minor.curp}`} >
                      <Pencil className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                    </Link>
                    <Link to={`/minor/${minor.curp}`} >
                      <Eye className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                    </Link>
                    <Link to={`/minor/${minor.curp}`} >
                      <FileText className="w-4 h-4 cursor-pointer hover:text-green-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            
          </tbody>

        </table>
      </div>
    </section>
  );
};