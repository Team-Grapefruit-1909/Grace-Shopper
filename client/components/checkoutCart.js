import React from 'react'
import {
  fetchItems,
  addAnItem,
  deleteItem,
  changeItem,
  clearAllItems
} from '../store/cart'
import {connect} from 'react-redux'

class unconnectedCheckoutCart extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.fetchItems()
  }
  async handleChange(event) {
    const productId = event.target.name
    const quantity = Number(event.target.value)
    const itemObj = {
      productId,
      quantity
    }
    await this.props.changeItem(itemObj)
    this.props.fetchItems()
  }
  render() {
    let cart
    this.props.cart === undefined ? (cart = [0]) : (cart = this.props.cart)
    return (
      <div className="cartContainer">
        <h3>Review Items</h3>
        {cart.length > 0
          ? cart.map(item => {
              const price = String(item.price)
              return (
                <div key={item.productId} className="productCart">
                  <img src={item.image} />
                  <div>Name: {item.name}</div>
                  <div>
                    Price: ${price.slice(0, price.length - 2)}.{price.slice(
                      price.length - 2
                    )}
                  </div>
                  <div>
                    Quantity:{' '}
                    <form>
                      <input
                        name={item.productId}
                        type="number"
                        min="1"
                        max={item.productQuantity}
                        value={item.quantity}
                        onChange={this.handleChange}
                      />
                    </form>
                  </div>
                </div>
              )
            })
          : 'Cart is Empty'}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    address: state.address
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    addToCart: item => dispatch(addAnItem(item)),
    deleteItem: item => dispatch(deleteItem(item)),
    changeItem: item => dispatch(changeItem(item)),
    clearCart: () => dispatch(clearAllItems())
  }
}

export const CheckoutCart = connect(mapStateToProps, mapDispatchToProps)(
  unconnectedCheckoutCart
)