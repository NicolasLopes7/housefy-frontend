import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_USER_BY_ID, GetUserQuery } from 'graphql/user/get-user-query';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { GET_USER_BY_USERNAME_AND_PASSWORD } from '../../graphql/auth/query';
import { useAuthProviderType } from './types';

export const AuthContext = createContext<useAuthProviderType>(undefined);

export const AuthProvider = (props) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(undefined);

  const [getUsers, { loading: isAuthenticationLoading }] = useLazyQuery(
    GET_USER_BY_USERNAME_AND_PASSWORD,
    {
      fetchPolicy: 'network-only',
    }
  );

  const getUserFromLocalStorage = () => {
    const rawUser = localStorage.getItem('@housefy:user');
    const user: { id: number } = JSON.parse(rawUser);

    return user;
  };

  const {
    data: { user } = {},
    refetch: refetchUser,
    loading: isUserLoading,
  } = useQuery<GetUserQuery>(GET_USER_BY_ID, {
    skip: !userId,
    variables: {
      id: userId,
    },
  });

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
      setIsAuthenticated(true);
      setUserId(users[0].id);
      localStorage.setItem('@housefy:user', JSON.stringify(users[0]));
      return users[0];
    }

    throw new Error('User not found');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('@housefy:user');
    router.push('/');
  };

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user) {
      setUserId(user.id);
      setIsAuthenticated(true);
      router.push('/home');
    }

    if (!user && router.pathname !== '/') router.push('/');
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        authenticate,
        logout,
        isAuthenticated,
        isAuthenticationLoading,
        user,
        refetchUser,
        isUserLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = (): useAuthProviderType => {
  const ctx = useContext(AuthContext);

  return ctx;
};
