import styled from 'styled-components';

export const InputText = styled.TextInput`
  width: 100%;
  border-bottom-color: #fff;
  border-left-color: ${(props) => props.theme.color.darkBlue};
  border-right-color: ${(props) => props.theme.color.darkBlue};
  border-top-color: ${(props) => props.theme.color.darkBlue};
  border-width: 1px;
  color: #fff;
  margin-bottom: 20px;
`;
