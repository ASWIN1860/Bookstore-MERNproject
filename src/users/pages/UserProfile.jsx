import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { IoClose } from "react-icons/io5";


function UserProfile() {

  const [sellbook, setSellbook] = useState(true)
  const [bookstatus, setBookstatus] = useState(false)
  const [purchasehis, setPurchasehis] = useState(false)
  const[modalstatus,setmodalstatus]=useState(false)

  return (
    <>
      <Header />

      <div className='min-h-[60vh]'>

        {/* Cover Section */}
        <div className='w-full bg-gray-600 h-[40vh] relative'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
            alt="profile"
            className='rounded-full w-40 h-40 object-cover absolute left-5 -bottom-20 border-4 border-white'
          />
        </div>

        {/* Profile Content */}
        <div className='mt-24 px-5 md:px-20'>
          <div className='flex justify-between px-5'>
            <h1 className='text-2xl font-bold'>PARTHIV</h1>

            <button className="text-blue-700 border border-blue-600 rounded-sm px-3 py-2 flex items-center gap-2" onClick={() =>setmodalstatus(true)}>
              <FaRegEdit />
                  Edit
            </button>
          </div>

          <p className='text-justify my-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque nobis laudantium praesentium possimus qui iure?
          </p>
        </div>

        {/* Tabs */}
        <div className='flex justify-center items-center my-5'>

          <div
            onClick={() => {
              setSellbook(true);
              setBookstatus(false);
              setPurchasehis(false)
            }}
            className={sellbook
              ? 'p-3 border-l border-r border-t rounded-t-sm border-gray-600 text-blue-600'
              : 'p-3 border-b border-gray-600 cursor-pointer'}>
            SELL BOOK
          </div>

          <div
            onClick={() => {
              setSellbook(false);
              setBookstatus(true);
              setPurchasehis(false)
            }}
            className={bookstatus
              ? 'p-3 border-l border-r border-t rounded-t-sm border-gray-600 text-blue-600'
              : 'p-3 border-b border-gray-600 cursor-pointer'}>
            BOOK STATUS
          </div>

          <div
            onClick={() => {
              setSellbook(false);
              setBookstatus(false);
              setPurchasehis(true)
            }}
            className={purchasehis
              ? 'p-3 border-l border-r border-t rounded-t-sm border-gray-600 text-blue-600'
              : 'p-3 border-b border-gray-600 cursor-pointer'}>
            PURCHASE HISTORY
          </div>

        </div>
{
  sellbook &&
  <div className='px-5 md:px-50 mb-10 '>
    <div className='bg-gray-300 p-3'>
      <h1 className='text-center my-5 text-xl'>Book Details</h1>
      <div className='md:grid grid-cols-2 gap-3'>

    <input type="text" className='p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full' placeholder='Title'  />
        <input type="text" className='p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full' placeholder='Author'  />
            <input type="text" className='p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full' placeholder='No of pages'  />
                <input type="text" className='p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full' placeholder='Image url'  />
                    <input type="text" className='p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full' placeholder='Price'  />
                        <input type="text" className='p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full' placeholder='Discount price'  />
                        <textarea name="" id="" className='w-full bg-white placeholder-green-400 rounded sm:p-3 ' rows={8} placeholder='Add'></textarea>
       <label htmlFor="file input" className='flex justify-center'>
        <input type="file" className='hidden' id="file input" />
      <img src="https://imgs.search.brave.com/oC_G2K1uTtk4r6FECrddZRIJo9tJ9dGxfl2V4EPf9gs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjUv/OTc3Lzk0NS9zbWFs/bC9kb3dubG9hZC1h/bmQtaW5zdGFsbC1m/aWxlLW1hbmFnZXIt/Zm9yLWFuZHJvaWQt/ZnJlZS1wbmcucG5n" alt="file input
      " className=' width-[80%] cursor-pointer ' />
</label>
  </div>
    <div className='p-2 flex justify-end gap-3 '>
    <button  className='p-3 border bg-red-700 border-red-700 text-white rounded-sm hover:bg-white hover:text-black'>Reset</button>
        <button  className='p-3 border bg-green-700 border-red-700 text-white rounded-sm hover:bg-white hover:text-black'>submit</button>
  </div>
  </div>

  </div>
  
}
{
  bookstatus &&
  <div className='px-5 md:px-50 mb-10 flex flex-col border-l-amber-600 justify-center items-center'>
    <img src="https://imgs.search.brave.com/pMtXoiNu9T2LbF2v_V_fFCyImrhxHQ8tZSzTpmmuDQo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI1MTIwNC9vdXJt/aWQvcG5ndHJlZS1z/dGFjay1vZi1vcmFu/Z2UtYm9va3Mtd2l0/aC1vcGVuLWJvb2st/b24tdG9wLXBuZy1p/bWFnZV8xODExNDQ1/My53ZWJw" alt="" />
    <h1 className='text-3xl text-red-600 '>No Books Added Yet!</h1>
  </div>
}
{
  purchasehis &&
  <div className='px-5 md:px-50 mb-10 flex flex-col border-l-amber-600 justify-center items-center'>
    <img src="https://imgs.search.brave.com/pMtXoiNu9T2LbF2v_V_fFCyImrhxHQ8tZSzTpmmuDQo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI1MTIwNC9vdXJt/aWQvcG5ndHJlZS1z/dGFjay1vZi1vcmFu/Z2UtYm9va3Mtd2l0/aC1vcGVuLWJvb2st/b24tdG9wLXBuZy1p/bWFnZV8xODExNDQ1/My53ZWJw" alt="" />
    <h1 className='text-3xl text-red-600 '>No Books Added Yet!</h1>
  </div>
}
{

             modalstatus &&
                        <div className="relative z-10 ">
                          <div className="bg-gray-500/75 fixed inset-0">
                            <div className="flex justify-start items-center min-h-screen">
                              <div className="bg-white rounded-2xl" style={{ height: '400px', width: '500px' }}>
                                <div className="bg-black text-white flex justify-between items-center p-3 rounded-t-2xl">
                                  <h1 className="text-xl">Application Form</h1>
                                  <button onClick={() => { setmodalstatus(false) }}>
                                    <IoClose />
                                  </button>
                                </div>
                                <div className=" p-5 ">
                                  <div className='gap-4 mb-5'>
                                    <label htmlFor="">
                                     <input type="file" className='hidden' id='profile-pic'/>
                                     <img src="" alt="" />
                                    </label>
                                    <input type="text" placeholder='Full Name' className='p-2  border bg-white placeholder-gray-600 rounded-sm w-full mb-2 ' />
                                    <input type="text" placeholder='Qualification' className='p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2 ' />
                                    <input type="text" placeholder='Email-Id' className='p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2 ' />
                                    <input type="text" placeholder='Phone Number' className='p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2 ' />
            
                                  </div>
                                  <input type="text" placeholder='Cover Letter' className='p-5 border bg-white placeholder-gray-600 rounded-sm w-full mb-2 ' />
                                
                                </div>
                                <div className='bg-gray-200 p-3 flex justify-end gap-3 rounded-b-lg'>
                                  <button className='p-2 rounded-sm border bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500'>Reset</button>
                                  <button className='p-2 rounded-sm border border-red bg-green-500 text-white hover:border-green-500 hover:bg-white hover:text-green-500'>Submit</button>
                                </div>
            
                              </div>
                            </div>
                          </div>
                        </div>


           }

      </div>

      <Footer />
    </>
  )
}

export default UserProfile