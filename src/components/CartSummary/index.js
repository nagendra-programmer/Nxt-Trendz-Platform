import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount = cartList.reduce(
        (acc, each) => acc + each.price * each.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1>
            Order Total: <span>Rs {totalAmount}/-</span>
          </h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
