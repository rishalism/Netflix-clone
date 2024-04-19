import React, { useEffect, useState } from 'react'
import axios from 'axios';
import endpoints, { createImageURl } from '../services/movieService';

function Hero() {

  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((reposonse => {
      const movies = reposonse.data.results
      const random = movies[Math.floor(Math.random() * movies.length)]
      setMovie(random)
    })
    )
  }, [])

  const truncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + '...' : str
  }

  const { title, backdrop_path, release_date, overview } = movie
  return (
    <div className='w-full h-[550px] '>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'>
          <img className='w-full h-full object-cover object-top' src={createImageURl(backdrop_path,"original")} alt={title
          } />
          <div className='absolute w-full top-[20%] lg:top-[35%] P-4 md:p-8'>
            <h1 className='text-3xl md:text-6xl font-nsans-medium'>{title}</h1>
            <div className='mt-8 mb-4'>
              <button className='capitalize border border-gray-300 text-black py-2 px-5 bg-white hover:bg-transparent hover:text-white' >play</button>
              <button className='capitalize border border-gray-300 py-2 px-5 ml-4  hover:bg-gray-100 hover:text-black '>watch later</button>
              <p className='text-gray-400 text-sm mt-1 '>{release_date}</p>
              <p className='w-full md:max-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncate(overview, 165)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
