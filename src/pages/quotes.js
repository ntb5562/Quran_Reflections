//https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations

import Head from "next/head";
import quoteStyles from '@/styles/Quotes.module.css'

import { useState, useEffect } from "react";

export default function Quotes() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].surah)
        setData(data)
        setLoading(false)
      })
  }, [])
  console.log(data)
  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>
  return (
    <>
    <div className="quote">
      
    </div>
    </>
  )
}