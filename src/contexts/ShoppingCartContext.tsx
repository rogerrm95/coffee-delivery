import { createContext, ReactNode, useState } from 'react'
// hook //
import { useLocalStorage } from '../hooks/useLocalStorage'

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
  const { loadLocalStorage, saveToLocalStorage } = useLocalStorage()

  const [cart, setCart] = useState(() => {
    const cartJSON = loadLocalStorage('@coffee-delivery:shop-cart')

    if (!cartJSON) return [] as FullCartList[]

    return cartJSON as FullCartList[]
  })

  function addProductToShopCart(product: Product, count: number) {
    const hasProductIndex = cart.findIndex(
      (item) => item.product.id === product.id,
    )

    if (hasProductIndex < 0) {
      const newList = [...cart, { product, count }]

      setCart(newList)
      saveToLocalStorage(newList, '@coffee-delivery:shop-cart')
    } else {
      const newList = cart.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, count: count + item.count }
        } else {
          return item
        }
      })

      setCart(newList)
      saveToLocalStorage(newList, '@coffee-delivery:shop-cart')
    }
  }

  return (
    <ShoppingCartContext.Provider value={{ cart, addProductToShopCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
