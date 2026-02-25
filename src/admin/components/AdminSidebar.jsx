import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

function AdminSidebar() {
    const location=useLocation()
    const [collapse,setCollapse]=useState(false)
    return (
        <>
            <div className="bg-blue-300 min-h-full flex flex-col items-center justify-center py-10">
                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt="admin" className='w-[30%] h-[30%]' />
                <h1 className="my-3 font-semibold flex items-center gap-3">Admin
                    <button onClick={()=>setCollapse(!collapse)}>
                        <GiHamburgerMenu />
                    </button>
                </h1>
                {
                    !collapse&&
                    <div>
                    <div className="flex gap-2 items-center my-3">
                        <input type="radio" name="sidebar" id="home"  checked={location.pathname==='/admin-dashboard'}/>{' '}
                        <Link to={'/admin-dashboard'}>
                            <label htmlFor="" className='flex gap-1 items-center'><IoMdHome/>Home</label>
                        </Link>
                    </div>
                    <div className="flex gap-2 items-center my-3">
                        <input type="radio" name="sidebar" id="allbooks" checked={location.pathname==='/admin-booklist'}/>{' '}
                        <Link to={'/admin-booklist'}>
                            <label htmlFor="" className='flex gap-1 items-center'><FaBook />All Books</label>
                        </Link>
                    </div>
                    <div className="flex gap-2 items-center my-3">
                        <input type="radio" name="sidebar" id="careers" checked={location.pathname==='/admin-career'}/>{' '}
                        <Link to={'/admin-career'}>
                            <label htmlFor="" className='flex gap-1 items-center'><IoBagAdd />Careers</label>
                        </Link>
                    </div>
                    <div className="flex gap-2 items-center my-3">
                        <input type="radio" name="sidebar" id="settings" checked={location.pathname==='/admin-settings'}/>{' '}
                        <Link to={'/admin-settings'}>
                            <label htmlFor="" className='flex gap-1 items-center'><IoSettingsSharp />Settings</label>
                        </Link>
                    </div>
                </div>
                }
                
            </div>
        </>
    )
}

export default AdminSidebar