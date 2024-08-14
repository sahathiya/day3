import React,{useState,useEffect }from 'react'
import axios from 'axios'

function Datafetching(){
    const[quotes,setQuotes]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/quotes")
        .then(res=>{
            console.log(res)
            setQuotes(res.data.quotes)
            console.log(setQuotes)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    
    return(
        <div>
            <ol>
                {
                    quotes.slice(0,10).map(quote=>(<li key={quote.id}><h1> {quote.quote}</h1></li>))
                }
            </ol>

        </div>
    )
}
export{Datafetching}