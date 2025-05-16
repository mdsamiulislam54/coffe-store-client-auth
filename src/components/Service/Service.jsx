import React from 'react'
import icon1 from '../../assets/icons/1.png'
import icon2 from '../../assets/icons/2.png'
import icon3 from '../../assets/icons/3.png'
import icon4 from '../../assets/icons/4.png'

const Service = () => {
  return (
    <div className='bg-secondary'>
        <div className="w-11/12 mx-auto py-10 md:flex justify-between gap-4">
            <div className='shadow p-4'>
                <img src={icon1} alt="icons1" className='w-10 mb-4' />
                <h3 className='font-ran text-xl'>Awesome Aroma</h3>
                <p className='text-sm font-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='shadow p-4'>
                <img src={icon2} alt="icons1" className='w-10 mb-4' />
                <h3 className='font-ran text-xl'>High Quality</h3>
                <p className='text-sm font-raleway'>YWe served the coffee to you maintaining the best quality</p>
            </div>
            <div className='shadow p-4'>
                <img src={icon3} alt="icons1" className='w-10 mb-4' />
                <h3 className='font-ran text-xl'>Pure Grades</h3>
                <p className='text-sm font-raleway'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='shadow p-4'>
                <img src={icon4} alt="icons1" className='w-10 mb-4' />
                <h3 className='font-ran text-xl'>Proper Roasting</h3>
                <p className='text-sm font-raleway'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    </div>
  )
}

export default Service