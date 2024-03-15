import Homepage from "../Homepage";
import Aboutus from "../Aboutus/Aboutus";
import Contact from "../ContactUs/Contactus";
import Gallery from "../Gallery/Gallery";

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
    {
      "path" : "/gallery",
      element: <Gallery />,
    },
  ];
  
  export default publicRoutes;
  