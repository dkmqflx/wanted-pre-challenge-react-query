import styled from '@emotion/styled';

export const AddButtonWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #e6e6eacc;
`;

export const AddButton = styled.button`
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

export const FormWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Form = styled.form`
  height: 0px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  bottom: 0;
  left: 0;
  transition: all 0.3s;
  z-index: 50;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f6f7fa;
  border-bottom: none;

  font-size: 12px;
  overflow: hidden;

  & label + label {
    margin-top: 8px;
  }
`;

export const FormInput = styled.input`
  margin-top: 4px;
  outline: none;
  border: 1px solid #ccc;
  width: 100%;
  height: 32px;
`;

export const FormTextArea = styled.textarea`
  margin-top: 4px;
  outline: none;
  border: 1px solid #ccc;
  resize: none;
  width: 100%;
  height: 50px;
`;

export const FormButton = styled.button`
  background-color: transparent;
  border: 1px solid #0095ed;
  width: 80px;
  padding: 8px 0;
  border-radius: 4px;
  margin-top: 4px;
  right: 0;
  position: relative;
  cursor: pointer;
`;
