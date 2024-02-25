import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
import SavedShows from '../components/SavedShows'

const Account = () => {
	return (
		<div className=' w-full h-full'>
			<div className='w-full text-white'>
				<img
					className='w-full h-full absolute object-cover'
					src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
					alt='/'
				/>
				<div className='bg-black/60 fixed top-0 left-0 w-full h-full'></div>
				<div className='absolute top-[20%] p-4 md:p-8'>
					<h1 className='text-3xl md:text-8xl font-bold'>My Shows</h1>
				</div>
			</div>
			<SavedShows />
			<div className='w-full h-full bg-black'></div>
		</div>
	)
}

export default Account
