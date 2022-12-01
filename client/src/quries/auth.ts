import { AxiosError } from 'axios';
import { useMutate } from '@hooks/useRequest';
import AuthService from '@service/auth.service';
import { loginInputType, signupReponseType } from '@type/auth.types';

export const useSignUp = () => {
  return useMutate<
    signupReponseType,
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
