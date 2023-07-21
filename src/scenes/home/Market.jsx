import React, {useState, useEffect} from 'react'
import Navbar from '../global/Navbar'
import client from '../../lib/client';
import { urlFor } from '../../lib/client';

import { Product, FooterBanner, HeroBanner} from './../../components'
import { RealFooter } from '../../container';

const Market = () => {
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchData = async () => {
      try {
        const productsData = await client.fetch('*[_type == "product"]');
        const bannerData = await client.fetch('*[_type == "banner"]');
        setProducts(productsData)
        setBanner(bannerData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


  return (
    <>
      <main>
        <article className='mx-auto pt-7'>

          {/* <div className='container mx-auto pt-7'>
            <h1 className='text-4xl font-bold'>Market</h1>
          </div> */}

          <div className='container mx-auto pt-7'>
            <HeroBanner />
          </div>

          <div className='container mx-auto pt-7'>
            <h2 className='text-4xl font-bold text-black'>See our Services & Bundles</h2>
          </div>

          <div className='container mx-auto pt-7 pb-7'>
              {products?.map((product) => <Product key={product._id} product={product} />)}
          </div>

          {/* <FooterBanner /> */}
        </article>
      </main>
    </>
  )
}

export default Market