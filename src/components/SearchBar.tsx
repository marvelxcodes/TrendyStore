import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
	const navigate = useNavigate();
	const [params] = useSearchParams();
	const debounced = useDebouncedCallback((value) => {
		navigate(`/?query=${value}`);
	}, 500);

	return (
		<div
			role='searchbox'
			className='flex px-3 items-center gap-x-2 border py-1 rounded-lg w-96'
		>
			<MagnifyingGlassIcon
				height={22}
				width={22}
				color='#aaa'
			/>
			<input
				type='search'
				defaultValue={params.get('query') || ''}
				onChange={(e) => {
					debounced(e.currentTarget.value);
				}}
				className='outline-none text-lg flex-1 border-none'
			/>
		</div>
	);
};

export default SearchBar;
