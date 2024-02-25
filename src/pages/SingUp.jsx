import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SingUp = () => {
	const { user, singUp } = UserAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await singUp(email, password)
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<div className='h-screen w-full'>
				<img
					className='hidden sm:block absolute w-full h-full object-cover'
					src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/0a967d1a-b3d0-469b-b857-08d3954ba3fd/UA-ru-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg'
					alt=''
				/>
				<div className='bg-black/60 fixed top-0 left-o w-full h-screen'></div>
				<div className='fixed w-full px-4 py-24 z-50'>
					<div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
						<div className='max-w-[320px] mx-auto py-16'>
							<h1 className='text-4xl font-bold'>Sign Up</h1>
							<form
								onSubmit={handleSubmit}
								className='w-full flex flex-col py-4'
							>
								<input
									onChange={e => setEmail(e.target.value)}
									className='p-3 my-2 bg-gray-700 rounded'
									type='email'
									placeholder='Email'
									autoComplete='email'
								/>
								<input
									onChange={e => setPassword(e.target.value)}
									className='p-3 my-2 bg-gray-700 rounded'
									type='password'
									placeholder='Password'
									autoComplete='current-password'
								/>
								<button className='py-3 my-6 btn btn-error text-white text-bold text-xl'>
									Sing Up
								</button>
								<div className='flex justify-between items-center text-gray-500'>
									<p>
										<input className='mr-2' type='checkbox' />
										Remember me
									</p>
									<p>Need help?</p>
								</div>
								<p className='mt-7 text-gray-500 '>
									ALready subscribed on Netflix?{' '}
									<Link className='text-gray-300 pl-3' to='/login'>
										Sing In
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SingUp
