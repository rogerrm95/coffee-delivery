import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
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
  updateCounOfProduct: (productID: number, count: number) => void
  deleteProductAtTheCart: (productID: number) => void
  clearCart: () => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextData>(
  {} as ShoppingCartContextData,
)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const { loadLocalStorage, saveToLocalStorage } = useLocalStorage()

  // CARRINHO DE COMPRAS //
  const [cart, setCart] = useState(() => {
    const cartJSON = loadLocalStorage('@coffee-delivery:shop-cart')

    if (!cartJSON) return [] as FullCartList[]

    return cartJSON as FullCartList[]
  })

  // Função responsável por adicionar um produto ao carrinho de compras OU //
  // Incrementa a quantidade do mesmo caso já tenha na lista //
  function addProductToShopCart(product: Product, count: number) {
    const hasProductIndex = cart.findIndex(
      (item) => item.product.id === product.id,
    )

    if (hasProductIndex < 0) {
      const newList = [...cart, { product, count }]

      setCart(newList)
      saveToLocalStorage(newList, '@coffee-delivery:shop-cart')
      toast.success('Item adicionado ao carrinho')
    } else {
      const newList = cart.map((item) => {
        if (item.product.id === product.id) {
          if (item.count + count > 99) {
            toast.warn('Quantidade máxima: 99')
            return item
          }
          toast.success('Item adicionado ao carrinho')
          return { ...item, count: count + item.count }
        } else {
          return item
        }
      })

      setCart(newList)
      saveToLocalStorage(newList, '@coffee-delivery:shop-cart')
    }
  }

  // Função responsável por atualizar a quantidade de itens de um certo produto //
  function updateCounOfProduct(productID: number, count: number) {
    const updatedCartList = cart.map((item) => {
      return productID === item.product.id ? { ...item, count } : item
    })

    setCart(updatedCartList)
  }

  // Função responsável por excluir o produto do carrinho //
  function deleteProductAtTheCart(productID: number) {
    const newCartList = cart.filter((item) => item.product.id !== productID)

    setCart(newCartList)
    localStorage.setItem(
      '@coffee-delivery:shop-cart',
      JSON.stringify(newCartList),
    )
  }

  // Função responsável por esvaziar o carrinho após uma compra //
  function clearCart() {
    setCart([])
    localStorage.removeItem('@coffee-delivery:shop-cart')
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addProductToShopCart,
        updateCounOfProduct,
        deleteProductAtTheCart,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
