import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TokenService from '@service/token.service';

const useAuth = () => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = TokenService.getToken();

    if (token) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, []);

  return { isLoading };
};

export default useAuth;
