import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Graphic from "../components/Graphic";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../components/NotFound";
import ItemDetail from "../components/ItemDetail";
import Login from "../components/LoginComponents/Login";
import Register from "../components/LoginComponents/Register";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import FormProduct from "../components/FormProduct";
import ProtectedUpload from "../components/ProtectedUpload";
import ProtectedReviews from "../components/ProtectedReviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element:  <App/>
      },
      {
        path: "/graphic",
        element: <Graphic/>

      },
      {
        path: "/products",
        element: <ItemListContainer />,
      },
      {
        path: "/products/detail/:detailId",
        element: <ProtectedReviews><ItemDetailContainer/></ProtectedReviews> 

      },
      {   
       path:"/login", 
       element: <Login/>
      },
      {  path:"/register", 
      element: <Register />},
      {  path:"/formproduct", 
      element: <ProtectedUpload><FormProduct/></ProtectedUpload> }
      
    ],
  },
]);
