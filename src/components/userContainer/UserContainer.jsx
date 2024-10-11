import './userContainer.css';
import { userDetails, personalDetails } from '../../util';

const UserContainer = () => {
  return (
    <section className='user-section'>
      <div className='user-title-container'>
        <p className='user-title'>User Details</p>
      </div>

      <div className='user-profile'>
        {userDetails.map((user, index) => (
          <div className='user-details' key={index}>
            <div className='user-detail'>
              <div className='user-profile-image'></div>
              <div className='user-profile-details'>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            </div>
            {user.isPrimary && (
              <div className='user-priority'>
                <p>Prime User</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='user-personal-details'>
        {personalDetails.map((detail, index) => (
          <div className='user-info-section' key={index}>
            <h3>{detail.title}</h3>
            {detail.info.map((item, idx) => (
              <div key={idx} className='user-info-content'>
                <span className='info-label'>{item.label}:</span>
                <span className='info-value'>{item.value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='user-purchase-details'>
        Total <span className='user-purchase-highlight'> 294 items</span>{' '}
        purchased upto now
      </div>
    </section>
  );
};

export default UserContainer;
