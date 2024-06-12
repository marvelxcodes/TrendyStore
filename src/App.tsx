import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';

import HomePage from '@/pages/home';
import CartPage from '@/pages/cart';
import ProductPage from '@/pages/product';
import ProductsPage from '@/pages/products';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/:category'
					element={<ProductsPage />}
				/>
				<Route
					path='/product/:id'
					element={<ProductPage />}
				/>
				<Route
					path='/cart'
					element={<CartPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
