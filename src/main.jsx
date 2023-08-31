import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import ContactUs from './components/ContactUs.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Body from './components/Body.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import { Provider } from 'react-redux';
import store from './features/store.jsx';
import Cart from './components/Cart.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <PageNotFound />,
  },
  // {
  //   path: '/about',
  //   element: <About />
  // },
  // {
  //   path: '/contact',
  //   element: <ContactUs />
  // },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </Provider>
);



