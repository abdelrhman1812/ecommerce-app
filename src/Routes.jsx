import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/CartPage/cart-page";
import HomePage from "./pages/HomePage/home-page";
import Layout from "./pages/Layout/Layout";
import ProductDetails from "./pages/ProductDetails/product-detail";
import ProductList from "./pages/ProductList/productList";

const Routes = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "home", element: <HomePage /> },
        { path: "cart", element: <CartPage /> },
        { path: "products", element: <ProductList /> },
        { path: "product/:id", element: <ProductDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default Routes;
