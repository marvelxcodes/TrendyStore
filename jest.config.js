export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1'
	},
	modulePaths: ['./tests'],
	coverageDirectory: '../coverage',
	moduleFileExtensions: ['js', 'tsx', 'ts'],
	transform: { '^.+\\.(t|j)s$': 'ts-jest' },
	collectCoverageFrom: ['**/*.(ts,tsx,js)']
};
