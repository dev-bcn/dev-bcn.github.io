// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

const windowMock = {
  scrollTo: jest.fn(),
};

Object.entries(windowMock).forEach(([key, value]) => {
  if (!global.hasOwnProperty(key)) {
    // @ts-ignore
    global[key] = value;
  }
});
