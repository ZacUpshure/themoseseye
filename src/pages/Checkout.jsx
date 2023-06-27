import React from 'react'
import { Navbar } from './../components';
import { PaymentForm, RealFooter } from '../container';
import { useParams } from 'react-router-dom';
import products from './../products.json';

const Checkout = () => {
    const { id } = useParams();
    const selectedProduct = products.find((product) => product.id === id);

    return (
        <article>
            <Navbar />
            <div className='pt-7'>
                <PaymentForm title={selectedProduct.name} description={selectedProduct.details} price={selectedProduct.price} />
            </div>
            <RealFooter />
        </article>
    )
}

export default Checkout