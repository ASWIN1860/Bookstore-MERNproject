import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function BookList() {
  return (
    <>
      <AdminHeader/>
      <div className='min-h-[60vh] md:grid grid-cols-5'>
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        <div className='col-span-4'>
          Booklist
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default BookList