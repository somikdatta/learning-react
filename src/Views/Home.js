import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function Home(){
    return (
        <div>
            <h1 className="font-bold text-2xl">Home page</h1>
            <HelloWorld name="Drake"/>
        </div>
    )
}

export default Home