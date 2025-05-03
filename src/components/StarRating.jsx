import React from 'react'

const StarRating = ({ rating }) => {
	const stars = Math.round(rating)
	return (
		<div>
			{[...Array(5)].map((_, i) => (
				<span key={i} style={{ color: i < stars ? 'orange' : 'black' }}>
					★
				</span>
			))}
		</div>
	)
}

export default StarRating
