import { Outlet } from "react-router-dom"
import { CustomHeader } from "../components/CustomHeader"
import { CustomFooter } from "../components/CustomFooter"

export const ManagementLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomHeader />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 md:px-7">
          <Outlet />
        </div>
      </main>
      <CustomFooter />
    </div>
  )
}
