import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Objectives from './pages/Objectives';
import Context from './pages/Context';
import Entities from './pages/Entities';
import Definitions from './pages/Definitions';
import Necessity from './pages/Necessity';
import Problem from './pages/Problem';
import Members from './pages/Members';
import References from './pages/References';
import Navbar from './components/navbar/navbar';

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
    </>
  );
}

export default App;
