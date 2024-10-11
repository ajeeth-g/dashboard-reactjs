import './home.css';
import Header from '../../components/header/Header';
import OrderContainer from '../orderContainer/OrderContainer';
import UserContainer from '../userContainer/UserContainer';
import OrderTrackContainer from '../orderTrackContainer/OrderTrackContainer';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Breadcrumbs />
      <div className='home-content'>
        <OrderContainer />
        <UserContainer />
        <OrderTrackContainer />
      </div>
    </div>
  );
};

export default Home;
