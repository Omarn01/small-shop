import axios from 'axios'
import { IProduct, IProductsResponse } from '../types/product.interface'

axios.defaults.baseURL = 'https://dummyjson.com'

export const ProductService = {
  async getProducts() {
    const response = await axios.get<IProductsResponse>('/products', {
      params: {
        limit: 5,
      },
    })
    return response.data
  },
  async getProductsById(id: string) {
    const response = await axios.get<IProduct>(`/products/${id}`)
    return response.data
  },
}
