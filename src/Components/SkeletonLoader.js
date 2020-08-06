import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonLoader(){
    return (

        <div>
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
    )
}

export default SkeletonLoader