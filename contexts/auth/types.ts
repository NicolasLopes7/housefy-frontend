import { User } from '../../@generated/generated-types';

export type useAuthProviderType = {
  authenticate: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<User | void>;

  isAuthenticationLoading: boolean;
  isAuthenticated: boolean;
};
