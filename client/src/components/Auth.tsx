import { useEffect, useState, FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import TokenService from '@service/token.service';

const Auth = (WrappedComponent: FunctionComponent) => {
  return ({ ...props }) => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      const token = TokenService.getToken();

      if (!token) {
        router.push('/auth/login');
      } else {
        setToken(token);
        router.push(`${router.asPath}`);
      }
    }, []);
    return token ? <WrappedComponent {...props} /> : null;
  };
};

export default Auth;
