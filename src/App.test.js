import React from "react";
//import { render, fireEvent } from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

/**************************************************************************************************
 * Volunteers: add your tests here. They should be failing, but the students should be able to make
 * them pass by editing the other files.
 **************************************************************************************************/

// SORRY THERE ARE NO TESTS FOR THIS!!

// describe("when rendering the App component", () => {
//   test("morpher clicked the first time should change the diamond into a circle", () => {
//     const container = render(<App />);
//     const textElement = container.getByText("morpher");
//     fireEvent.click(textElement);
//     const diamond = container.getByTestId("object");
//     expect(diamond.style.borderRadius).toEqual("50%");
//   });
//   test("morpher clicked the second time should change the circle back into a diamond", () => {
//     const container = render(<App />);
//     const textElement = container.getByText("morpher");
//     fireEvent.click(textElement);
//     fireEvent.click(textElement);
//     const circle = container.getByTestId("object");
//     expect(circle.style.borderRadius).toEqual("0%");
//   });
// });

/**
 * test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})
 */
