import React from 'react'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home(){
    let content=null
    const url=`https://5f2a8d0d6ae5cc0016422a91.mockapi.io/api/v1/products?page=1&limit=10`
    let products = useAxiosGet(url)

    if(products.error){
        content = <p>
            There was an error, please refresh or try again later!
        </p>
    }

    if(products.data){
        content =
        products.data.map((product) => 
            <ProductCard key={product.id}
                product={product}
            />
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">Best Sellers</h1>
            {content}
        </div>
    )
}

export default Home