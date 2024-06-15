import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TrimPage from "../Trim";
import store from "../../../Redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const MockedTrimPage = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <TrimPage />
      </Provider>
    </BrowserRouter>
  );
};

describe("INPUT FIELD", () => {
  test("should contain an input field with `Place URL here...` placeholder ", () => {
    render(<MockedTrimPage />);
    const inputElement = screen.getByPlaceholderText("Place URL here...");
    expect(inputElement).toBeInTheDocument();
  });
  test("should contain an empty input field with `Place URL here...` placeholder ", () => {
    render(<MockedTrimPage />);
    const inputElement = screen.getByPlaceholderText("Place URL here...");
    expect(inputElement).toHaveTextContent("");
  });
  test("should contain an empty input field with a value when user clicks and enter text ", () => {
    render(<MockedTrimPage />);
    const inputElement = screen.getByPlaceholderText(
      "Place URL here..."
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: "Www.premierLeague.com" },
    });
    expect(inputElement.value).toBe("Www.premierLeague.com");
  });
  test("should contain an empty input field after user clicks on a Trim button", () => {
    render(<MockedTrimPage />);
    const inputElement = screen.getByPlaceholderText(
      "Place URL here..."
    ) as HTMLInputElement;
    const btn = screen.getByRole("button");
    fireEvent.change(inputElement, {
      target: { value: "Www.premierLeague.com" },
    });
    expect(inputElement.value).toBe("Www.premierLeague.com");
    fireEvent.click(btn);
    expect(inputElement.value).toBe("");
  });
});
