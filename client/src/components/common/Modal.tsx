import React, { useState } from 'react';
import { useCreateTodo } from '@quries/todo';
import styled from '@emotion/styled';

const Modal = ({
  closeModal,
}: {
  closeModal: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [values, setValues] = useState({
    title: '',
    content: '',
  });
  const { mutate: createMutate } = useCreateTodo();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, content } = values;
    createMutate({ title, content });
    closeModal();
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <Form onSubmit={onSubmit}>
          <label htmlFor='title'>
            <div>제목</div>
            <FormInput onChange={handleChange} type='text' id='title' />
          </label>
          <label htmlFor='content'>
            <div>내용</div>
            <FormTextArea
              onChange={handleChange}
              id='content'
              name='content'
            ></FormTextArea>
          </label>
          <ButtonsWrapper>
            <Button type='submit'>추가하기</Button>
            <Button type='button' onClick={closeModal}>
              닫기
            </Button>
          </ButtonsWrapper>
        </Form>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalContent = styled.div`
  width: 400px;
  height: 200px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 12px;
  background-color: #f6f7fa;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
  border-bottom: none;

  font-size: 12px;
  overflow: hidden;

  & label + label {
    margin-top: 8px;
  }
`;

const FormInput = styled.input`
  margin-top: 4px;
  outline: none;
  border: 1px solid #ccc;
  width: 100%;
  height: 32px;
`;

const FormTextArea = styled.textarea`
  margin-top: 4px;
  outline: none;
  border: 1px solid #ccc;
  resize: none;
  width: 100%;
  height: 50px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #0095ed;
  width: 60px;
  padding: 8px 0;
  border-radius: 4px;
  margin-top: 8px;
  right: 0;
  position: relative;
  cursor: pointer;
  font-size: 12px;

  & + & {
    margin-left: 8px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
