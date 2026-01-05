import { ChevronsLeft, ChevronsRight } from "lucide-react";

export const CustomPagination = () => {


    return (
        <div className="my-4 flex space-x-3 justify-center items-center text-sm">
            <button className="bg-(--color-secondary) py-1 px-2 cursor-pointer min-w-8 min-h-8 rounded-md">
                <ChevronsLeft className="h-4 w-4"/>
            </button>
            <button className="bg-(--color-principal) text-white py-1 px-2 cursor-pointer min-h-8 min-w-8 rounded-md">1</button>
            <button className="bg-(--color-secondary) py-1 px-2 cursor-pointer min-h-8 min-w-8 rounded-md">
                <ChevronsRight className="h-4 w-4"/>
            </button>
        </div>
    );
}