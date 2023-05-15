
import { Route, Routes, createBrowserRouter, useLocation } from "react-router-dom";
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Error from './pages/Error.jsx';

import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
      ],
    },
]);

function Router () {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes key={location.pathname} location={location}>
                <Route path='/' element={<App />}>
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/' element={<Home />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

  export default Router