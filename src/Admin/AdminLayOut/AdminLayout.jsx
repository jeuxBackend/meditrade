import React from 'react'
import AdminSidebar from '../../Components/AdminComponents/AdminSidebar/AdminSidebar'
import { Outlet } from 'react-router-dom'

// import ScrollToTop from './ScrollTop'

const AdminLayout = () => {
  return (
    <>
     {/* <ScrollToTop /> */}
   <AdminSidebar/>
   <div className='lg:ml-[295px] '>
<Outlet/>
   </div>
   
    </>
  )
}

export default AdminLayout
