import Button from './Button';
import { Link } from 'react-router-dom';
import { ProductType } from '@/types/api';
import RatingsBar from './RatingsBar';

type ProductCardProps = ProductType & {
	inCart: (id: number) => boolean;
	addProduct: (newProduct: ProductType) => void;
	removeProduct: (id: number) => void;
};

const ProductCard = ({
	id,
	image,
	title,
	price,
	rating,
	category,
	description,
	inCart,
	addProduct,
	removeProduct
}: ProductCardProps) => {
	return (
		<div
			key={id}
			className='flex max-lg:flex-col border p-6 gap-x-3 bg-white'
		>
			<div className='lg:w-36 grid w-full place-items-center'>
				<Link
					to={`/product/${id}`}
					className='p-3 aspect-square grid place-items-center'
				>
					<img
						className=''
						height={100}
						width={100}
						src={image}
						alt={title}
					/>
				</Link>
			</div>
			<div className='flex-1 py-3 space-y-3'>
				<div>
					<Link
						to={`/product/${id}`}
						className='text-xl font-medium hover:text-cyan-600'
					>
						{title}
					</Link>
					<div className='flex gap-x-1'>
						<RatingsBar rating={Math.round(rating.rate)} />
						<span className='text-lg font-semibold'>{rating.rate}</span>
					</div>
					<p className='text-2xl'>{price} $</p>
				</div>

				<Button
					onClick={() =>
						inCart(id)
							? removeProduct(id)
							: addProduct({
									id,
									image,
									title,
									price,
									rating,
									category,
									description
								})
					}
					className='max-lg:w-full'
				>
					{inCart(id) ? 'Remove from Cart' : 'Add to Cart'}
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
