import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartList = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartLists, addToCart, removeFromCart, updateCartListCount } =
    useContext(ShopContext);

  return (
    <div className="cartList">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: €{price}</p>
        <div className="count">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartLists[id]}
            onChange={(e) => updateCartListCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
