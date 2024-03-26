import { useQuery } from '@tanstack/react-query'
import Layout from '../../ui/layout/Layout'
import style from './Product.module.scss'
import { ProductService } from '../../../services/product.service'
import { useParams } from 'react-router-dom'
import Button from '../../ui/button/Button'
import Gallery from './gallery/Gallery'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { IProduct } from '../../../types/product.interface'

export default function Product() {
  // const { data: products, isLoading } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => ProductService.getProducts(),
  //   select: ({ products }) => products,
  // })

  const { items } = useTypedSelector(state => state.cart)

  const { addToCart, removeInCart } = useActions()

  const { id } = useParams()

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => ProductService.getProductsById(id || ''),
  })

  const isInCart = items.some((item: IProduct) => item.id === Number(id))

  if (!product) return <Layout>Product not found</Layout>

  return (
    <Layout>
      {isLoading && <p>Loading...</p>}
      <h1 className={style.title}>{product.title}</h1>
      {<Gallery images={product?.images} />}
      <div className={style.price}>
        {new Intl.NumberFormat('un-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(product.price)}
      </div>
      <Button
        onClick={() =>
          isInCart ? removeInCart(Number(id)) : addToCart(product)
        }
      >
        {isInCart ? 'Remove from cart' : 'Add to cart'}
      </Button>
    </Layout>
  )
}
