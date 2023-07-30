import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation();
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('ctaHeadline')}
            <br />
            {t('ctaHeadlineTwo')}
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="/products"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t('heroButtonBookServices')}
            </a>
            <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              {t('heroButtonLearnMore')} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  