import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from '../contexts/CartContext/CartContext';
import FormContainer from '../containers/FormContainer/FormContainer';
import Navbar from '../components/Navbar/Navbar';
import Cart from '../containers/Cart/Cart';

function RoutesApp() {
    return  <BrowserRouter>
                <CartContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/form' element={<FormContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:itemCategory" element={<ItemListContainer />} />
                        <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
                        <Route path="/*" element={<Navigate to="/" replace />} />
                    </Routes>
                </CartContextProvider>
            </BrowserRouter>
};

export default RoutesApp;
