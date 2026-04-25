import {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'

const PaymentPopup = ({cartList, totalAmount}) => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const onConfirmOrder = () => {
    if (paymentMethod === 'COD') {
      setIsOrderPlaced(true)
    }
  }

  return (
    <Popup
      trigger={
        <button type="button" className="checkout-button">
          Checkout
        </button>
      }
      modal
    >
      {() => (
        <div className="popup-container">
          {isOrderPlaced ? (
            <p>Your order has been placed successfully</p>
          ) : (
            <>
              <h1>Payment</h1>
              <p>Select Payment Method</p>

              <div className="payment-options">
                <label>
                  <input type="radio" name="payment" disabled />
                  Card
                </label>

                <label>
                  <input type="radio" name="payment" disabled />
                  Net Banking
                </label>

                <label>
                  <input type="radio" name="payment" disabled />
                  UPI
                </label>

                <label>
                  <input type="radio" name="payment" disabled />
                  Wallet
                </label>

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={paymentMethod === 'COD'}
                    onChange={e => setPaymentMethod(e.target.value)}
                  />
                  Cash on Delivery
                </label>
              </div>

              <p>Total Items: {cartList.length}</p>
              <p>Total Price: Rs {totalAmount}/-</p>

              <button
                type="button"
                data-testid="confirm-order"
                disabled={paymentMethod !== 'COD'}
                onClick={onConfirmOrder}
              >
                Confirm Order
              </button>
            </>
          )}
        </div>
      )}
    </Popup>
  )
}

export default PaymentPopup
