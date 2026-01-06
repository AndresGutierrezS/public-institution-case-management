import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { minorsMock } from "../../mocks/minor.model.mock";

export const CustomPagination = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const queryPage = searchParams.get('page') || '1';
    const page = isNaN(+queryPage) ? 1 : +queryPage; 

    const queryRange = searchParams.get('range') || 5;
    const range = isNaN(+queryRange) ? 8 : +queryRange;

    const totalPages = Math.ceil(minorsMock.length / range);

    const handlePageChange = (page: number) => {
        if(page < 1 && page > totalPages) return;

        searchParams.set('page', page.toString());
        setSearchParams(searchParams);
    }

    return (
        <div className="my-4 flex space-x-3 justify-center items-center text-sm">
            <button 
                className="bg-(--color-secondary) py-1 px-2 cursor-pointer min-w-8 min-h-8 rounded-md"
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
            >
                <ChevronsLeft className="h-4 w-4"/>
            </button>
            {
                Array.from({length: totalPages}).map((_, index) => (
                    <button 
                        key={index} 
                        className={`${page === index + 1 ? 'bg-(--color-principal) text-white ' : 'bg-(--color-secondary) font-semibold hover:bg-blue-200'} py-1 px-2 cursor-pointer min-h-8 min-w-8 rounded-md`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))
            }
            <button 
                className="bg-(--color-secondary) py-1 px-2 cursor-pointer min-h-8 min-w-8 rounded-md"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
            >
                <ChevronsRight className="h-4 w-4"/>
            </button>
        </div>
    );
}