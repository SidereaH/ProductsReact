import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'

const ProductDetailPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [product, setProduct] = useState(null)

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then(res => res.json())
			.then(data => setProduct(data))
	}, [id])

	if (!product) return <p>Loading...</p>

	return (
		<div className='p-4 border'>
			<h2>{product.title}</h2>
			<img src={product.image} alt={product.title} className='h-48 mx-auto' />
			<p>
				<strong>Price:</strong> ${product.price}
			</p>
			<p>
				<strong>Description:</strong> {product.description}
			</p>
			<StarRating rating={product.rating.rate} />
			<button onClick={() => navigate(-1)}>НАЗАД</button>
		</div>
	)
}

export default ProductDetailPage
