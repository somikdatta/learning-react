import { useState, useEffect } from 'react'
import axios from 'axios'

export function useAxiosGet(url){
    const [request,setRequest] = useState({
        data: null,
        error: false
    })

    useEffect(()=>{
        axios.get(url)
            .then(res=>{
                setRequest({
                    data: res.data,
                    error: false
                })
            })
            .catch(()=>{
                setRequest({
                    data: null,
                    error: true
                })
            })
    },[url])
    return request
}