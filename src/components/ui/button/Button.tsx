import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'
import style from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...props }: IButton) {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  )
}
