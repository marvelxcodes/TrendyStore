import { ProductType } from '@/types/api';
import { useEffect, useState } from 'react';

export default function useCart() {
	const [products, setProducts] = useState<ProductType[]>([]);

	function isInCart(id: number) {
		return products.map((product) => product.id).includes(id);
	}

	function addProduct(newProduct: ProductType) {
		setProducts([...products, newProduct]);
		localStorage.setItem('cart', JSON.stringify([...products, newProduct]));
	}

	function removeProduct(id: number) {
		setProducts((products) => products.filter((product) => product.id !== id));
		localStorage.setItem(
			'cart',
			JSON.stringify(products.filter((product) => product.id !== id))
		);
	}

	function fetchProducts() {
		const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
		setProducts(localCart);
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		console.log(products);
	}, [products]);
	return { products, addProduct, removeProduct, isInCart };
}
