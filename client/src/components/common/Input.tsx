import { forwardRef } from 'react';
import styled from '@emotion/styled';

type InputTypes = React.HTMLProps<HTMLInputElement> & {
  name: 'email' | 'password' | 'passwordConfirm';
  errorMessage?: string;
};

const INPUT_NAME = {
  email: '이메일',
  password: '비밀번호',
  passwordConfirm: '비밀번호 확인',
};

const Input = forwardRef<HTMLInputElement, InputTypes>(
  ({ type, onChange, errorMessage, name }: InputTypes, ref) => {
    return (
      <Wrapper>
        <label htmlFor={name}>
          <div>{INPUT_NAME[name]}</div>
          <InputStyled onChange={onChange} ref={ref} name={name} type={type} />
        </label>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Wrapper>
    );
  }
);

export default Input;

const Wrapper = styled.div`
  & + & {
    margin-top: 0.75em;
  }
  font-weight: bold;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 3.125rem;
  margin-top: 0.25rem;

  padding: 0px 0.75em;
  outline: none;

  border: 1px solid #e1e2e3;
  color: #333;
  border-radius: 4px;
  font-size: 1rem;
`;

const ErrorMessage = styled.div`
  color: #e52528;
  font-size: 0.75rem;
  font-weight: normal;
  margin-top: 4px;
`;
