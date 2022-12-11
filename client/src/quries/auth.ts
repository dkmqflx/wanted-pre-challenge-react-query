import { AxiosError } from 'axios';
import { useMutate } from '@hooks/useRequest';
import AuthService from '@service/auth.service';
import { loginInputType, authResponseType } from '@type/auth.types';

export const useSignUp = () => {
  return useMutate<
    authResponseType,
    AxiosError<{ details: string }>,
    loginInputType
  >(({ email, password }) => AuthService.signup({ email, password }), {
    onError: (error) => {
      const { response } = error;
      if (response) {
        alert(response.data.details);
      }
    },
  });
};

export const useLogin = () => {
  return useMutate<
    authResponseType,
    AxiosError<{ details: string }>,
    loginInputType
  >(({ email, password }) => AuthService.login({ email, password }), {
    onError: (error) => {
      const { response } = error;
      if (response) {
        alert(response.data.details);
      }
    },
  });
};
