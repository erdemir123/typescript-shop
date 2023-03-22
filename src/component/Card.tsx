import React from 'react'
import { ProductType } from '../types/ProductTpye'
interface ıProps{
    product:ProductType
}

const Card = ({product}:ıProps) => {
    console.log(product)
  return (
    <div>Card</div>
  )
}

export default Card