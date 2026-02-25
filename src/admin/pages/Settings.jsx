import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from "react-icons/fa";


function Settings() {
  return (
    <>
      <AdminHeader/>
      <div className='min-h-[60vh] md:grid grid-cols-5'>
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        <div className='col-span-4'>
          <h1 className='text-center text-3xl my-5 font-bold'>Admin Settings</h1>
          <div className="md:grid grid-cols-2  gap-3">
            <div className="p-3">
              <p className='text-justify font-bold'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt provident a deleniti aut qui, veniam voluptatum accusantium placeat quis nemo quod delectus soluta tenetur repellendus magni libero repudiandae velit!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi, dolore impedit voluptatibus adipisci consequatur velit voluptates earum aperiam eaque maiores, error veritatis praesentium officia quis assumenda id distinctio placeat!
              </p>
              <p className='text-justify font-bold'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt provident a deleniti aut qui, veniam voluptatum accusantium placeat quis nemo quod delectus soluta tenetur repellendus magni libero repudiandae velit!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi, dolore impedit voluptatibus adipisci consequatur velit voluptates earum aperiam eaque maiores, error veritatis praesentium officia quis assumenda id distinctio placeat!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto repellat vero ipsam sequi atque, magni nostrum voluptatibus sunt reiciendis qui quaerat, a tempore assumenda placeat necessitatibus. Accusamus eligendi deserunt nam!
              </p>
            </div>
            <div className="p-2">
              <div className="w-full flex justify-center h-full bg-sky-300 py-4 ">
                <div className='' style={{width:"300px"}}>
                  <div className="relative">
                  <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt="admin" className='mx-auto' style={{width:"80px"}} />
                  <label htmlFor="file">
                    <input type="file" className='hidden' id='file'/>
                    <span className='bg-yellow-400 p-1 text-white rounded-lg border border-black absolute bottom-1 right-25'><FaPen /></span>
                  </label>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Settings