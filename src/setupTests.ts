// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { TextEncoder } from 'util';
import { vi } from 'vitest';

global.TextEncoder = TextEncoder;
window.scrollTo = vi.fn();
