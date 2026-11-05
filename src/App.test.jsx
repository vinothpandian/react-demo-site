import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

it("keeps portfolio sections, images and project switching", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: "I am Batman" })).toBeInTheDocument();
  expect(screen.getByAltText("Logo")).toHaveAttribute("src");
  const before = document.querySelector(".list-group").textContent;
  fireEvent.click(screen.getByRole("button", { name: "Adventures" }));
  expect(document.querySelector(".list-group").textContent).not.toBe(before);
  fireEvent.click(screen.getByRole("button", { name: "Fights" }));
  expect(document.querySelector(".list-group").textContent).toBe(before);
});

it("retains invalid contact-form feedback", () => {
  render(<App />);
  fireEvent.submit(document.querySelector("form"));
  expect(screen.getByRole("alert")).toHaveTextContent("Please fill all the details");
});
