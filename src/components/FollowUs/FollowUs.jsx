import React from 'react'
import cups1  from '../../assets/cups/Rectangle 10.png'
import cups2  from '../../assets/cups/Rectangle 11.png'
import cups3  from '../../assets/cups/Rectangle 12.png'
import cups4  from '../../assets/cups/Rectangle 13.png'
import cups5  from '../../assets/cups/Rectangle 14.png'
import cups6  from '../../assets/cups/Rectangle 15.png'
import cups7  from '../../assets/cups/Rectangle 16.png'
import cups8  from '../../assets/cups/Rectangle 9.png'

const FollowUs = () => {
  return (
    <div className='py-10'>
        <div className="w-11/12 mx-auto">
        <div className='flex flex-col justify-center items-center mb-10'>
            <p className='text-md font-raleway mb-4'>Follow Us Now</p>
            <h4 className='text-4xl font-ran text-primaryC'> Follow on Instagram</h4>

        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 content-center'>
            <img src={cups1} alt="" />
            <img src={cups2} alt="" />
            <img src={cups3} alt="" />
            <img src={cups4} alt="" />
            <img src={cups5} alt="" />
            <img src={cups6} alt="" />
            <img src={cups7} alt="" />
            <img src={cups8} alt="" />
        </div>
        
        </div>
    </div>
  )
}

export default FollowUs