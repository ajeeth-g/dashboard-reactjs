import Sidebar from '../../components/sidebar/Sidebar';
import Home from '../../components/home/Home';
import Header from '../../components/header/Header';
import './dashboard.css';

const Dashboard = () => {
  return (
    <main className='dashboard-section'>
      <Header />
      <Sidebar />
      <Home />
    </main>
  );
};

export default Dashboard;
