import CategoryLinks from '@/components/CategoryLinks';
import ProductCard from '@/components/ProductCard';
import useCart from '@/hooks/useCart';
import { useGetProductsByCategoryQuery } from '@/services/products';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
	const params = useParams();
	const { addProduct, isInCart, removeProduct } = useCart();

	const { data: products } = useGetProductsByCategoryQuery(
		params.category || ''
	);
	return (
		<div className='bg-neutral-100 min-h-[calc(100vh-4rem)]'>
			<div className='container mx-auto space-y-6 py-6 max-sm:px-6 px-3'>
				<CategoryLinks
					categories={[
						'electronics',
						'jewelery',
						"men's clothing",
						"women's clothing"
					]}
				/>
				<div className='space-y-3'>
					<h2 className='text-2xl'>Popular Picks</h2>

					<div className='container mx-auto grid gap-6 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2'>
						<Suspense>
							{products?.map((product) => (
								<ProductCard
									addProduct={addProduct}
									inCart={isInCart}
									removeProduct={removeProduct}
									key={product.id}
									{...product}
								/>
							))}
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
