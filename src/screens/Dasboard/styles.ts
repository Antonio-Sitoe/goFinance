import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.attention};
`;

export const Paragraph = styled.Text`
  color: whitesmoke;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 3px;
`;

export const Button = styled.Button`
  background: #fb5;
  text-transform: lowercase;
`;
