import { ProductService } from '../../../services/product.service'
import { useQuery } from '@tanstack/react-query'
import ProductItem from '../../ui/product-item/ProductItem'

import style from './Home.module.scss'
import Layout from '../../ui/layout/Layout'
import { Link } from 'react-router-dom'

export default function Home() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => ProductService.getProducts(),
    select: ({ products }) => products,
  })

  //   const [products, setProducts] = useState<IProduct[]>([])
  //   const [isLoading, setIsLoading] = useState(true)
  //   const [isError, setIsError] = useState(false)

  //   useEffect(() => {
  //     const fetch = async () => {
  //       try {
  //         const { products } = await ProductService.getProducts()
  //         setProducts(products)
  //       } catch (e) {
  //         setIsError(true)
  //       } finally {
  //         setIsLoading(false)
  //       }
  //     }
  //     fetch()
  //   }, [])

  //   useEffect(() => {
  //     ProductService.getProducts()
  //       .then(({ products }: any) => setProducts(products))
  //       .catch(() => setIsError(true))
  //       .finally(() => setIsLoading(false))
  //   }, [])

  return (
    <>
      {isLoading && <div>Loading...</div>}

      <Layout title='Shop the collection'>
        <div className={style.wrapper}>
          {products?.map((product: any) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </Layout>
    </>
  )
}
