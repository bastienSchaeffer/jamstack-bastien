import * as React from "react";
// import * as renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import Header from "../Header/header";

// describe("Header", () => {
//   it("renders correctly", () => {
//     const tree = renderer
//       .create(<Header siteTitle="Default Starter" />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

test("Displays the correct title", () => {
  const { getByTestId } = render(<Header siteTitle="Gatsby is awesome!" />);
  expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!");
});
