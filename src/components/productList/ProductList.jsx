import React from 'react'
import './ProductList.css'
import Product from '../product/Product';
import { products } from '../../data'

function ProductList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire. It's Vengatesh</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit ameur Lorem ipsum dolor sit ameur
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}

            </div>
        </div>
    )
}

export default ProductList;
