import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/frontLayout";
import HomePage from "../pages/HomePages";
import ProductsPage from "../pages/productsPage";
ProductDetailPage
import CartPage from "../pages/CartPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import NotFound from "../pages/NotFound";

const router = createHashRouter([
    {
        path: '/',
        element: <FrontLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'products/:id',
                element: <ProductDetailPage />
            },
            {
                path: 'cart',
                element: <CartPage />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;