import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function Dashboard() {
  return (
    <>
      <AdminHeader/>
      <div className='min-h-[60vh] md:grid grid-cols-5'>
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        <div className='col-span-4'>
          Dashboard
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Dashboard