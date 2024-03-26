import { useState } from 'react'
import style from './Gallery.module.scss'

import cn from 'clsx'

interface IGallery {
  images: string[]
}

export default function Gallery({ images }: IGallery) {
  const [slide, setSlide] = useState(0)

  return (
    <div className={style.gallery}>
      <div
        className={cn(style.image, style.main)}
        style={{ backgroundImage: `url(${images[slide]})` }}
      />
      <div className={style.list}>
        {images.map((image, index) => (
          <button
            className={cn(style.slide, {
              [style.active]: slide === index,
            })}
            onClick={() => setSlide(index)}
            key={image}
          >
            <div
              className={style.img}
              style={{ backgroundImage: `url(${image})` }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
