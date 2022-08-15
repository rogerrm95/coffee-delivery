import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

export const useCart = () => {
  return useContext(ShoppingCartContext)
}
