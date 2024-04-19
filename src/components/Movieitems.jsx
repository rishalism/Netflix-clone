import React, { useState } from 'react'
import { createImageURl } from '../services/movieService'
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { UserAuth } from '../context/AuthContext'


function Movieitems(props) {

  const { user } = UserAuth()
  const { title, backdrop_path } = props.movie
  const [like, setLike] = useState(false)

  const markFavShow = async () => {
    const userEmail = user?.email;
    if (userEmail) {
      const userDoc = doc(db, 'users', userEmail)
      setLike(!like)
      await updateDoc(userDoc, {
        favShows: arrayUnion({ ...props.movie })
      })
    } else {
      alert('login to like movies')
    }
  }



  return (
    <div onClick={markFavShow} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
      <img className='w-full h-40 block object-cover object-top' src={createImageURl(backdrop_path, "w500")} alt={title} />
      <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
        <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center  h-full font-nsans-medium'>{title}</p>
        <p >{like ? <LiaHeartSolid LiaHeart size={20} className='absolute  left-2 top-2 text-gray-50' /> : <LiaHeart size={20} className='absolute  left-2 top-2 text-gray-50' />}</p>
      </div>
    </div>
  )
}

export default Movieitems
