import React from 'react'
import {useParams} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import { useAxiosGet } from '../Hooks/HttpRequests';
function Product(){
    const {id} = useParams();
    const url=`https://5f2a8d0d6ae5cc0016422a91.mockapi.io/api/v1/products/${id}`
    
    let product = useAxiosGet(url)

    let content = <div>
        <h1 className="text-2xl font-bold mb-3">
        <Skeleton />
        </h1>
        <div>
            <Skeleton height={400} />
        </div>
        <div className="font-bold text-xl mb-3">
            <Skeleton />
        </div>
        <div>
            <Skeleton />
        </div>
    </div>

    if(product.error){
        content = <p>
            There was an error, please refresh or try again later!
        </p>
    }
    if(product.data){
        content =
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.images}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                ₹ {parseFloat(product.data.price) * 74.97}
            </div>
            <div>
                {product.data.description}
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