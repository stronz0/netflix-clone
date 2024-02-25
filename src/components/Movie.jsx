import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import toast, { Toaster } from 'react-hot-toast'

const Movie = ({ item }) => {
	const [like, setLike] = useState(false)
	const [saved, setSaved] = useState(false)
	const { user } = UserAuth()

	const movieID = doc(db, 'users', `${user?.email}`)
	const errorAlert = () => toast.error('Please log in to save the movie')

	const saveShow = async () => {
		if (user?.email) {
			setLike(!like)
			setSaved(true)
			await updateDoc(movieID, {
				savedShows: arrayUnion({
					id: item.id,
					title: item.title,
					img: item.backdrop_path,
				}),
			})
		} else {
			errorAlert()
		}
	}

	return (
		<div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
			<img
				src={`http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
				alt={item?.title}
				className='w-full h-auto block'
			/>

			<div className='absolute top-0 left-0 w-full h-full hover:bg-black/90 opacity-0 hover:opacity-90 text-white group'>
				<p className='white-space-normal text-sm md:text-xl font-bold justify-center flex items-center h-full text-center '>
					{item?.title}
				</p>
				<p onClick={saveShow}>
					{like ? (
						<FaHeart className='absolute top-4 left-4 text-gray-300' />
					) : (
						<FaRegHeart className='absolute top-4 left-4 text-gray-300' />
					)}
				</p>
			</div>
		</div>
	)
}

export default Movie
