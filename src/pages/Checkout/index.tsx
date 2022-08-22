import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
// Components //
import { ClientInfoForm } from './components/ClientInfoForm'
import { ShoppingCart } from './components/ShoppingCart'
// Styles //
import { Container, Form } from './styles'
import { useCart } from '../../hooks/useCart'

// Schema validation - ClientForm //
const checkoutFormValidationSchema = zod.object({
  street: zod.string(),
  numberHouse: zod.string(),
  complement: zod.string().optional(),
  district: zod.string(),
  city: zod.string(),
  uf: zod.string().min(2).max(2),
})

export type CheckoutFormValues = zod.infer<typeof checkoutFormValidationSchema>
export type PaymentMethod = 'cash' | 'credit' | 'debit'

// Page - Checkout //
export function Checkout() {
  const navigate = useNavigate()
  const { cart, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>()

  const methods = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormValidationSchema),
    mode: 'onSubmit',
  })
  const { handleSubmit, reset } = methods

  // Função responsável por realizar um pedido //
  function handleCheckout(data: CheckoutFormValues) {
    if (cart.length <= 0) {
      alert('Necessário escolher algum produto')
      return
    }

    if (!paymentMethod) {
      alert('Necessário escolher um método de pagamento')
      return
    }

    reset()
    clearCart()

    navigate('/success-order', {
      state: {
        paymentMethod,
        address: data,
      },
    })
  }

  // Função responsável alterar o método de pagamento //
  function handleSelectedPaymentMethod(method: PaymentMethod) {
    setPaymentMethod(method)
  }

  return (
    <Container>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(handleCheckout)}>
          <ClientInfoForm
            paymentMethod={paymentMethod}
            onSelectedPaymentMethod={handleSelectedPaymentMethod}
          />

          <ShoppingCart />
        </Form>
      </FormProvider>
    </Container>
  )
}
