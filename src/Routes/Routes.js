import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Category from '../Pages/Category/Category';
import Error from '../Pages/Error/Error';
import Faq from '../Pages/Faq/Faq';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Premium from '../Pages/Premium/Premium';
import Register from '../Pages/Register/Register';
import PrivetRoute from './PrivetRoute/PrivetRoute';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://tech-toor-server.vercel.app/details'),
        // loader: ({params}) => fetch(`https://tech-toor-server.vercel.app/details/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/faq',
        element: <Faq></Faq>,
      },

      {
        path: '/premium',
        element: (
          <PrivetRoute>
            <Premium></Premium>
          </PrivetRoute>
        ),
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://tech-toor-server.vercel.app/details/${params.id}`),
      },

      {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
  {
    path: '*',
    element: <Error></Error>,
  },
]);
