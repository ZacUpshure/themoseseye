import stats from './icons/stats';
import camera from './icons/camera';
import pen from './icons/pen';
import code from './icons/code';

const features = [
  {
    name: 'Photography | Videography',
    description:
      'We shoot professional commercials and Social media Videos as well as Studio photography.',
    icon: camera,
  },
  {
    name: 'Corporate Design',
    description:
      'Specialized in creating a cohesive and impactful visual identity for your business.',
    icon: pen,
  },
  {
    name: 'Web Development',
    description:
      'High perfomance beautiful websites written in the most modern Frameworks like nextjs.',
    icon: code,
  },
  {
    name: 'Digital Marketing',
    description:
      'Increase sales and reach more customers with Email Marketing, Google Ads, Social Media Campaigns and SEO.',
    icon: stats,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to improve your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how we can help generate leads and increase sales!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
