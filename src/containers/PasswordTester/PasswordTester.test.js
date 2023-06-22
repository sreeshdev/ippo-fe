import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PasswordTester from "./index.js";

describe("PasswordTester", () => {
  it("renders the component", () => {
    render(<PasswordTester />);
    expect(screen.getByText("Password Tester")).toBeInTheDocument();
  });

  it("Test 1:displays the required length and output type", () => {
    render(<PasswordTester />);
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "a" } });

    const requiredLength = screen.getByTestId("output");
    const outputType = screen.getByTestId("result");

    expect(requiredLength).toHaveTextContent("5");
    expect(outputType).toHaveTextContent("Weak");
  });

  it("Test 2:displays the required length and output type", () => {
    render(<PasswordTester />);
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "aA1" } });

    const requiredLength = screen.getByTestId("output");
    const outputType = screen.getByTestId("result");

    expect(requiredLength).toHaveTextContent("3");
    expect(outputType).toHaveTextContent("Weak");
  });

  it("Test 3:displays the required length and output type", () => {
    render(<PasswordTester />);
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "1337C0d3" } });

    const requiredLength = screen.getByTestId("output");
    const outputType = screen.getByTestId("result");

    expect(requiredLength).toHaveTextContent("0");
    expect(outputType).toHaveTextContent("Strong");
  });

  it("Test 4:displays the required length and output type", () => {
    render(<PasswordTester />);
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "13337C0d3" } });

    const requiredLength = screen.getByTestId("output");
    const outputType = screen.getByTestId("result");

    expect(requiredLength).toHaveTextContent("1");
    expect(outputType).toHaveTextContent("Weak");
  });
});
