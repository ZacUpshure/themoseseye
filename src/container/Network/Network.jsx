import React from 'react'

const Network = () => {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
        Our network
      </h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 scale-150"
          src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"
          alt="Transistor"
          width={158}
          height={48}
        />
        <img
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 scale-110"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png"
          alt="Reform"
          width={158}
          height={48}
        />
        <img
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 scale-90"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/DeepL_logo.svg/2560px-DeepL_logo.svg.png"
          alt="Tuple"
          width={158}
          height={48}
        />
        <img
          className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 scale-50"
          src="https://assets-global.website-files.com/5e9996a6531fea7d1003b18e/5e99ac8b61eb0481209dfbdb_WeAreDevelopers-Logo-Retina-red.svg"
          alt="SavvyCal"
          width={158}
          height={48}
        />
        <img
          className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 scale-110"
          src="https://v.fastcdn.co/u/c2e9cfc8/61552236-0-Splicky-Logo.png"
          alt="Statamic"
          width={158}
          height={48}
        />
      </div>
    </div>
  </div>
  )
}

export default Network