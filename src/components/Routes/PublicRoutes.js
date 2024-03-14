import Homepage from "../Homepage";
import Aboutus from "../Aboutus/Aboutus";
import Contact from "../ContactUs/Contactus";

const publicRoutes = [
    {
      path: "/",
      element: <Homepage />,
    },
  
    {
      path: "/about",
      element: <Aboutus />,
    },
    {
      path: "/contactus",
      element: <Contact />,
    },
  ];
  
  export default publicRoutes;
  