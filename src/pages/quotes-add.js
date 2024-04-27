import Head from "next/head";
import formStyles from '@/styles/Form.module.css'
import Navbar from "@/components/Navbar";

import { useState } from "react";

export default function QuotesAdd() {
  const [state,setState] = useState('');
  const [surah, setSurah] = useState('');
  const [verse, setVerse] = useState('');
  const [themes, setThemes] = useState([]);
  const [quote, setQuote] = useState('');
  const [reflection, setReflection] = useState('');
  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.target)
      const response = await fetch('/api/quotes-add', {
        method: 'POST',
        headers: {
          "Content-type":"application/json",
        },
        body: JSON.stringify({
          surah,
          verse,
          themes,
          quote,
          reflection,
        }),
      })
      if (response.ok) {
        const id = await response.json()
        setState(id);
        window.location.href="./quotes";
      } else {
        const errorResponse = await response.json();
        setState(errorResponse);
      }
  }
  return (
    //form 1
    <>
    <Navbar></Navbar>
    <div className={formStyles.div}>
      <form className={formStyles.form} onSubmit={onSubmit} >

      <div className={formStyles.message}>{state.message}</div> {/*message saying form submitted*/}

      {/* setting themes and quote to the values entered to the form */}
      <input onChange={(e)=>setSurah(e.target.value)} value={surah} type="text" name="surah" placeholder="Surah"></input>
      <input onChange={(e)=>setVerse(e.target.value)} value={verse} type="text" name="verse" placeholder="verse #"></input>
      <input onChange={(e)=>setThemes(e.target.value)} value={themes} type="text" name="themes" placeholder="theme"></input>
      <textarea onChange={(e)=>setQuote(e.target.value)} value={quote} type="text" name="quote" placeholder="enter quote"/>
      <textarea onChange={(e)=>setReflection(e.target.value)} value={reflection} type="text" name="reflections" placeholder="enter reflections"/>
      <button className= "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit">Submit</button>
      </form>
    </div>

    </>
    
    
  )
}