import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Rootlayout from './pages/Rootlayout';
import MainPage from "./pages/Main"
import Beauty from './pages/Beauty';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/beauty', element: <Beauty /> }
    ]
  }
])

function App() {

  return (<RouterProvider router={router} />)
}

export default App
