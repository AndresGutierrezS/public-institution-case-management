import { Eye, Pencil, Sheet } from "lucide-react"

export const CustomForm = () => {


    return (
        <div>
            <table className="w-full flex flex-col">
                <caption className="bg-(--color-principal) text-white py-2.5 px-4 text-start rounded-t-md flex justify-between">
                    <p className="text-lg">Registros de menores</p>
                    <button className="bg-white text-(--color-principal) text-sm font-bold px-4 py-2 rounded-md cursor-pointer">
                        Nuevo Registro
                    </button>
                </caption>
                <thead className="">
                    <tr className="bg-blue-100 text-(--color-pricipal) flex justify-around p-2.5 border-b-2">
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
                    <tr className="bg-white flex justify-around items-center p-2.5 border-b border-gray-400">
                        <td>
                            <p className="font-bold">Maria Fernanda</p>
                            <p className="text-sm">Femenino - 8 anios</p>
                        </td>
                        <td>324sdfasfewr</td>
                        <td>01/01/2001</td>
                        <td>10/10/2001</td>
                        <td>Casa hogar esperanza</td>
                        <td>DIF municipal</td>
                        <td className="bg-green-200 text-green-800 rounded-2xl px-2 py-0.5">
                            Activo
                        </td>
                        <td className="flex gap-2">
                            <Pencil className="cursor-pointer"/>
                            <Eye className="cursor-pointer"/>
                            <Sheet className="cursor-pointer"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}