import React from 'react'
import imageUrl from './../../assets/OBJECTS.png'
import images from '../../constants/images'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    // <div className='drop-shadow-sm p-7 rounded-lg bg-gray-50 container grid grid-cols-2 gap-4 relative overflow-hidden'>
    //     <div className=''>
    //         <p className='text-black'>Websites, Photography, Ad Campaign management</p>
    //         <h3 className='text-6xl text-black font-bold'>Make Your Business Shine!</h3>
    //     </div>
    //     <div className='grid grid-cols-3 gap-4 relative  rotate-12'>
    //         {/* <img src={imageUrl} alt="" width={500} /> */}
    //         <img src={images.about01} alt="" width={300} className='rounded-md'/>
    //         <img src={images.about02} alt="" width={300} className="mt-[-50px] rounded-md"/>
    //         <img src={images.about03} alt="" width={300} className='rounded-md'/>
    //         <img src={images.about04} alt="" width={300} className='rounded-md'/>
    //         <img src={images.about05} alt="" width={300} className="mt-[-50px] rounded-md"/>
    //         <img src={images.about07} alt="" width={300} className='rounded-md'/>
    //     </div>
    // </div>
<div className='drop-shadow-sm p-7 rounded-lg bg-gray-50 container grid md:grid-cols-2 gap-4 overflow-hidden'>
  <div className=''>
    <p className='text-black'>Websites, Photography, Ad Campaign management</p>
    <h3 className='text-4xl sm:text-6xl text-black font-bold'>Make Your Business Shine!</h3>
  </div>
  <div className='grid grid-cols-3 gap-4 relative rotate-12 scale-110 mobile-friendly-grid'>
    {/* <img src={imageUrl} alt="" width={500} /> */}
      <img src={images.about01} alt="" width={300} className='rounded-md' />
      <img src={images.about02} alt="" width={300} className="mt-[-30px] rounded-md" />
      <img src={images.about03} alt="" width={300} className='rounded-md' />
      <img src={images.about04} alt="" width={300} className='rounded-md' />
      <img src={images.about05} alt="" width={300} className="mt-[-30px] rounded-md" />
      <img src={images.about07} alt="" width={300} className='rounded-md' />
  </div>
</div>


  )
}
// text-gray-600
export default HeroBanner