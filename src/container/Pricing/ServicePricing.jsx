import React from 'react';
import images from '../../constants/images';
import { useTranslation } from 'react-i18next';

const ServicePricing = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{t('pricingHeadline')}</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {t('pricingSubtext')}
      </p>
    </div>
      <img src={images.pricing} alt="pricing image" className='sm:scale-110 scale-125 pt-7' />
  </div>
  )
}

export default ServicePricing