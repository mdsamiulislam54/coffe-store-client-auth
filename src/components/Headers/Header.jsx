import React from 'react'
import logo from '../../assets/more/logo1.png'
const Header = () => {
  return (
    <nav className='py-2 bg-primaryC'>
        <div className="w-11/12 mx-auto flex justify-center items-center gap-4">
            <img src={logo} alt="logo" className='w-12' />
            <h2 className='text-3xl font-ran font-medium text-white'>Espresso Emporium</h2>
        </div>
    </nav>
  )
}

export default Header