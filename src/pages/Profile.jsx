import React, { useEffect, useState } from 'react'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from '../services/firebase'
import { AiOutlineClose } from 'react-icons/ai'
import { createImageURl } from '../services/movieService'
import { arrayRemove, doc, updateDoc, onSnapshot } from 'firebase/firestore'

function Profile() {

  const [movies, setMovies] = useState([])
  const { user } = UserAuth()

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) {
          setMovies(doc.data().favShows);
        }
      })
    } else {
      alert('no user')
    }
  }, [user?.email])

  console.log(movies);


  const slideLeft = () => {
    const slider = document.getElementById(`slider`)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    const slider = document.getElementById(`slider`)
    slider.scrollLeft = slider.scrollLeft + 500
  }


  return (
    <div>
      <div className='opacity-30'>
        <img className='w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg " alt="" />
      </div>

      <div className='absolute top-[30%] left-3 '>
        <h1 className='text-5xl font-nsans-medium'>My favShows</h1>
        <p className='font-nsans-light mt-1'>{user.email}</p>

      </div>
      <div className='w-full mt-3 absolute top-[0%] '>
        <div className='relative flex items-center group '>
          <MdChevronLeft onClick={slideLeft} className='bg-white absolute opacity-80 left-3 z-10 cursor-pointer rounded-full text-gray-600 hidden group-hover:block' size={40} />
          <div id={`slider`} className=' w-full h-full whitespace-nowrap slider scroll-smooth overflow-scroll'>
            {
              movies.map(({ title, id, backdrop_path }) => {
                return (
                  <div key={id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
                    <img className='w-full h-40 block object-cover object-top' src={createImageURl(backdrop_path, "w500")} alt={title} />
                    <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
                      <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center  h-full font-nsans-medium'>{title}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <MdChevronRight onClick={slideRight} className='bg-white absolute opacity-80 right-3 rounded-full cursor-pointer text-gray-600 hidden group-hover:block z-10' size={40} />
        </div>
      </div>
    </div >
  )
}

export default Profile
