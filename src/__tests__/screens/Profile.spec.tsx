import React from "react";
import { render } from "@testing-library/react-native";
import { Profile } from "../../screens/Profile";

describe("Profile Screen", () => {
  it("should be Check if have button name placehold", () => {
    const { debug, getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText("Nome"); // pegar o input
    inputName.value = "hello"; // definir o texto do
    // console.log(inputName.value);
    // debug();

    expect(inputName.value).toBe("hello"); // expero que o input tenha  valor de "hello"
    expect(inputName.props.placeholder).toBeTruthy();
  });

  it("should have user data when has been loaded", () => {
    const { getByTestId } = render(<Profile />);

    const name = getByTestId("input-name");
    const surname = getByTestId("input-surname");

    expect(name).toBeTruthy();
    expect(surname).toBeTruthy();
    expect(name.props.value).toEqual("Antonio");
    expect(surname.props.value).toEqual("Sitoe");
  });

  it("should check title", () => {
    const { getByTestId } = render(<Profile />);

    const title = getByTestId("title");

    expect(title.props.children).toContain("Perfil");
  });
});
