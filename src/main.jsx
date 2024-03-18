import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./pages/about.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            // {
            //     path: "/",
            //     element: <App/>,
            // },
            // {
            //     path: "/",
            //     element: <App/>,
            // },
            // {
            //     path: "/",
            //     element: <App/>,
            // },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)
