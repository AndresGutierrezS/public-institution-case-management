import { Outlet } from "react-router-dom"
import { CustomHeader } from "../components/CustomHeader"

export const ManagementLayout = () => {
  return (
    <>
      <CustomHeader />
      <Outlet />
    </>
  )
}
