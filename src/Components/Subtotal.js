import React from "react";
import CurrencyFormat from "react-currency-format";
import "../CSS/Subtotal.css";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({cart?.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" />
                This order contains gift.
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs."}
      />
      <button>
        Proceed to Checkout
        {<DoubleArrowIcon />}
      </button>
    </div>
  );
};

export default Subtotal;
