import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BreadCrumbs from '../../src/components/BreadCrumbs';

describe('BreadCrumbs component', () => {
	it('renders without crashing', () => {
		render(<BreadCrumbs path={['Home', 'About', 'Contact']} />);
		const breadcrumbElements = screen.getAllByText(/Home|About|Contact/);
		expect(breadcrumbElements.length).toBe(3);
	});

	it('displays the correct number of routes', () => {
		render(<BreadCrumbs path={['Home', 'Services', 'Contact']} />);
		const routeElements = screen.getAllByText(/Home|Services|Contact/);
		expect(routeElements.length).toBe(3);
	});

	it('displays the ChevronRightIcon between routes', () => {
		render(<BreadCrumbs path={['Home', 'Services', 'Contact']} />);
		const chevronIcons = screen.getAllByTestId('chevron-icon');
		expect(chevronIcons.length).toBe(2);
	});

	it('does not display the ChevronRightIcon after the last route', () => {
		render(<BreadCrumbs path={['Home', 'Services', 'Contact']} />);
		const chevronIcons = screen.getAllByTestId('chevron-icon');
		expect(chevronIcons.length).toBeLessThan(3);
	});

	it('renders with a single route without chevron icon', () => {
		render(<BreadCrumbs path={['Home']} />);
		const chevronIcons = screen.queryByTestId('chevron-icon');
		expect(chevronIcons).toBeNull();
	});
});
