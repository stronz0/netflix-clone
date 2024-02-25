import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'
const Main = () => {
	const [movies, setMovies] = useState([])

	const movie = movies[Math.floor(Math.random() * movies.length)]

	useEffect(() => {
		axios.get(requests.requestPopular).then(response => {
			setMovies(response.data.results)
		})
	}, [])

	const truncateString = (str, num) => {
		if (str?.length > num) {
			return str.slice(0, num) + '...'
		} else {
			return str
		}
	}

	console.log(movie)
	return (
		<div className='w-full h-[700px] text-white'>
			<div className='w-full h-full'>
				<div className='absolute w-full h-[700px] bg-gradient-to-r from-black'></div>
				<img
					className='object-cover h-full w-full'
					src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				<div className='absolute w-full top-[20%] p-4 md:p-8'>
					<h1 className='block pb-[50px] text-4xl top-[20%] py-2 px-5 text-white font-bold dark:text-white'>
						{movie?.title}
					</h1>
					<div>
						<button className='py-2 px-5 ml-4 text-4xl btn btn-outline btn-error  pb-[50px]'>
							Play{' '}
						</button>
						<button className='py-2 px-5 ml-4 text-4xl btn btn-outline btn-error  pb-[50px]'>
							Watch Later
						</button>
					</div>
					<p className='pt-5 py-2 px-5 w-full text-gray-400 text-sm '>
						Released: {movie?.release_date}
					</p>
					<p className='py-2 px-5 w-full text-gray-300 font-bold text-xl'>
						{truncateString(movie?.overview, 150)}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Main
