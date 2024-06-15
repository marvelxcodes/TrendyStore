import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite',
			viteConfig
		}
	},
	e2e: {
		baseUrl: 'http://localhost:5173',
		supportFile: false,
		specPattern: './tests/e2e/**/*.{ts,tsx}'
	}
});
