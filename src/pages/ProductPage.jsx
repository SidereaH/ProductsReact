import React, { useEffect, useState } from 'react'
import StarRating from '../components/StarRating.jsx'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])

	return (
		<div className='grid grid-cols-3 gap-4 p-4'>
			{products.map(product => (
				<div key={product.id} className='border p-2'>
					<Link to={`/product/${product.id}`}>{product.title}</Link>
					<StarRating rating={product.rating.rate} />
				</div>
			))}
		</div>
	)
}

export default ProductsPage
