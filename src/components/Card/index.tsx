import { ImgHTMLAttributes } from 'react'
import { CardCart, CardContainer } from './style'
import { DoubleButton } from '../DoubleButton'

interface ImgCard extends ImgHTMLAttributes<HTMLImageElement> {
  img?: any
  title?: string
  description?: string
  tags: string[]
  alt: string
  price: string
}

export function Card({
  img,
  title,
  description,
  price,
  alt,
  tags,
  ...props
}: ImgCard) {
  return (
    <CardContainer>
      <header>
        <img src={img} {...props} alt={alt} />
        <div>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h1>{title}</h1>
      </header>
      <div>
        <p>{description}</p>
      </div>
      <footer>
        <div>
          <span>
            R$
            <strong>{price}</strong>
          </span>
          <DoubleButton />
          <button type="button">
            <CardCart />
          </button>
        </div>
      </footer>
    </CardContainer>
  )
}
