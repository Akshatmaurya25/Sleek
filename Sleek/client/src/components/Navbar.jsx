import React  from 'react'
import  '../css/css1.css'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";


export const Navbar = () => {
  return (
    <div className='w-full flex nav justify-between items-center '>
      <div className='logo-container w-fit'>
        <h2 className='lobster gdc1 text-[40px]'>Sleek</h2>
      </div>
      <div>
        <ul className='flex gap-8'>
          <li className='hoverline'><Link to='/home'>Home</Link></li>
          <li className='hoverline'><Link to='/login'>Login</Link></li>
          <li className='hoverline'><Link to='/signup'>Signup</Link></li>
          <li className='hoverline'><Link to='/addproduct'>Add Product</Link></li>
        </ul>
      </div>
      <div className='flex items-center gap-3'>
        <div className='flex bg-purple-100 items-center rounded-lg '>
          <input className='focus:outline-none bg-transparent ml-3' type="text" name="" id="" />
          <div className='bg-purp rounded-tr-lg rounded-br-lg p-1 '>
          <CiSearch style={{color: 'black', fontSize: '30px'}} />
          </div>
        </div>
          <FaRegUser style={{color: 'black', fontSize: '30px'}}/>
      </div>
    </div>
  )
}
