import {createBrowserRouter} from 'react-router-dom' 

import App from '../App'
import NotFound from '../page/NotFound'
import Login from '../page/Login'

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
])

export default routes