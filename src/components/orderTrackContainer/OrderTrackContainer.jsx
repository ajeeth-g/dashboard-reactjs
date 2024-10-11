import './orderTrackContainer.css';
import { userDetails } from '../../util';

const OrderTrackContainer = () => {
  return (
    <section className='order-track-section'>
      <div className='order-track-title-container'>
        <p className='order-track-title'>Order Tracking</p>
        <p>#SPK1218153635</p>
      </div>

      <div className='order-track-profile'>
        {userDetails.map((user, index) => (
          <div className='order-track-details' key={index}>
            <div className='order-track-detail'>
              <div className='order-track-profile-image'></div>
              <div className='order-track-profile-details'>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            </div>
            {user.isPrimary && (
              <div className='order-track-priority'>
                <p>Prime order-track</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderTrackContainer;
