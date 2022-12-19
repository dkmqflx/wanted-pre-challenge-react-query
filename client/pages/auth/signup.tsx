import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignUp } from 'quries/auth';
import { signupInputType } from '@type/auth.types';
import useAuth from '@hooks/useAuth';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { emailRegex } from '@constants/auth';

const signup = () => {
  const { isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<signupInputType>({ mode: 'onChange' });

  const router = useRouter();
  const { mutate } = useSignUp();

  const password = useRef<string>();
  password.current = watch('password');

  const onSubmit: SubmitHandler<signupInputType> = (data) => {
    const { email, password } = data;
    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          const { message } = data;
          window.alert(message);
          router.push('/auth/login');
        },
      }
    );
  };

  if (isLoading) return null;

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
        errorMessage={errors.email?.message}
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
        errorMessage={errors.password?.message}
      />
      <Input
        {...register('passwordConfirm', {
          required: '비밀번호를 입력하세요.',
          minLength: {
            value: 8,
            message: '8자리 이상 입력하세요',
          },
          validate: (value) =>
            value !== password.current ? '비밀번호가 일치하지 않습니다.' : true,
        })}
        name='passwordConfirm'
        type='password'
        errorMessage={errors.passwordConfirm?.message}
      />

      <Button type='submit' active={isValid}>
        회원가입
      </Button>
    </form>
  );
};

export default signup;
