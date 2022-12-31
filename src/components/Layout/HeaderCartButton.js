import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
let isClicked = false;

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    isClicked = !isClicked;
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {isClicked ? (
        <span className={classes.badgeUpdate}>{numberOfCartItems}</span>
      ) : (
        <span className={classes.badge}>{numberOfCartItems}</span>
      )}
    </button>
  );
};

export default HeaderCartButton;
