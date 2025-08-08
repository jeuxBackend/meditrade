import React from 'react'
import AdminSidebar from '../Components/AdminComponents/AdminSidebar/AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
   <AdminSidebar/>
   <Outlet/>
    </>
  )
}

export default AdminLayout
