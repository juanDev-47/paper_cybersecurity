import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Objectives from './pages/Approach/Objectives';
import Context from './pages/Approach/Context';
import Entities from './pages/Approach/Entities';
import Definitions from './pages/Approach/Definitions';
import Necessity from './pages/Approach/Necessity';
import Problem from './pages/Approach/Problem';
import Members from './pages/Members';
import References from './pages/References';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/objectives',
    element: <Objectives />,
  },
  {
    path: '/context',
    element: <Context />,
  },
  {
    path: '/entities',
    element: <Entities />,
  },
  {
    path: '/definitions',
    element: <Definitions />,
  },
  {
    path: '/necessity',
    element: <Necessity />,
  },
  {
    path: '/problem',
    element: <Problem />,
  },
  {
    path: '/members',
    element: <Members />,
  },
  {
    path: '/references',
    element: <References />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
