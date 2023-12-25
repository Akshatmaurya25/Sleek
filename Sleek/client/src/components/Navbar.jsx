import React , {useState}  from 'react'
import  '../css/css1.css'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false); // State to control the nav open/close
  
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  
  return (
    <div className={navOpen ? `w-full h-fit bg-wh1  min-w-screen flex px-4 nav justify-between items-center sticky top-0 overflow-hidden` :` bg-wh1 w-full min-w-screen flex px-4 nav justify-between items-center sticky top-0 overflow-hidden`}>

      <div className='logo-container w-full flex items-center justify-between flex-1'>
        <h2 className='lobster gdc1 text-[40px] cursor-pointer'>Sleek</h2>
        <i className='ham' onClick={toggleNav}>
        <GiHamburgerMenu style={{color: 'Black', fontSize: '30px'}} />
        </i>
      </div>

      <div className='flex items-center gap-3 flex-1'>
        <div className='flex bg-purple-100 items-center rounded-lg search'>
          <input className='focus:outline-none bg-transparent ml-3 inp' type="text" name="" id="" />
          <div className='bg-purp hover:bg-purple-500 rounded-tr-lg rounded-br-lg p-1 '>
          <CiSearch style={{color: 'white', fontSize: '30px'}} />
          </div>
        </div>
      </div>

      <div className='w-fit flex options gap-8 items-center flex-1'>
        <ul className='flex gap-8 options w-fit'>
          <li className='hoverline'><Link to='/home'>Home</Link></li>
          <li className='hoverline'><Link to='/login'>Login</Link></li>
          <li className='hoverline'><Link to='/signup'>Signup</Link></li>
          <li className='hoverline'><Link to='/addproduct'>Add Product</Link></li>
        </ul>
        <i className='user p-2 bg-slate-100 rounded-full'>
          <Link to='/dashboard'>
          <FaRegUser style={{color: 'black', fontSize: '20px'}}/>
          </Link>
        </i>
      </div>
  
    </div>
  )
}
