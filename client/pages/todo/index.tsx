import { useRouter } from 'next/router';
import React from 'react';
import { useGetTodos } from '@quries/todo';
import useModal from '@hooks/useModal';
import Modal from '@components/common/Modal';
import TodoItem from '@components/todo/TodoItem';
import styled from '@emotion/styled';

const Todos = () => {
  const { data } = useGetTodos();
  const router = useRouter();
  const { isOpenModal, showModal, closeModal } = useModal();

  return (
    <Wrapper>
      <ItemsWrapper>
        {data?.map(({ title, content, id }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            content={content}
            show={router.query.id === id ? true : false}
          ></TodoItem>
        ))}
      </ItemsWrapper>

      <AddButtonWrapper>
        <AddButton onClick={showModal}>+</AddButton>
      </AddButtonWrapper>
      {isOpenModal && <Modal closeModal={closeModal}></Modal>}
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

const AddButtonWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #e6e6eacc;
`;

const AddButton = styled.button`
  right: 30px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #0095ed;
  cursor: pointer;
  color: #fff;
  border: 2px solid #0095ed;
  font-size: 24px;
  font-weight: bold;
`;
