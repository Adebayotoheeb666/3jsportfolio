import { Outlet } from 'react-router-dom';
import Footer from '../sections/Footer';

const MainLayout = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
