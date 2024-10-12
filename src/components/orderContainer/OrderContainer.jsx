import "./orderContainer.css";
import { orderData } from "../../util";

const OrderContainer = () => {
  return (
    <div className="table-container">
      <div className="order-table">
        <div className="table-title">
          <p className="table-title-order-id">
            Order No - <span className="order-id">#SPK-1023</span>
          </p>
          <p className="table-title-date">Estimated Delivery: 14, Oct 2024</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Tracking No</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((item) => (
              <tr key={item.id}>
                <td className="item-column">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-detail">{item.dialSize}</p>
                    <div className="item-offer">
                      <p className="item-detail">{item.color}</p>{" "}
                      {item.offer && <p className="offer-tag">In Offer</p>}
                    </div>
                  </div>
                </td>
                <td className="trackingNo">
                  <p>{item.trackingNo}</p>
                </td>
                <td className="price">
                  <p>{item.price}</p>
                </td>
                <td className="quantity">
                  <p>{item.quantity}</p>
                </td>
                <td className="totalPrice">
                  <p>{item.totalPrice}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="order-amount-details">
          <p>
            Total Items: <span>04</span>
          </p>
          <p>
            Sub Total: <span>$3,100</span>
          </p>
          <p>
            Applied Coupon: <span>SPK12</span>
          </p>
          <p>
            Delivery Fees: <span>-$29</span>
          </p>
          <p>
            Total Saved: <span>$3,799</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
