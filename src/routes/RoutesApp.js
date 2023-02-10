import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProductsListContainer from '../containers/ProductsListContainer/ProductsListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from '../contexts/CartContext/CartContext';
import FormContainer from '../containers/FormContainer/FormContainer';
import Header from '../containers/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import Cart from '../containers/Cart/Cart';

function RoutesApp() {
    return  <BrowserRouter>
                <CartContextProvider>
                    <Header />
                    <Banner />
                    <Routes>
                        <Route path="/form" element={<FormContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/" element={<ProductsListContainer />} />
                        <Route path="/category/:itemCategory" element={<ProductsListContainer />} />
                        <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
                        <Route path="/*" element={<Navigate to="/" replace />} />
                    </Routes>
                    <Footer />
                </CartContextProvider>
            </BrowserRouter>
};

export default RoutesApp;
