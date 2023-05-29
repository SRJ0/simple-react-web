import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from "./routes/root";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from "./error-page";
import LoginPage from "./login-page";
import Page from './routes/page';
import './index.css';
import GuestBook from './GuestBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/pages/:pageId",
        element: <Page />,
      },
      {
        path: "guestbook",
        element: <GuestBook />,
      },
    ],
  },  
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);