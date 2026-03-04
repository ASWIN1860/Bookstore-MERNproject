import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'

function Booklist() {
  const [bookstatus, setbookstatus] = useState(true)
  const [userstatus, setuserstatus] = useState(false)

  return (
    <>
      <AdminHeader />
      <div className='min-h-[60vh] grid grid-cols-4'>
        
        <div className="col-span-1">
          <AdminSidebar />
        </div>

        <div className="col-span-3">
          <h2 className='text-center text-2xl my-5'>Resources</h2>

          {/* Tabs */}
          <div className='flex justify-center items-center'>

            <div
              onClick={() => {
                setbookstatus(true)
                setuserstatus(false)
              }}
              className={
                bookstatus
                  ? 'p-3 border-l border-r border-t rounded-t-sm border-gray-600 text-blue-600'
                  : 'p-3 border-b border-gray-600 cursor-pointer'
              }
            >
              All Books
            </div>

            <div
              onClick={() => {
                setbookstatus(false)
                setuserstatus(true)
              }}
              className={
                userstatus
                  ? 'p-3 border-l border-r border-t rounded-t-sm border-gray-600 text-blue-600'
                  : 'p-3 border-b border-gray-600 cursor-pointer'
              }
            >
              Users
            </div>

          </div>

          {/* BOOKS SECTION */}
          {bookstatus && (
            <div className='px-10 py-5 flex flex-wrap justify-around gap-4'>

              <div className='p-1 w-[70%] md:w-[16rem] shadow-xl text-center'>
                <img
                  src="https://imgs.search.brave.com/Wx962ZC13iRwUEwSmyGGQJ3MS2IgyDTOwT5p2pTvGS0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTE2RE02S3VYS0wu/anBn"
                  alt="no img"
                  style={{ height: "300px", width: '100%' }}
                />
                <h2 className='text-lg'>Harry potter</h2>
                <p>Lorem ipsum....</p>
                <h4 className='text-lg text-blue-600'>$40</h4>
                <button className='bg-green-500 text-white border border-green-500 w-full py-2 hover:bg-white hover:text-blue-900'>
                  Approve
                </button>
                
              </div>
              

            </div>
          )}

          {/* USERS SECTION */}
          {userstatus && (
            <div className='px-10 py-5 flex flex-wrap justify-around gap-4'>

              <div className='max-w-[16rem] border bg-gray-300 py-2 px-4'>
                <h1 className='text-center my-5 text-amber-900'>
                  ID : qd23r3d232f3f23rf
                </h1>

                <div className='grid grid-cols-3 gap-3'>
                  <div className='col-span-1'>
                    <img
                      src="https://imgs.search.brave.com/DKL9kjR3cYqZYpV0QIEydF3ctm6DrIA6HOa30FKsjsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8x/NS8yOC91c2VyLWlj/b24tcGVyc29uLXN5/bWJvbC12ZWN0b3It/Mjg2MTUyOC5qcGc"
                      alt="userpic"
                      width="150px"
                    />
                  </div>

                  <div className='col-span-2 flex flex-col justify-center'>
                    <h2 className='text-blue-800 text-lg'>Username</h2>
                    <p className='text-green-800'>usermail@gmail.com</p>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Booklist