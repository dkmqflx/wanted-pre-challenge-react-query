import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLogin } from '@quries/auth';
import TokenService from '@service/token.service';
import { loginInputType } from '@type/auth.types';
import Auth from '@components/Auth';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { emailRegex } from '@constants/auth';

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<loginInputType>({ mode: 'onChange' });

  const router = useRouter();
  const { mutate } = useLogin();

  const onSubmit: SubmitHandler<loginInputType> = (data) => {
    const { email, password } = data;
    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          const { message, token } = data;
          TokenService.setToken(token);
          alert(message);
          router.push('/');
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', {
          required: '이메일을 입력하세요.',
          pattern: {
            value: emailRegex,
            message: '올바르지 않은 이메일 형식입니다.',
          },
        })}
        name='email'
        type='email'
        errorMessage={errors.email?.message as string}
      />
      <Input
        {...register('password', {
          required: '비밀번호를 입력하세요.',
          minLength: {
            value: 8,
            message: '8자리 이상 입력하세요.',
          },
        })}
        name='password'
        type='password'
        errorMessage={errors.password?.message as string}
      />
      <Button active={isValid} type='submit'>
        로그인
      </Button>
      <Link href='/auth/signup' passHref>
        <Button>회원가입</Button>
      </Link>
    </form>
  );
};

export default Auth(login);
