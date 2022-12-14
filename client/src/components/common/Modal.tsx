import React, { useState } from 'react';
import { useCreateTodo, useUpdateTodo, useGetTodoById } from '@quries/todo';
import styled from '@emotion/styled';

const Modal = ({
  closeModal,
  id,
}: {
  closeModal: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
}) => {
  const [values, setValues] = useState({
    title: '',
    content: '',
  });
  const { title, content } = values;
  const { data = { title: '', content: '' } } = useGetTodoById(id);
  const { mutate: updateMutate } = useUpdateTodo();
  const { mutate: createMutate } = useCreateTodo();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitTitle = title ? title : data.title;
    const submitContent = content ? content : data.content;

    id
      ? updateMutate({ id, title: submitTitle, content: submitContent })
      : createMutate({ title: submitTitle, content: submitContent });
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
            <FormInput
              onChange={handleChange}
              type='text'
              id='title'
              value={title ? title : data?.title}
            />
          </label>
          <label htmlFor='content'>
            <div>내용</div>
            <FormTextArea
              onChange={handleChange}
              id='content'
              name='content'
              value={content ? content : data?.content}
            ></FormTextArea>
          </label>
          <ButtonsWrapper>
            <Button type='button' onClick={closeModal}>
              닫기
            </Button>
            <Button type='submit'>확인</Button>
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
  width: 25rem;
  height: 12.5rem;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 0.75em;
  background-color: #f6f7fa;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
  border-bottom: none;

  font-size: 0.75rem;
  overflow: hidden;

  & label + label {
    margin-top: 8px;
  }
`;

const FormInput = styled.input`
  margin-top: 0.25em;
  outline: none;
  border: 1px solid #ccc;
  width: 100%;
  height: 2rem;
`;

const FormTextArea = styled.textarea`
  margin-top: 0.25em;
  outline: none;
  border: 1px solid #ccc;
  resize: none;
  width: 100%;
  height: 3.125rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #0095ed;
  width: 3.75rem;
  padding: 0.5em 0;
  border-radius: 4px;
  margin-top: 0.5em;
  right: 0;
  position: relative;
  cursor: pointer;
  font-size: 0.75rem;

  & + & {
    margin-left: 0.5em;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
