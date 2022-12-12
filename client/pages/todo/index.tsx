import React, { useRef, useState } from 'react';
import { useCreateTodo } from '@quries/todo';
import * as Todo from '@components/todo/styles';
import styled from '@emotion/styled';

const Todos = () => {
  const { mutate: createMutate } = useCreateTodo();

  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState({
    title: '',
    content: '',
  });

  const onShowSubmitForm = () => {
    if (!formRef.current) return;

    if (formRef.current.style.height === '200px') {
      formRef.current.style.height = '0px';
      formRef.current.style.padding = '0px';
    } else {
      formRef.current.style.height = '200px';
      formRef.current.style.padding = '10px';
    }
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    const { title, content } = values;
    createMutate({ title, content });
  };

  return (
    <Wrapper>
      <ItemsWrapper>
        <Todo.FormWrapper>
          <Todo.Form ref={formRef} onSubmit={onSubmit}>
            <label htmlFor='title'>
              <div>제목</div>
              <Todo.FormInput onChange={handleChange} type='text' id='title' />
            </label>
            <label htmlFor='content'>
              <div>내용</div>
              <Todo.FormTextArea
                onChange={handleChange}
                id='content'
                name='content'
              ></Todo.FormTextArea>
            </label>
            <Todo.FormButton type='submit'>추가하기</Todo.FormButton>
          </Todo.Form>
        </Todo.FormWrapper>
      </ItemsWrapper>

      <Todo.AddButtonWrapper>
        <Todo.AddButton onClick={onShowSubmitForm}>+</Todo.AddButton>
      </Todo.AddButtonWrapper>
    </Wrapper>
  );
};

export default Todos;

const Wrapper = styled.section`
  border-radius: 4px;
  height: 600px;
  position: relative;
  border: 2px solid #e6e6eacc;
`;

const ItemsWrapper = styled.div`
  height: 540px;
  padding: 12px;
  overflow: scroll;
  position: relative;
`;