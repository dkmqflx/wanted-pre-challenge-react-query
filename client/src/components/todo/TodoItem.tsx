import { useRouter } from 'next/router';
import { useDeleteTodo } from '@quries/todo';
import { todoItemType } from '@type/todo.types';
import { getDate } from 'utils/todo';
import useModal from '@hooks/useModal';
import Modal from '@components/common/Modal';
import styled from '@emotion/styled';

const TodoItem = ({
  id,
  title,
  content,
  show,
  createdAt,
  updatedAt,
}: todoItemType) => {
  const router = useRouter();
  const { mutate: deleteMutate } = useDeleteTodo();
  const { isOpenModal, showModal, closeModal } = useModal();

  const onClick = () => {
    if (show) {
      router.push(`/todo`);
    } else {
      router.push(`/todo?id=${id}`);
    }
  };

  const handleDelete = () => {
    if (window.confirm('선택한 항목을 삭제하시겠습니까?')) {
      deleteMutate(id);
    }
  };

  return (
    <Wrapper>
      <ItemWrapper id={id}>
        <span>{title}</span>
        <Settings>
          <SettingButton onClick={onClick}>상세</SettingButton>
          <SettingButton onClick={handleDelete}>삭제</SettingButton>
          <SettingButton onClick={showModal}>수정</SettingButton>
        </Settings>
      </ItemWrapper>
      {show && (
        <ContentWrapper>
          <ContentDateWrapper>
            <ContentDate>생성일 {getDate(createdAt)}</ContentDate>
            <ContentDate>수정일 {getDate(updatedAt)}</ContentDate>
          </ContentDateWrapper>
          <Content>{content}</Content>
        </ContentWrapper>
      )}
      {isOpenModal && <Modal id={id} closeModal={closeModal}></Modal>}
    </Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.div`
  border-bottom: 1px solid #e6e6eacc;

  padding-bottom: 0.75em;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.75em;
`;

const Settings = styled.div``;

const SettingButton = styled.button`
  font-size: 0.75rem;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-top: 0.125em;
  padding-bottom: 0.125em;

  & + & {
    margin-left: 0.25em;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 0.75em;
`;

const Content = styled.p`
  font-size: 1.25rem;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
`;

const ContentDateWrapper = styled.p`
  display: flex;
  justify-content: flex-end;
`;

const ContentDate = styled.span`
  color: #57606a;
  font-size: 0.75rem;
  display: inline-block;

  & + & {
    margin-left: 0.5em;
  }
`;
