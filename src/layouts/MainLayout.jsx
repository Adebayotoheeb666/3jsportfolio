import { Outlet } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const MainLayout = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
