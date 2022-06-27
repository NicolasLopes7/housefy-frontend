import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { GET_USER_BY_USERNAME_AND_PASSWORD } from '../../graphql/auth/query';
import { useAuthProviderType } from './types';

export const AuthContext = createContext<useAuthProviderType>(undefined);

export const AuthProvider = (props) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [getUsers, { loading: isAuthenticationLoading }] = useLazyQuery(
    GET_USER_BY_USERNAME_AND_PASSWORD
  );
  const authenticate = async ({ username, password }) => {
    const {
      data: { users },
    } = await getUsers({
      variables: {
        username,
        password,
      },
    });

    if (users.length) {
      const [user] = users;
      setIsAuthenticated(true);
      localStorage.setItem('@housefy:user', JSON.stringify(user));
      return user;
    }

    throw new Error('User not found');
  };

  useEffect(() => {
    const user = localStorage.getItem('@housefy:user');
    if (user) {
      setIsAuthenticated(true);
      router.push('/home');
    }

    if (!user && router.pathname !== '/') router.push('/');

  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ authenticate, isAuthenticated, isAuthenticationLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = (): useAuthProviderType => {
  const ctx = useContext(AuthContext);

  return ctx;
};
