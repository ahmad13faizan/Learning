import { useState } from "react"

function setData(key,value){
    localStorage.setItem(key,value)
}


export default function useCustomHook(value,valueData){

    setData(value,valueData)


return [{value:valueData},setData]

}

