import { ProductType } from '@/types/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
	endpoints: (builder) => ({
		getProducts: builder.query<ProductType[], string>({
			query: (query) => {
				return {
					url: `/products?query=${query}`
				};
			},
			transformResponse(baseQueryReturnValue: ProductType[], meta) {
				if (meta) {
					const url = new URL(meta.request.url);
					const query = url.searchParams.get('query') || '';

					// Search Algorithm
					return baseQueryReturnValue.filter(
						(product) =>
							product.title.toLowerCase().includes(query.toLowerCase()) ||
							product.description.toLowerCase().includes(query.toLowerCase())
					);
				} else {
					return [];
				}
			}
		}),

		getProductsByCategory: builder.query<ProductType[], string>({
			query: (category) => `/products/category/${category}`
		}),

		getProduct: builder.query<ProductType, string>({
			query: (id) => `/products/${id}`
		}),

		getCatregories: builder.query<ProductType, string>({
			query: () => `/products/categories`
		})
	})
});

export const {
	useGetProductQuery,
	useGetProductsQuery,
	useGetCatregoriesQuery,
	useGetProductsByCategoryQuery
} = productsApi;
