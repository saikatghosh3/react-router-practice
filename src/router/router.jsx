import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RootLayout from "../pages/RootLayout";

export const router = createBrowserRouter([
    {path: "/", element: <RootLayout/>, children: [
        {index: true, element:<Home/>},
        {path: "/about", element: <About />},
        {path: "/contact", element: <Contact />}
    ]},

]);