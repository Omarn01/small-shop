import { Link } from 'react-router-dom'
import style from './Layout.module.scss'

interface ILayout {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title }: ILayout) {
  return (
    <div className={style.layout}>
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/cart'}>Cart</Link>
        </nav>
      </header>
      <h1 className={style.heading}>{title}</h1>
      {children}
    </div>
  )
}
