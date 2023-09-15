import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AdvertList, { ListLoader } from './components/AdvertList'
import Login from './components/Login'

const App = () => {
  const router = createBrowserRouter([
    {path: "",
    element: <AdvertList />,
    loader: ListLoader
    },
    {
      path: "/login",
      element: <Login />
    }]
  )

  return <RouterProvider router={router} />;
}

export default App;
