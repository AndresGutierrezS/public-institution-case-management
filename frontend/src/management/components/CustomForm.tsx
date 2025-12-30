import { Eye, Pencil, Sheet } from "lucide-react"

export const CustomForm = () => {


    return (
        <div>
            <table className="w-full border border-gray-400 flex flex-col">
                <caption className="bg-(--color-principal) text-white text-lg py-2 px-4 text-start rounded-md">
                    Registro de menores
                    <button className="ml-10">
                        Nuevo Registro
                    </button>
                </caption>
                <thead>
                    <tr className="bg-blue-100 text-(--color-pricipal)">
                        <th>Persona Menor</th>
                        <th>CURP</th>
                        <th>Fecha Nac.</th>
                        <th>Fecha Ingreso</th>
                        <th>Albergue</th>
                        <th>Autoridad</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td>Maria Fernanda</td>
                        <td>324sdfasfewr</td>
                        <td>01/01/2001</td>
                        <td>10/10/2001</td>
                        <td>Casa hogar esperanza</td>
                        <td>DIF municipal</td>
                        <td>Activo</td>
                        <td className="flex">
                            <Pencil />
                            <Eye />
                            <Sheet />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}