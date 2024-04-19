import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movieitems from './Movieitems'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'


function Movierow(props) {
  const { title, url, rowid } = props
  const [movies, setMovie] = useState([])

  useEffect(() => {
    console.log(url);
    axios.get(url).then((response) => { setMovie(response.data.results) })
  }, [url])


  const slideLeft = () => {
    const slider = document.getElementById(`slider${rowid}`)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    const slider = document.getElementById(`slider${rowid}`)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h2 className=' font-nsans-medium md:text-xl p-4 capitalize'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white absolute opacity-80 left-3 z-10 cursor-pointer rounded-full text-gray-600 hidden group-hover:block' size={40} />
        <div id={`slider${rowid}`} className=' w-full h-full whitespace-nowrap slider scroll-smooth'>
          {
            movies.map((movie) => <Movieitems key={movie.id} movie={movie} />)
          }
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white absolute opacity-80 right-3 rounded-full cursor-pointer text-gray-600 hidden group-hover:block' size={40} />
      </div>
    </>
  )
}

export default Movierow
