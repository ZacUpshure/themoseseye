import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import images from '../../constants/images';
import Lottie from 'lottie-react';

const stats = [
  { label: 'Spent optimal', value: 'Budget', lottie: images.coin },
  { label: 'Reach maximum', value: 'Customers', lottie: images.megaphone },
]

const About = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            {/* <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"> */}

              <Lottie animationData={images.lottie_1} />
              <div className="absolute inset-0  mix-blend-multiply" />
              {/* <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <Lottie animationData={images.lottie_1} />
                
              </div> */}
            {/* </div> */}
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Company goals</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What we want for our Customers.
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Even though we offer individual packages for specific fields and usecases, we still essentially try to provide a
                  all around bundle of services like developing a platform like a website and also designing an corporate identity
                  for that in order to successfully than run ad campaigns to make sure that conversions don't bounce.
                  {/* Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                  erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                  semper sed amet vitae sed turpis id. */}
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-2">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                  <Lottie animationData={stat.lottie} className='w-24' />
                </div>
              ))}
            </dl>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About