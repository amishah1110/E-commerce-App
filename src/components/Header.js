import React from 'react';
import Logo from './Logo'
import { FaSearch } from "react-icons/fa"; //search
import { FaUserAlt } from "react-icons/fa"; //user icon
import { FaShoppingCart } from "react-icons/fa"; //shopping cart

const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className='h-full container mx-auto flex items-center justify-between'>
        
        <div className=''>
          <Logo w={110} h={50}/>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search products here' className='w-full outline-none'/>
          <div className='text-lg w-13 h-8 min-w-[50px] bg-red-600 flex items-center justify-center rounded-r-full text-white cursor-pointer'>
            <FaSearch />
          </div>
        </div>

        <div className='flex items-center gap-7'> {/*this gap will increase space between icons*/}
          <div className='text-xl cursor-pointer'>
            <FaUserAlt />
          </div>

          <div className='text-2xl cursor-pointer relative'>
            <span><FaShoppingCart /></span>
            <div className='bg-red-600 text-white w-5 h-5 p-1 rounded-full flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-xs'>0</p>
            </div>
          </div>

          <div>
            <button className='px-2 py-1 bg-red-600 hover:bg-red-800 rounded-full text-white'>Login</button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
