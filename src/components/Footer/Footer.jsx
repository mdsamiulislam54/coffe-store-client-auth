import React from 'react'
import images from '../../assets/more/24.jpg'
const Footer = () => {
  return (
    <div className='bg-cover bg-no-repeat py-5' style={{backgroundImage:`url(${images})`}}>
        <p className='text-center text-white'>Copyright Espresso Emporium ! All Rights Reserved</p>
    </div>
  )
}

export default Footer