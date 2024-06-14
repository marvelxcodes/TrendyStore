type RatingsBarProps = {
	rating: number;
};

const RatingsBar = ({ rating }: RatingsBarProps) => {
	return (
		<div className='flex'>
			{[...Array(5).keys()].map((i) => (
				<img
					key={i}
					height={20}
					width={20}
					src={i < rating ? '/icons/star-filled.svg' : '/icons/star.svg'}
					alt='star'
				/>
			))}
		</div>
	);
};

export default RatingsBar;
