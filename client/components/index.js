import OrderConfirmation from './orderConfirmed'

/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {Catalog} from './catalog'
export {SingleProduct} from './singleProduct'
export {Cart} from './cart'
export {OrderConfirmed} from './orderConfirmed'
export {Checkout} from './checkout'
export {CheckoutCart} from './checkoutCart'
export {default as CatalogSidebar} from './sidebar'
export {AllOrders} from './allOrders'
export {singleOrder} from './singleOrder'
