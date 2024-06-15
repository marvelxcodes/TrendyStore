import { Link } from 'react-router-dom';

type CategoryLinksProps = {
	categories: string[];
};

const CategoryLinks = ({ categories }: CategoryLinksProps) => {
	return (
		<div
			role='menubar'
			className='flex flex-wrap gap-3'
		>
			<Link
				key={'all'}
				to={`/`}
				role='menuitem'
				className='bg-[#1db2b1] px-6 rounded-lg py-2'
			>
				<span className='text-white font-semibold uppercase'>All</span>
			</Link>
			{categories?.map((category) => (
				<Link
					to={`/${category}`}
					key={category}
					role='menuitem'
					className='bg-[#1db2b1] px-6 rounded-lg py-2'
				>
					<span className='text-white font-semibold uppercase'>{category}</span>
				</Link>
			))}
		</div>
	);
};

export default CategoryLinks;
