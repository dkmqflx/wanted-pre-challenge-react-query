import { useEffect, useState, FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import TokenService from '@service/token.service';

const Auth = (WrappedComponent: FunctionComponent) => {
  return ({ ...props }) => {
    const router = useRouter();

    useEffect(() => {
      const token = TokenService.getToken();

      if (!token) {
        router.push('/auth/login');
      } else {
        router.push('/todo');
      }
    }, []);
    return <WrappedComponent {...props} />;
  };
};

export default Auth;
