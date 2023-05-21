import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import useAuth from "./useAuth";
import { AuthProvider } from "../Context/AuthContext";

describe("Auth Hook", () => {
  it("should test if the user exists", () => {
    const { result } = renderHook(useAuth, {
      wrapper: AuthProvider,
    });
    console.log(result);
  });
});
