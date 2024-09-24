'use user';

import { queryClient } from '@/containers/QueryContainer';
import { useEffect, useState } from 'react';

function useAuth() {
  const user = queryClient.getQueryData(['user']);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setToken(token);
    setLoading(false);
  }, []);

  // use token validation check here and get the user from server

  return {
    user,
    // mock impl.
    isLoggedIn: !loading && !!token,
    loading,
  };
}

export default useAuth;
