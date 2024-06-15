import { Suspense } from 'react';
import useCart from '@/hooks/useCart';
import ProductCard from '@/components/ProductCard';

const CartPage = () => {
	const { products, addProduct, isInCart, removeProduct } = useCart();
	return (
		<div>
			<div className='bg-neutral-100 min-h-[calc(100vh-4rem)]'>
				<div className='container mx-auto space-y-6 py-6 max-sm:px-6 px-3'>
					<h2 className='text-2xl'>Your Shopping Cart</h2>

					<div className='container mx-auto grid gap-6 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2'>
						<Suspense>
							{products.length > 0 ? (
								products.map((product) => (
									<ProductCard
										inCart={isInCart}
										key={product.title}
										addProduct={addProduct}
										removeProduct={removeProduct}
										{...product}
									/>
								))
							) : (
								<span>No Products Found</span>
							)}
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
