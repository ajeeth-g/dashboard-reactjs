import Sidebar from '../../components/sidebar/Sidebar';
import Home from '../../components/home/Home';
import './dashboard.css';

const Dashboard = () => {
  return (
    <main className='dashboard-section'>
      <Sidebar />
      <Home />
    </main>
  );
};

export default Dashboard;
