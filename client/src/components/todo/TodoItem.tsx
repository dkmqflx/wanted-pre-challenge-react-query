import { useRouter } from 'next/router';
import styled from '@emotion/styled';

type todoItemType = {
  id: string;
  title: string;
  content: string;
  show: boolean;
};

const TodoItem = ({ id, title, content, show }: todoItemType) => {
  const router = useRouter();

  const onClick = () => {
    if (show) {
      router.push(`/todo`);
    } else {
      router.push(`/todo?id=${id}`);
    }
  };

  return (
    <Wrapper>
      <ItemWrapper id={id}>
        <span>{title}</span>
        <Settings>
          <SettingButton onClick={onClick}>상세</SettingButton>
        </Settings>
      </ItemWrapper>
      {show && <Content>{content}</Content>}
    </Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.div`
  border-bottom: 1px solid #e6e6eacc;
  cursor: pointer;
  padding-bottom: 12px;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`;

const Settings = styled.div``;

const SettingButton = styled.button`
  font-size: 12px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const Content = styled.div`
  padding-top: 12px;
`;
