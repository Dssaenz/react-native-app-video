import styled from 'styled-components';

export const Section = styled.View`
  width: 100%;
  elevation: 10;
  margin-top: 250px;
  padding-horizontal: 10%;
  padding-vertical: 60px;
  border-top-left-radius: 60px;
  background-color: ${(props) => props.theme.color.darkBlue};
`;
