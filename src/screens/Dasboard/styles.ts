import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Paragraph = styled.Text`
  color: whitesmoke;
  margin-bottom: 2rem;
`;

export const Button = styled.Button`
  background: #fb5;
`;
