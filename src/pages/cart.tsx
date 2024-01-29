import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "abc",
    photo: "https://picsum.photos/200",
    name: "Product 1",
    price: 1000,
    quantity: 1,
    stock: 10,
  },
];

const subtotal = 4000;
const Tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + Tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No Item Added</h1>
        )}
      </main>
      <aside>
        <p>SubTotal: ₹{subtotal}</p>
        <p>shippingCharges: ₹{shippingCharges}</p>
        <p>Tax: ₹{Tax}</p>
        <p>
          Discount : <em>- ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total} </b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon Code <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Cheackout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
