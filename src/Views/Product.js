import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Product(){
    const {id} = useParams();
    const url=`https://5f2a8d0d6ae5cc0016422a91.mockapi.io/api/v1/products/${id}`
    const [product,setProduct] = useState(null)

    let content = null

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            setProduct(res.data)
        })
    },[url])

    if(product){
        content =
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.name}
            </h1>
            <div>
                <img
                    src={product.images}
                    alt={product.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                ₹ {parseFloat(product.price) * 74.97}
            </div>
            <div>
                {product.description}
            </div>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product