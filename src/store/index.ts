import { productsApi } from '@/services/products';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware)
});

setupListeners(store.dispatch);
