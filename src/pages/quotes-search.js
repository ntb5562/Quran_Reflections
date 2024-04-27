import Head from "next/head";
import Quote from '@/components/Quote';
import formStyles from '@/styles/Form.module.css';
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Quotes() {
  const [entry, setEntries] = useState(null)
  const [quote, setQuote] = useState('');
  const [state, setState] = useState('');

  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.target)

    const response = await fetch('/api/quotes-search', {
      method: 'POST',
      headers: {
        "Content-type":"application/json",
      },
      body: JSON.stringify({
        quote,
      }),
    })
    if(response.ok){
      const result = await response.json();
      setEntries(result);
    }else{
      const error = await response.json();
      setState(error)

    }
    
  }


  return (
    <>
    <Navbar></Navbar>
    <form className={formStyles.form} onSubmit={onSubmit} >
      <input onChange={(e)=>setQuote(e.target.value)} value={quote} type="text" name="surah" placeholder="Enter a quote to search"></input>
      <button className= "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit">Submit</button>
    </form>

     <div className="">
        { entry &&
          <Quote key = {entry._id} entry={entry}/>
        }
      </div>

      <div className="">
        { state &&
          <h2>{state.message}</h2>
        }
      </div>
    </>
  )
}