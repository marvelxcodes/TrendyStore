import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RatingsBar from '../../src/components/RatingsBar';

describe('RatingsBar Component', () => {
	it('renders without crashing', () => {
		render(<RatingsBar rating={3} />);
		const stars = screen.getAllByAltText('star');
		expect(stars.length).toBe(5);
	});

	it('displays the correct number of filled stars', () => {
		render(<RatingsBar rating={3} />);
		const filledStars = (
			screen.getAllByAltText('star') as HTMLImageElement[]
		).filter((star) => star.src.includes('star-filled.svg'));
		expect(filledStars.length).toBe(3);
	});

	it('displays the correct number of empty stars', () => {
		render(<RatingsBar rating={2} />);
		const emptyStars = (
			screen.getAllByAltText('star') as HTMLImageElement[]
		).filter((star) => star.src.includes('star.svg'));
		expect(emptyStars.length).toBe(3);
	});

	it('displays all empty stars when rating is 0', () => {
		render(<RatingsBar rating={0} />);
		const emptyStars = (
			screen.getAllByAltText('star') as HTMLImageElement[]
		).filter((star) => star.src.includes('star.svg'));
		expect(emptyStars.length).toBe(5);
	});

	it('displays all filled stars when rating is 5', () => {
		render(<RatingsBar rating={5} />);
		const filledStars = (
			screen.getAllByAltText('star') as HTMLImageElement[]
		).filter((star) => star.src.includes('star-filled.svg'));
		expect(filledStars.length).toBe(5);
	});
});
