import React from "react";
import { render, screen } from "@testing-library/react";
import Loginpage from "../Loginpage";
import store from "../../../../Redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const MockedLoginPage = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Loginpage />
      </Provider>
    </BrowserRouter>
  );
};

describe("GOOGLE BTN", () => {
  test("should contain a continueWithGoogle button", () => {
    render(<MockedLoginPage />);
    const continueWithGoogle = screen.getByTestId("continueWithGoogle");
    expect(continueWithGoogle).toBeInTheDocument();
  });
});

describe("LOGIN FORM", () => {
  test("should contain a form", () => {
    render(<MockedLoginPage />);
    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
  });
  test("should contain button with a Login text", () => {
    render(<MockedLoginPage />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent("Log in");
  });
});
