import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
	const navigate = useNavigate()
	return (
		<div className='text-center p-4'>
			<h2>Страница не найдена</h2>
			<button onClick={() => navigate('/products')}>На список товаров</button>
		</div>
	)
}

export default NotFoundPage
