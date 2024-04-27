import styles from './Quote.module.css'

export default function Quote({ entry }) {

  return (
    <div className="container mx-auto px-4 drop-shadow-lg">
    <div className='grid grid-flow-col'>
     <div className='text-lg font-serif'>Surah:     {entry?.surah}</div>
     <div className='text-lg font-serif'> Verse #:     {entry?.verse}</div>
     <div className='text-lg font-serif'>Themes:      {entry?.themes}</div>
    </div>
    
     <p className='text-base font-serif'>Quote:</p>
     <div className='text-lg font-serif'>{entry?.quote}</div>
     <p className='text-base font-serif'>Reflection:</p>
     <div className='text-lg font-serif'>{entry?.reflections?.text}</div>
     <hr></hr>
    </div>
  )
}