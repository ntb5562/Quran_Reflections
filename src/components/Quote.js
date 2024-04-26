import styles from './Quote.module.css'

export default function Quote({ entry }) {

  return (
    <div className="container mx-auto px-4 drop-shadow-lg">
     <div className='text-lg font-serif'>Surah: {entry?.surah}</div>
     <div className='text-lg font-serif'>Verse #: {entry?.verse}</div>
     <div className='text-lg font-serif'>Quote: {entry?.quote}</div>
     <div className='text-lg font-serif'>Themes: {entry?.themes}</div>
     <p>{entry?.reflections?.text}</p>
     <hr></hr>
    </div>
  )
}