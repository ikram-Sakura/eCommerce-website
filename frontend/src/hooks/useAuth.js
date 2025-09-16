import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { user, token } = useSelector(state => state.auth);

  return {
    isAuthenticated: !!token,
    user,
    token
  };
};