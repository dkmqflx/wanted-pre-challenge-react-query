import styled from '@emotion/styled';

const pageNotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Text>페이지를 찾을 수 없습니다.</Text>
    </Wrapper>
  );
};

export default pageNotFound;

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.25rem;
`;

const Text = styled.p`
  font-size: 2rem;
`;
