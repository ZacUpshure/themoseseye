import React from 'react'
import Banner from './../container/Banners/Banner'
import { Navbar } from './../components';
import { PricingPhotography, RealFooter } from '../container';
import image from './../constants/images';

const profile = {
    photography:'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80',
    videography:'https://images.unsplash.com/photo-1535540878298-a155c6d065ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    marketing:'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80',
  }

const Photography = () => {
  return (

    <article>
        <div>
            <Banner img={profile.photography} />
            <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-4">
                  <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                    <img
                      className="absolute inset-0 h-full w-full object-cover "
                      src={image.photography_img}
                      alt=""
                    />

                    <figure className="relative isolate">
                      {/* <img src={image.photography_img} alt="" className="h-12 w-auto" /> */}
                      <blockquote className="mt-6 text-xl font-semibold leading-8 pb-32 text-white">
                        <p>
                        </p>
                      </blockquote>
                      {/* <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                        <strong className="font-semibold text-white">Judith Rogers,</strong> CEO at Workcation
                      </figcaption> */}
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-indigo-600">Company values</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      On a mission to empower remote teams
                    </h1>
                    <div className="max-w-xl">
                      <p className="mt-6">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                        vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                        erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                        semper sed amet vitae sed turpis id.
                      </p>
                      <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                        auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                        hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                      </p>
                      <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                        auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                        hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                      </p>
                    </div>
                  </div>
                  <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                    {/* {stats.map((stat, statIdx) => (
                      <div key={statIdx}>
                        <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                      </div>
                    ))} */}
                  </dl>
                  <div className="mt-10 flex">
                    <a href="#" className="text-base font-semibold leading-7 text-indigo-600">
                      Learn more about our company <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PricingPhotography />
    </article>
  )
}

export default Photography