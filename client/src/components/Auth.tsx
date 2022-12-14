import { useEffect, useState, FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import TokenService from '@service/token.service';

const Auth = (WrappedComponent: FunctionComponent) => {
  return ({ ...props }) => {
    const [isToken, setIsToken] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const token = TokenService.getToken();

      if (!token) {
        router.replace('/auth/login');
      } else {
        setIsToken(true);
      }
    }, []);

    return isToken ? <WrappedComponent {...props} /> : null;
  };
};

export default Auth;
