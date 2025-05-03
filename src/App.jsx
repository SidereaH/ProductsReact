import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => (
	<Routes>
		<Route path='/products' element={<ProductsPage />} />
		<Route path='/product/:id' element={<ProductDetailPage />} />
		<Route path='*' element={<NotFoundPage />} />
	</Routes>
)

export default App
