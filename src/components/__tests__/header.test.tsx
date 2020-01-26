import * as React from "react";
jest.mock("react-netlify-identity-widget");
jest.mock("gatsby");
import { useIdentityContext } from "react-netlify-identity-widget";
import { fireEvent, cleanup } from "@testing-library/react";
import { navigate } from "gatsby";
import { render } from "../../testUtils";
import Header from "../Header/header";

// --------------------- Mocks
(useIdentityContext as any) = jest.fn(() => ({
  isLoggedIn: false,
  logoutUser: Promise.resolve("someSuccessData "),
}));

(navigate as any) = jest.fn(() => ({}));

describe(`Header`, () => {
  afterEach(() => {
    cleanup();
  });

  describe(`when logged out`, () => {
    it(`should contain main navigation, not the loggedin navigation`, () => {
      const { getAllByTestId, queryByTestId } = render(<Header />);
      expect(getAllByTestId(`navigation-main`).length).toEqual(1);
      expect(queryByTestId(`navigation-loggedin`)).toBeFalsy();
    });
  });

  describe(`when logged in`, () => {
    const logoutUser = jest.fn();
    beforeEach(() => {
      (useIdentityContext as any) = jest.fn(() => ({
        isLoggedIn: true,
        logoutUser,
      }));
    });

    it(`should main navigation and the loggedin navigation`, () => {
      const { getAllByTestId } = render(<Header />);
      expect(getAllByTestId(`navigation-main`).length).toEqual(1);
      expect(getAllByTestId(`navigation-loggedin`).length).toEqual(1);
    });

    it(`should contain a clickable logout link and use logoutUser method when clicked`, async () => {
      const { getAllByTestId, getByTestId } = render(<Header />);
      expect(getAllByTestId(`link-logout`).length).toEqual(1);
      fireEvent.click(getByTestId(`link-logout`));
      expect(logoutUser).toHaveBeenCalledTimes(1);
    });
  });
});
