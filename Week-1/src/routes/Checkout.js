import { checkoutPath } from 'routes/helpers.js'
import CheckoutPage from 'components/views/Checkout/index.js'

export default {
  path: checkoutPath(),
  exact: true,
  component: CheckoutPage
}
