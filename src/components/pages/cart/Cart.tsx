import { useSelector } from 'react-redux'
import Layout from '../../ui/layout/Layout'
import style from './Cart.module.scss'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useActions } from '../../../hooks/useActions'
import { IProduct } from '../../../types/product.interface'
import Button from '../../ui/button/Button'

export default function Cart() {
  const { items } = useTypedSelector(state => state.cart)

  const { removeInCart } = useActions()

  console.log(items)

  return (
    <Layout title='Cart'>
      {items.map((item: IProduct) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <img src={item.thumbnail} />
          <Button onClick={() => removeInCart(item.id)}>Remove</Button>
        </div>
      ))}
    </Layout>
  )
}
