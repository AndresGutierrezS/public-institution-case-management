import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-(--color-page-bg) relative">
      
      <div className="absolute top-6 left-6">
        <img src="images/logo.png" alt="Logo" className="w-40"/>
      </div>
      
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="font-bold text-2xl sm:text-3xl text-gray-800 mb-8 text-center">
          Acceso al Sistema de Gestión de Menores
        </h1>

        <div className="bg-white w-full max-w-md rounded-lg shadow-md p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
