import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const App = () => (
	<Routes>
		<Route path='/products' element={<ProductsPage />} />
		<Route path='/product/:id' element={<ProductDetailPage />} />
		<Route path='*' element={<NotFoundPage />} />
	</Routes>
)

export default App
