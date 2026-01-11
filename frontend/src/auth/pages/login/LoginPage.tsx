import { Link } from "react-router-dom"

export const LoginPage = () => {
  return (
    <>
      <p className='text-center mb-6 text-lg text-gray-700'>
        Inserte sus credenciales para ingresar
      </p>

      <div className='flex flex-col gap-4'>
        <input 
          type="text"
          placeholder="Nombre de usuario"
          className='w-full p-2.5 shadow-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-principal)' 
        />

        <input 
          type="text"
          placeholder="Contraseña personal" 
          className="w-full p-2.5 shadow-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-principal)"
        />

        <button
          className="text-white bg-(--color-principal) rounded-md font-semibold p-2.5 hover:opacity-90 transition cursor-pointer"
        >
          Acceder
        </button>
      </div>

      <p className="text-sm text-center text-gray-600 mt-5">
        ¿No tienes una cuenta?{" "}
        <Link
          to="/auth/register"
          className="text-(--color-principal) font-semibold hover:underline"
        >
          Registrarse
        </Link>
      </p>
    </>
  )
}
