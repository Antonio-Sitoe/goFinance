import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";
interface InputProps {
  active?: boolean;
}

export const ContainerInput = styled.TextInput<InputProps>`
  border-radius: 5px;
  width: 100%;
  height: 56px;
  padding: 18px 16px;
  margin-bottom: 8px;
  font-size: ${RFValue(14)}px;
  color: #252525;

  font-family: ${({ theme }) => theme?.fonts?.regular};
  background: ${({ theme }) => theme?.colors?.shape};
  ${({ active, theme }) =>
    active &&
    css`
      border-width: 3px;
      border-color: ${theme?.colors?.attention};
    `}
`;
