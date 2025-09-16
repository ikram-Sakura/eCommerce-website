import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { authService } from '../../services/authService';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage and redux state regardless of API call success
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      dispatch(logout());
    }
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <i className="fas fa-couch"></i>
          FurniSphere
        </Link>
        
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/cart">
            Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </Link>
          <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
          
          {user ? (
            <div className="user-menu">
              <span>Hello, {user.name}</span>
              {user.role === 'admin' && (
                <Link to="/admin">Admin</Link>
              )}
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;