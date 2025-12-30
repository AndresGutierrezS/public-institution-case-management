import { Search } from "lucide-react"


export const CustomSearch = () => {
  return (
    <div className="my-5">
      <div className="px-5 py-3 bg-white rounded-md">
        
        <div className="flex flex-col sm:flex-row gap-2">
          
          {/* Input container */}
          <div className="flex text-gray border border-gray-300 rounded-md w-full items-center px-2.5">
            <Search size={18} className="text-gray-400"/>
            <input 
              type="text"
              className="w-full px-2 py-2 text-sm outline-none" 
              placeholder={'Buscar por nombre, CURP o albergue...'}
            />
          </div>

          {/* Button */}
          <button className="text-white text-sm rounded-md border-gray-300 bg-(--color-principal) py-2 px-3.5 w-full sm:w-auto">
            Buscar
          </button>
        </div>

      </div>
    </div>
  )
}
