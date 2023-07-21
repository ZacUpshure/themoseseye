import React from 'react'
import imageUrl from './../../assets/OBJECTS.png'

const HeroBanner = () => {
  return (
    <div className='p-7 rounded-lg bg-red-300 container'>
        <div className=''>
            <p className='text-white'>Websites, Photography, Ad Campaign management</p>
            <h3 className='text-6xl text-white font-bold'>Make Your Business Shine!</h3>
        </div>
        <div>
            <img src={imageUrl} alt="" width={500} />
        </div>
    </div>
  )
}
// text-gray-600
export default HeroBanner