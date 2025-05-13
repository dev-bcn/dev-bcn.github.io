import "@testing-library/jest-dom";
import { TextEncoder } from "util";
import { vi } from "vitest";

global.TextEncoder = TextEncoder;
window.scrollTo = vi.fn();
