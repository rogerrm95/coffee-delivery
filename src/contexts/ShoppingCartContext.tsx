import { createContext, ReactNode, useState } from 'react'
import { coffeesList } from '../utils/coffeeList'

interface ShoppingCartProviderProps {
  children: ReactNode
}

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

type FullCartList = {
  product: Product
  count: number
}

interface ShoppingCartContextData {
  cart: FullCartList[]
  addProductToShopCart: (product: Product, count: number) => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextData>(
  {} as ShoppingCartContextData,
)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, setCart] = useState([] as FullCartList[])
  // const cartJSON = localStorage.getItem('@coffee-delivery:shop-cart')

  // if (cartJSON) {
  //   return JSON.parse(cartJSON)
  // }

  // return []

  function addProductToShopCart(product: Product, count: number) {
    const coffeeSelected = coffeesList.find((item) => item.id === product.id)

    if (coffeeSelected) {
      setCart([...cart, { product: coffeeSelected, count }])
    }
  }

  return (
    <ShoppingCartContext.Provider value={{ cart, addProductToShopCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
