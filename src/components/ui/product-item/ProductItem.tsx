import { FC } from 'react'
import { IProduct } from '../../../types/product.interface'

import style from './ProductItem.module.scss'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className={style.item}>
      <Link to={`/product/${product.id}`}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${product.thumbnail})` }}
        />
      </Link>
      <div className={style.heading}>{product.title}</div>
      <div className={style.price}>
        {new Intl.NumberFormat('un-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(product.price)}
      </div>
    </div>
  )
}

export default ProductItem
