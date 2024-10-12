import './orderContainer.css';
import { orderData } from '../../util';

const OrderContainer = () => {
  return (
    <div className='table-container'>
      <div className='order-table'>
        <div className='table-title'>
          <p className='table-title-order-id'>
            Order No - <span className='order-id'>#SPK-1023</span>
          </p>
          <p className='table-title-date'>Estimated Delivery: 14, Oct 2024</p>
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
                <td className='item-column'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='item-image'
                  />
                  <div className='item-details'>
                    <p className='item-name'>{item.name}</p>
                    <p className='item-detail'>{item.dialSize}</p>
                    <div className='item-offer'>
                    <p className='item-detail'>{item.color}</p> <span>hi</span>
                    </div>
                  </div>
                </td>
                <td className='trackingNo'>{item.trackingNo}</td>
                <td className='price'>${item.price}</td>
                <td className='quantity'>{item.quantity}</td>
                <td className='totalPrice'>${item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderContainer;
