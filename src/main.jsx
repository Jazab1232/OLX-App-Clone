import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Detail from './components/Detail.jsx';
import PostAds from './components/PostAds.jsx';
import Login from './components/Login.jsx';
import AddLoginInfo from './components/AddLoginInfo.jsx';
import UserProfile from './components/UserProfile.jsx';
import ProductSection from './components/ProductSection.jsx';
import MyAds from './components/MyAds.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'detail',
        element: <Detail />
      },
      {
        path: 'product-section',
        element: <ProductSection />
      },
      {
        path: 'user-profile',
        element: <UserProfile />
      },
      {
        path: 'my-ads',
        element: <MyAds />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'login-info',
        element: <AddLoginInfo />
      },
      {
        path: 'post-ads',
        element: <PostAds />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
