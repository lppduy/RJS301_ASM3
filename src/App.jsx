import './App.css';
import './css/custom.css';
import './css/style.default.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './Authentication/LoginPage';
import RegisterPage from './Authentication/RegisterPage';
import CartPage from './CartPage/CartPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import Chat from './Common/Chat/Chat';
import Footer from './Common/Footer/Footer';
import Navbar from './Common/Navbar/Navbar';
import DetailPage from './DetailPage/DetailPage';
import HomePage from './HomePage/HomePage';
import ShopPage from './Shop/ShopPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:productId" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>

      <Chat />

      <Footer />
    </div>
  );
}

export default App;
