import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem('authToken');

    // Redirect to the home page
    navigate('/');
  }, [navigate]);

  return null; // This component does not need to render anything
}

export default Logout;
