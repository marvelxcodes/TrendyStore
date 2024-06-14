import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='bg-white border-b h-16 '>
			<div className='container flex h-full gap-x-3 items-center mx-auto'>
				{/* Branding Section */}
				<div className='flex items-center gap-x-3 flex-1 font-semibold text-xl'>
					<img
						draggable={false}
						className='select-none'
						src='/logo512.png'
						height={52}
						width={52}
						alt='logo'
					/>
					<Link to='/'>Trendy Store</Link>
				</div>

				<SearchBar />

				<Link
					role='button'
					to='/cart'
				>
					<ShoppingCartIcon
						height={22}
						width={22}
						color='#aaa'
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
