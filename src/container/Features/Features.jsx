import stats from './icons/stats';
import camera from './icons/camera';
import pen from './icons/pen';
import code from './icons/code';
import images from '../../constants/images';
import './features.css';
import { useTranslation } from 'react-i18next';

const features = [
  {
    name: 'Photography | Videography',
    lingualTagName: 'featuresPhotography',
    lingualTagText: 'featuresPhotographySub',
    description:
      'We shoot professional commercials and Social media Videos as well as Studio photography.',
    icon: camera,
  },
  {
    name: 'Corporate Design',
    lingualTagName: 'featuresCorporateDesign',
    lingualTagText: 'featuresCorporateDesignSub',
    description:
      'Specialized in creating a cohesive and impactful visual identity for your business.',
    icon: pen,
  },
  {
    name: 'Web Development',
    lingualTagName: 'featuresWebDevelopment',
    lingualTagText: 'featuresWebDevelopmentSub',
    description:
      'High perfomance beautiful websites written in the most modern Frameworks like nextjs.',
    icon: code,
  },
  {
    name: 'Digital Marketing',
    lingualTagName: 'featuresDigitalMarketing',
    lingualTagText: 'featuresDigitalMarketingSub',
    description:
      'Increase sales and reach more customers with Email Marketing, Google Ads, Social Media Campaigns and SEO.',
    icon: stats,
  },
]

export default function Features() {
  const { t } = useTranslation();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-[url('https://themoseseye-galery-images.s3.eu-central-1.amazonaws.com/Galery-images/background1.png')]">
        <div className="mx-auto max-w-2xl lg:text-center bg-[url('https://themoseseye-galery-images.s3.eu-central-1.amazonaws.com/Galery-images/background1.png')]">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 bg-[url('https://themoseseye-galery-images.s3.eu-central-1.amazonaws.com/Galery-images/background1.png')]"></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('featuresHeadline')}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('featuresSubtext')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl bg-[url('https://themoseseye-galery-images.s3.eu-central-1.amazonaws.com/Galery-images/background1.png')]">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
            {features.map((feature) => (
              <div key={feature.lingualTagName} className="relative pl-16 bg-[url('https://themoseseye-galery-images.s3.eu-central-1.amazonaws.com/Galery-images/background1.png')]">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 bg-[url('https://themoseseye-galery-images.s3.eu-central-1.amazonaws.com/Galery-images/background1.png')]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {t(feature.lingualTagName)}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{t(feature.lingualTagText)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
