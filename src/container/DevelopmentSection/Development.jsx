import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import images from '../../constants/images';
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';
import 'prismjs/themes/prism-tomorrow.css'; // Import PrismJS theme
import Prism from 'prismjs'; // Import PrismJS

const stats = [
  { label: 'aboutSpentOptimal', value: 'aboutSpentOptimalBudget', lottie: images.coin },
  { label: 'aboutReachMax', value: 'aboutReachMaxCustomers', lottie: images.megaphone },
]

const Development = () => {
    const codeSnippet = `
    function greet(name) {
      console.log(\`Hello, \${name}!\`);
    }

    const person = "Alice";
    greet(person);
  `;

  // Initialize PrismJS for syntax highlighting
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white pt-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            {/* <div className=" p-24 rounded-2xl col-span-2  lg:mt-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.developmentImage})` }}>
            </div> */}
            <img src={images.developmentImage} alt='' />
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">{t('aboutTag')}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t('aboutHeadline')}
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  {t('aboutSubtext')}
                </p>
              </div>
            </div>

            <div class="relative bg-white w-96 h-72 rounded-md shadow-md flex mt-7">
        <div class="flex flex-col bg-gray-100 px-4 py-2 space-y-2">
        <div class="w-2 h-2 rounded-full bg-red-500"></div>
        <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
        <div class="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
            <div class="flex-grow p-4">
            <div class=" justify-between items-center mb-3">
            </div>
            <div class="h-16 bg-gray-200 mb-3 scale-75">
            <div class="flex-grow bg-black text-white">
            <pre className="language-javascript ">
            <code className="language-javascript">
              {codeSnippet}
            </code>
          </pre>
            </div>
            <div class="flex-grow p-4 bg-black text-white">
            {/* <!-- Terminal prompt --> */}
            <div class="flex items-center mb-5">
                <span className='scale-75'>
                </span>
                    user@themoseseye % <div class="bg-white w-3 h-5 mr-2 animate-pulse ml-3">_</div>
            </div>
            </div>
        </div>


      </div>
      {/* <div class="h-16 bg-gray-200 mb-3"></div> */}
    </div>
  </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Development