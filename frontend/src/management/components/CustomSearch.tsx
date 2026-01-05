import { Search } from "lucide-react"
import { useRef } from "react"
import { useSearchParams } from "react-router-dom";


export const CustomSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const inputRef = useRef<HTMLInputElement>(null);
  const query = searchParams.get('query') || '';

  const handleSearch = () => {
    const query = inputRef.current?.value.trim() ?? '';
    const newParams = new URLSearchParams(searchParams);

    if(!query) {
      newParams.delete('query');
    } else {
      newParams.set('query', query);
    }

    setSearchParams(newParams);
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  }

  
  return (
    <div className="my-5">
      <div className="px-5 py-3 bg-white rounded-md">
        
        <div className="flex flex-col sm:flex-row gap-2">
          
          {/* Input container */}
          <div className="flex text-gray border border-gray-300 rounded-md w-full items-center px-2.5">
            <Search size={18} className="text-gray-400"/>
            <input 
              type="text"
              ref={inputRef}
              className="w-full px-2 py-2 text-sm outline-none" 
              placeholder={'Buscar por nombre, CURP o albergue...'}
              onKeyDown={handleOnKeyDown}
              defaultValue={query}
            />
          </div>

          {/* Button */}
          <button 
            className="text-white text-sm rounded-md border-gray-300 bg-(--color-principal) py-2 px-3.5 w-full sm:w-auto"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>

      </div>
    </div>
  )
}
