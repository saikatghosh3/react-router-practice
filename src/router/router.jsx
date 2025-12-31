import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RootLayout from "../pages/RootLayout";
import Details from "../pages/Details";
import ErrorPage from "../pages/ErrorPage";
import UserDetails from "../pages/UserDetails";

export const router = createBrowserRouter([
    {path: "/", element: <RootLayout/>, 
        errorElement: <ErrorPage />,
        children: [
        {index: true, element:<Home/>},
        {path: "/about", element: <About />},
        {path: "/contact", element: <Contact />},
        {path: "/details", element: <Details />},
        {path: "/details/:id",element:<UserDetails />}
    ]},

]);