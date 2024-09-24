'use user';

import { queryClient } from '@/containers/QueryContainer';

function useAuth() {
  const user = queryClient.getQueryData(['user']);
  const token = localStorage.getItem('access_token');

  // use token validation check here and get the user from server

  return {
    user,
    // mock impl.
    isLoggedIn: !!token,
  };
}

export default useAuth;
