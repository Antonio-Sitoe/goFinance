import React from "react";
import { render } from "@testing-library/react-native";
import Input from "./Input";
import theme from "../../../global/styles/theme";
import { ThemeProvider } from "styled-components/native";

const Provider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
// mocamos um contexto

describe("Input Component", () => {
  it("must have border specific border color when active", () => {
    const { getByTestId, debug } = render(
      <Input
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Provider,
      }
    );
    debug();
    const inputComponent = getByTestId("input-email");
    expect(inputComponent.props.style[0].borderColor).toEqual(
      theme.colors.attention
    );
  });
});
