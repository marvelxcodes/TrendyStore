import BreadCrumbs from '@/components/BreadCrumbs';
import Button from '@/components/Button';
import RatingsBar from '@/components/RatingsBar';
import { useGetProductQuery } from '@/services/products';
import {
	ArrowLeftIcon,
	ShareIcon,
	ShoppingCartIcon
} from '@heroicons/react/24/outline';
import { useNavigate, useParams } from 'react-router-dom';

const ProductPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data: product, isLoading } = useGetProductQuery(id!);

	function handleBack() {
		navigate(-1);
	}

	if (isLoading) {
		return <div>Loading</div>;
	}

	if (!product) {
		return <div>Product Not Found</div>;
	}

	const handleShare = () => {
		const url = new URL('https://x.com/intent/post');
		url.searchParams.set('text', `Buy ${product.title} on : `);
		url.searchParams.set('url', location.href.toString());

		location.href = url.toString();
	};

	return (
		<div className='min-h-[calc(100vh-4rem)] flex w-full bg-neutral-100 p-6'>
			<div className='grid grid-cols-5 flex-1 divide-x border bg-white'>
				<div className='col-span-2 grid place-items-center relative'>
					<button
						onClick={handleBack}
						role='link'
						className='flex items-center justify-center h-9 w-9 rounded-full bg-accent absolute left-3 top-3'
					>
						<ArrowLeftIcon
							strokeWidth={3}
							width={20}
							height={20}
							color='white'
						/>
					</button>
					<div className='select-none'>
						<img
							draggable={false}
							height={300}
							width={300}
							src={product.image}
							alt={product.title}
						/>
					</div>
				</div>
				<div className='col-span-3 space-y-3 p-6'>
					<BreadCrumbs
						path={['Home', product.category, product.title.toLowerCase()]}
					/>

					<h1 className='text-2xl font-medium text-accent'>{product.title}</h1>
					<span className='block uppercase font-medium text-accent'>
						{product.category}
					</span>

					<div>
						<span className='block font-medium'>Product description</span>
						<p className='font-medium text-neutral-500 text-lg'>
							{product.description}
						</p>
					</div>

					<div>
						<span className='block font-medium'>Product Ratings</span>

						<div className='flex gap-x-1'>
							<RatingsBar rating={Math.round(product.rating.rate)} />
							<span className='text-lg text-neutral-600 font-semibold'>
								{product.rating.rate}
							</span>
						</div>
					</div>

					<div className='flex gap-x-3'>
						<Button className='inline-flex gap-x-2 items-center'>
							Add to Cart
							<ShoppingCartIcon
								width={20}
								height={20}
							/>
						</Button>
						<Button
							role='link'
							onClick={handleShare}
							className='inline-flex gap-x-2 items-center'
						>
							Share Link
							<ShareIcon
								width={20}
								height={20}
							/>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
