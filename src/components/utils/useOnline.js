import { useEffect, useState } from "react"

const useOnline = ()=>{
    const [isOnline, setIsOnline]= useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnline(true)
        })
        window.addEventListener("offline",()=>{
            setIsOnline(false)
        })
        return()=>{
            window.removeEventListener("online",()=>{
                setIsOnline(true)
            })
            window.removeEventListener("ofline",()=>{
                setIsOnline(false)
            })
        }

    },[])
    return isOnline
}
export default useOnline