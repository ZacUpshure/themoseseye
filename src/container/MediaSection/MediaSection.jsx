import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import images from '../../constants/images';


const MediaSection = () => {
  return (
<>
  <div className="bg-white pt-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="text-base leading-7 text-gray-700 lg:max-w-lg pt-14" >
          <p className="text-base font-semibold leading-7 text-indigo-600">the tag</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            This is the Headline
          </h1>

          <div className="max-w-xl">
            <p className="mt-6">
            Even though we offer individual packages for specific fields and usecases, we still essentially try to provide a all around bundle of services like developing a platform like a website and also designing an corporate identity for that in order to successfully than run ad campaigns to make sure that conversions don't bounce.
            </p>
            <img className='scale-125' src={images.mediaImage} alt='' />
          </div>
        </div>
        <div className="lg:pr-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" p-24 rounded-2xl col-span-2  lg:mt-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.about01})` }}>
              {/* Inhalt des unteren Blocks, der über die gesamte Breite geht */}
              <h3 className='rotate-90 text-white text-2xl mt-44 p-7 text-bold'>Photography</h3>
              {/* <p className='text-white'>Even though we offer individual packages for specific fields and usecases, we still essentially try to provide a all around bundle of service</p> */}
            </div>
            <div className="bg-blue-200 p-14 rounded-2xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.about02})` }}>
              {/* Inhalt des oberen linken Blocks */}
              <p className='mt-44'></p>
            </div>
            <div className="bg-green-200 p-4 rounded-2xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.about07})` }}>
              {/* Inhalt des oberen rechten Blocks */}
              <p className='mt-44 text-white'>See Our Entire collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default MediaSection