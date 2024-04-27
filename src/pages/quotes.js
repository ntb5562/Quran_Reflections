//https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations

import Head from "next/head";
import Quote from '@/components/Quote'
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

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
  if (!entries) return (
  <>
    <Navbar></Navbar>
     <h2>Please add quotes first</h2>
     <Link href="/quotes-add">Click to add quote</Link>
    </>
  )
  return (
    <>
    <Navbar></Navbar>
     <div className="">
        {entries &&
          entries?.map((entry) =>
            <Quote key = {entry._id} entry={entry}/>
          )
        }
      </div>
    </>
  )
}