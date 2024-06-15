import { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import CategoryLinks from '@/components/CategoryLinks';
import { useGetProductsQuery } from '@/services/products';
import useCart from '@/hooks/useCart';

const HomePage = () => {
	const [params] = useSearchParams();
	const { addProduct, isInCart, removeProduct } = useCart();
	const { data: products } = useGetProductsQuery(params.get('query') || '', {
		refetchOnMountOrArgChange: true
	});
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
					<h2 className='text-2xl'>
						{params.get('query')
							? `Showing results for '${params.get('query')}'`
							: 'Popular Picks'}
					</h2>

					<div className='container mx-auto grid gap-6 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2'>
						<Suspense>
							{products &&
								(products.length > 0 ? (
									products.map((product) => (
										<ProductCard
											addProduct={addProduct}
											removeProduct={removeProduct}
											inCart={isInCart}
											key={product.title}
											{...product}
										/>
									))
								) : (
									<span>No Results Found</span>
								))}
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
