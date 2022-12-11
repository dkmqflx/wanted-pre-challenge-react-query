import { useEffect, useState, FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import TokenService from '@service/token.service';

const Auth = (WrappedComponent: FunctionComponent, option?: boolean) => {
  return ({ ...props }) => {
    const router = useRouter();
    const [isToken, setIsToken] = useState(false);

    useEffect(() => {
      const token = TokenService.getToken();

      if (!token) {
        router.replace('/auth/login');
      } else if (
        router.route === '/auth/login' ||
        router.route === '/auth/signup'
      ) {
        router.push('/');
      } else {
        setIsToken(true);
      }
    }, []);

    return isToken ? <WrappedComponent {...props} /> : null;
  };
};

export default Auth;
