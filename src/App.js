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
import Instrument from './pages/Methodology/Instrument'
import Method from './pages/Methodology/Method'
import Methodology from './pages/Methodology/Methodology'
import Procedure from './pages/Methodology/Procedure'
import Technique from './pages/Methodology/Technique'
import Findings from './pages/Result/Findings';
import Analysis from './pages/Result/Analysis';
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
  {
    path: '/instrument',
    element: <Instrument />
  },
  {
    path: '/method',
    element: <Method />
  },
  {
    path: '/methodology',
    element: <Methodology />
  },
  {
    path: '/procedure',
    element: <Procedure />
  },
  {
    path: '/technique',
    element: <Technique />
  },
  {
    path: '/findings',
    element: <Findings />
  },
  {
    path: '/analysis',
    element: <Analysis />
  }
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
