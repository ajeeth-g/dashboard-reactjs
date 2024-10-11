import './breadcrumbs.css';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Breadcrumbs = () => {
  return (
    <section className='breadcrumbs-section'>
      <h2>Order Details</h2>
      <div className='breadcrumbs-navigations'>
        <span>Ecommerce</span>
        <MdKeyboardDoubleArrowRight />
        <span className='current-page'>Order Details</span>
      </div>
    </section>
  );
};

export default Breadcrumbs;
