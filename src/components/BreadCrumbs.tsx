import { ChevronRightIcon } from '@heroicons/react/24/outline';

type BreadCrumbsProps = {
	path: string[];
};

const BreadCrumbs = ({ path }: BreadCrumbsProps) => {
	return (
		<div className='flex items-center'>
			{path.map((route, index) => (
				<div className='flex items-center'>
					<span className='font-medium'>{route}</span>
					{index < path.length - 1 && (
						<ChevronRightIcon
							height={16}
							strokeWidth={2.5}
							width={16}
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default BreadCrumbs;
