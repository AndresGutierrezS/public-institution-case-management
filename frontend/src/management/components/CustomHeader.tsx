import { Link } from "react-router-dom";

export const CustomHeader = () => {
    return (
      <header className="bg-(--color-principal) h-20 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-7 h-full flex items-center justify-between">
          
          {/* Left */}
          <div className="flex items-center gap-1">
            <Link to={'/'}>
              <img src="./images/logo.png" alt="Logo" className="w-16 h-11 cursor-pointer" />
            </Link>
            <div>
              <p className="text-lg md:text-xl font-semibold leading-tight">
                Sistema Seguimiento de Gestión de Menores
              </p>
              <p className="text-sm text-blue-100">
                Guadalajara
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 md:gap-7">
            <img src="./images/user.png" alt="User" className="w-9 h-9 rounded-full" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold">Administrador</p>
              <p className="text-xs">Último acceso: 17/07/2025 21:32</p>
            </div>
            <button className="rounded-md border text-sm px-3 py-1.5 cursor-pointer">
              Cerrar sesión
            </button>
          </div>

        </div>
      </header>
    );
}
