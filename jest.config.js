export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1'
	},
	rootDir: './tests/components',
	modulePaths: ['./tests/components'],
	coverageDirectory: '../coverage',
	moduleFileExtensions: ['js', 'tsx', 'ts'],
	transform: { '^.+\\.(t|j)s$': 'ts-jest' },
	collectCoverageFrom: ['**/*.(ts,tsx,js)']
};
