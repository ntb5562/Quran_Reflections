//https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations

import Head from "next/head";
import Quote from '@/components/Quote'
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Quotes() {
  const [entries, setEntries] = useState(null)
  const [isLoading, setLoading] = useState(true)

 //ajax interaction: displaying all quotes
  useEffect(() => {
    setLoading(true);
    fetch('/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        setEntries(data.results)
        setLoading(false)
      })
  }, [])
  if (isLoading) return <p>Loading...</p>
  if (!entries) return <p>No profile data</p>
  return (
    <>
    <Navbar></Navbar>
     <div className="">
        {
          entries?.map((entry) =>
            <Quote key = {entry._id} entry={entry}/>
          )
        }
      </div>
    </>
  )
}