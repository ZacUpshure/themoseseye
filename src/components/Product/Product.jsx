import React from 'react'
import { urlFor } from '../../lib/client' 

const Product = ({ product: {image, name, slug, price }}) => {
  return (
    <>
        {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
            <div className='pr-7'>
                <a key={name} href={`/products/item/${slug.current}`} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={urlFor(image && image[0])}
                      alt="product"
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{price}€</p>
                </a>
            </div>
        {/* </div> */}
    </>
  )
}

export default Product