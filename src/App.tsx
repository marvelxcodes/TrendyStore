import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/store';
import Header from '@/components/Header';

const HomePage = lazy(() => import('@/pages/home'));
const CartPage = lazy(() => import('@/pages/cart'));
const ProductPage = lazy(() => import('@/pages/product'));
const ProductsPage = lazy(() => import('@/pages/products'));

function App() {
	return (
		<BrowserRouter>
			<ReduxProvider store={store}>
				<Header />
				<Suspense>
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
				</Suspense>
			</ReduxProvider>
		</BrowserRouter>
	);
}

export default App;
