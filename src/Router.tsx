import { Route, Routes } from 'react-router-dom'
// Pages //
import { DefaultLayout } from './layouts/defaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { SuccessOrder } from './pages/SuccessOrder'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success-order" element={<SuccessOrder />} />
      </Route>
    </Routes>
  )
}
