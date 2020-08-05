import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Product(){
    const url='https://5f2a8d0d6ae5cc0016422a91.mockapi.io/api/v1/products/2'
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
            <h1>{product.name}</h1>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product