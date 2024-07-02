import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import ProtectedRoute from './ProtectedRoute';


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<LoginPage/>}></Route>
          <Route path="/register" exact element={<RegisterPage/>}></Route>

        <Route element={<ProtectedRoute/>}>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/products"  element={<Products />}></Route>
          <Route path="/analytics" exact element={<Analytics />}></Route>
          <Route path="/settings" exact element={<Settings />}></Route>
        </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
