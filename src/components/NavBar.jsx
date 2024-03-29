import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const NavBar = () => {
	const { user, logOut } = UserAuth()
	console.log(user)
	const navigate = useNavigate()
	const handleLogout = async () => {
		try {
			await logOut()
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
			<Link to='/'>
				<h1 className='text-red-600 text-6xl cursor-pointer font-bold'>
					KINOWATCH by Pyndyk
				</h1>
			</Link>

			{user?.email ? (
				<div>
					<Link to='/account'>
						<button className='mr-5 glass rounded-lg h-full pl-5 bg-grey-500 text-white text-l font-bold [text-shadow:_0_1px_0_var(--tw-shadow-color)] pr-4'>
							Account
						</button>
					</Link>

					<Link to='/logout'>
						<button
							onClick={handleLogout}
							className='bg-red-600 px-6 font-bold  py-2 rounded cursor-pointer text-white'
						>
							Logout
						</button>
					</Link>
				</div>
			) : (
				<div>
					<Link to='/login'>
						<button className='mr-5 glass rounded-lg h-full pl-5 bg-grey-500 text-white text-l font-bold [text-shadow:_0_1px_0_var(--tw-shadow-color)] pr-4'>
							Sing In
						</button>
					</Link>

					<Link to='/singup'>
						<button className='bg-red-600 px-6 font-bold  py-2 rounded cursor-pointer text-white'>
							Sing Up
						</button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default NavBar
