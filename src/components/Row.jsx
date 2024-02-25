import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchURL, rowID }) => {
	const [movies, setMovies] = useState([])
	const [like, setLike] = useState(false)
	useEffect(() => {
		axios.get(fetchURL).then(response => {
			setMovies(response.data.results)
		})
	}, [fetchURL])

	const sliderLeft = () => {
		let slider = document.getElementById('slider' + rowID)
		slider.scrollLeft = slider.scrollLeft - 500
	}

	const sliderRight = () => {
		let slider = document.getElementById('slider' + rowID)
		slider.scrollLeft = slider.scrollLeft + 500
	}

	return (
		<>
			<h2 className='text-white font-bold text-4xl pt-10 md:text-4xl p-4'>
				{title}
			</h2>
			<div className='relative flex items-center group'>
				<MdChevronLeft
					onClick={sliderLeft}
					className='bg-white absolute size-[50px] left-0 rounded-full opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
					size={40}
				/>
				<div
					id={'slider' + rowID}
					className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '
				>
					{movies.map((item, id) => (
						<Movie key={id} item={item} />
					))}
				</div>
				<MdChevronRight
					onClick={sliderRight}
					className='bg-white absolute size-[50px] right-0 rounded-full opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block '
					size={40}
				/>
			</div>
		</>
	)
}

export default Row
