import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './layouts/AppShell';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import History from './pages/History';
import Library from './pages/Library';
import Login from './pages/Login';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import Register from './pages/Register';
import TripDetail from './pages/TripDetail';
import Trips from './pages/Trips';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <MainLayout showFooter={false} pageClassName="page-login">
              <Login />
            </MainLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout showFooter={false} pageClassName="page-register">
              <Register />
            </MainLayout>
          }
        />
        <Route element={<AppShell />}>
          <Route path="/accueil" element={<Home />} />
          <Route path="/trajets" element={<Trips />} />
          <Route path="/trajets/:tripId" element={<TripDetail />} />
          <Route path="/paiement" element={<Payment />} />
          <Route path="/succes" element={<PaymentSuccess />} />
          <Route path="/historique" element={<History />} />
          <Route path="/librairie" element={<Library />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
