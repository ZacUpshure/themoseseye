import React from 'react';
import { motion } from 'framer-motion';
import images from '../../constants/images';
import { useTranslation } from 'react-i18next';

const scaleVariants = {
  whileInView: {
    scale: [0, 1], 
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
 
const Header = () => {
    const { t } = useTranslation();

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          
          <motion.div
            className=""
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <motion.h1
              className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            >
              {/* {t('heroHeadline')} */}
              {t('heroHeadline').split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

          </motion.div>

            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                {t('heroSubtext')}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/products"
                  className="rounded-md bg-indigo-600 z-999 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t('heroButtonBookServices')}
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                    {t('heroButtonLearnMore')} <span aria-hidden="true">→</span>
                </a>
              </div>

            </div>
              <motion.img
              src={images.Cover}
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            />
            {/* <img
              src={images.Cover}
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            /> */}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
  )
}

export default Header