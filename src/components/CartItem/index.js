import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value

      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails

      const onRemove = () => removeCartItem(id)
      const onIncrement = () => incrementCartItemQuantity(id)
      const onDecrement = () => decrementCartItemQuantity(id)

      return (
        <li className="cart-item">
          <img
            className="cart-product-image"
            src={imageUrl}
            alt={title} // REQUIRED
          />

          <div className="cart-item-details-container">
            <div>
              <p>{title}</p>
              <p>by {brand}</p>
            </div>

            <div className="cart-quantity-container">
              <button type="button" data-testid="minus" onClick={onDecrement}>
                <BsDashSquare />
              </button>

              <p>{quantity}</p>

              <button type="button" data-testid="plus" onClick={onIncrement}>
                <BsPlusSquare />
              </button>
            </div>

            <p>Rs {price * quantity}/-</p>
          </div>

          <button type="button" data-testid="remove" onClick={onRemove}>
            <AiFillCloseCircle />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
