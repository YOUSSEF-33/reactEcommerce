import axios from "axios";
import { useEffect, useState } from "react";
import { TOKEN, URL } from "../auth";


export const useFetch = (url)=>{

    const [Data,setData] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(()=>{
        const fechedData = async ()=>{
            try{
                setLoading(true)
                const res = await axios.get(
                URL + url,
                {
                headers:{
                    Authorization : "bearer " + TOKEN ,
                }
                })
                setData(res.data.data)
            }catch(err){
                setError(true);
            }
          setLoading(false)
        }
          fechedData()
    },[url])
    return {Data, Loading, error}
}