import Head from "next/head";
import quoteStyles from '@/styles/Quotes.module.css'

import { useState } from "react";

export default function QuotesAdd() {
  const [state,setState] = useState('');
  const [surah, setSurah] = useState('');
  const [verse, setVerse] = useState(0);
  const [themes, setThemes] = useState([]);
  const [quote, setQuote] = useState('');
  
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
      }),
    })

    // Handle response if necessary
    const id = await response.json()
    setState(id);
    // ...

  }
  return (
    <form className={quoteStyles.form} onSubmit={onSubmit} >

      <div className={quoteStyles.message}>{state.message}</div> {/*message saying form submitted*/}

      {/* setting themes and quote to the values entered to the form */}
      <input onChange={(e)=>setSurah(e.target.value)} value={surah} type="text" name="surah" placeholder="Surah"></input>
      <input onChange={(e)=>setVerse(e.target.value)} value={verse} type="text" name="verse" placeholder="verse #"></input>
      <input onChange={(e)=>setThemes(e.target.value)} value={themes} type="text" name="themes" placeholder="theme"></input>
      <textarea onChange={(e)=>setQuote(e.target.value)} value={quote} type="text" name="quote" placeholder="enter quote"/>
      <button type="submit">Submit</button>
      
    </form>
  )
}