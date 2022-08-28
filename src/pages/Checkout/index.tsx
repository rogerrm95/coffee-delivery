import { useEffect, useState } from 'react'
// Hook //
import { useCart } from '../../hooks/useCart'
// Libs //
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as zod from 'zod'
// Components //
import { ClientInfoForm } from './components/ClientInfoForm'
import { ShoppingCart } from './components/ShoppingCart'
// Styles //
import { Container, Form } from './styles'

// Schema validation - ClientForm //
const checkoutFormValidationSchema = zod.object({
  street: zod.string().min(3),
  numberHouse: zod.string().min(1, 'Informar o número da residência'),
  complement: zod.string().optional(),
  district: zod.string(),
  city: zod.string().min(3),
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
  })
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  // Se houver algum erro no formulário, exibirá um erro //
  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      toast.error('Preencher corretamente o formulário de endereço')
    }
  }, [errors])

  // Função responsável por realizar um pedido //
  function handleCheckout(data: CheckoutFormValues) {
    if (cart.length <= 0) {
      toast.warn('Carrinho se encontra vazio =(')
      return
    }

    if (!paymentMethod) {
      toast.warn('Necessário escolher um método de pagamento')
      return
    }

    reset()
    clearCart()

    navigate('/success-order', {
      state: {
        paymentMethod,
        address: data,
      },
      replace: true,
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
