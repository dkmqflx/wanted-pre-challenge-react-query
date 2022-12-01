import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type buttonType = React.HTMLProps<HTMLAnchorElement> & {
  href?: 'string';
  children: string;
  type?: 'button' | 'submit';
  active?: boolean;
};

const Button = forwardRef<HTMLAnchorElement, buttonType>(
  ({ href, children, type, active = true }, ref) => {
    return href ? (
      <ButtonWrapper>
        <a href={href} ref={ref}>
          <ButtonStyled active={active} type={type}>
            {children}
          </ButtonStyled>
        </a>
      </ButtonWrapper>
    ) : (
      <ButtonWrapper>
        <ButtonStyled active={active} type={type}>
          {children}
        </ButtonStyled>
      </ButtonWrapper>
    );
  }
);
export default Button;

const ButtonWrapper = styled.div`
  margin-top: 0.75em;
`;

const ButtonStyled = styled.button<{ active: boolean | undefined }>`
  border: none;
  outline: none;
  background-color: #8e8e8e;

  ${({ active }) =>
    active &&
    css`
      background-color: #36f;
    `}

  width: 100%;
  height: 3.125rem;

  border-radius: 4px;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
`;
