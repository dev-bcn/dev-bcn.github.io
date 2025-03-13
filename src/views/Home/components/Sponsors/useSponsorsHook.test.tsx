import { act, renderHook } from "@testing-library/react";
import { useSponsorsHook } from "./useSponsorsHook";
import React, { FC } from "react";
import { buildSlashes } from "../../../../services/buildSlashes";

// Mock the buildSlashes function
jest.mock("../../../../services/buildSlashes", () => ({
  buildSlashes: jest.fn((count: number) => "//".repeat(count)),
}));

const wrapper: FC<React.PropsWithChildren<React.PropsWithChildren<{}>>> = ({
  children,
}) => {
  return <div id={"Slashes"}>{children}</div>;
};

describe("useSponsorsHook", () => {
  beforeEach(() => {
    // Clear mock calls between tests
    jest.clearAllMocks();
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(
      () => useSponsorsHook({ numberOfSlashGroups: 2 }),
      { wrapper },
    );

    expect(result.current.slashes).toBe(undefined); // 2 groups of '//'
    expect(result.current.isHovered).toBe(false);
    expect(typeof result.current.width).toBe("number");
  });

  it("should update slashes when window size changes", () => {
    const { rerender } = renderHook(
      () => useSponsorsHook({ numberOfSlashGroups: 2 }),
      { wrapper },
    );

    // Initial render should call buildSlashes once
    expect(buildSlashes).toHaveBeenCalledTimes(2);
    expect(buildSlashes).toHaveBeenCalledWith(2);

    // Trigger a rerender (simulating window resize)
    rerender();

    // buildSlashes should be called again
    expect(buildSlashes).toHaveBeenCalledTimes(3);
  });

  it("should update hover state correctly", () => {
    const { result } = renderHook(
      () => useSponsorsHook({ numberOfSlashGroups: 2 }),
      { wrapper },
    );

    // Initial state should be not hovered
    expect(result.current.isHovered).toBe(false);

    // Simulate hover
    act(() => {
      result.current.handleHover();
    });
    expect(result.current.isHovered).toBe(true);

    // Simulate unhover
    act(() => {
      result.current.handleUnHover();
    });
    expect(result.current.isHovered).toBe(false);
  });

  it("should update slashes when numberOfSlashGroups changes", () => {
    const { result, rerender } = renderHook(
      ({ numberOfSlashGroups }) => useSponsorsHook({ numberOfSlashGroups }),
      { initialProps: { numberOfSlashGroups: 2 } },
    );

    // Initial render with 2 groups
    expect(buildSlashes).toHaveBeenCalledWith(2);
    expect(result.current.slashes).toBe(undefined);

    // Update to 3 groups
    rerender({ numberOfSlashGroups: 3 });

    expect(buildSlashes).toHaveBeenCalledWith(3);
    expect(result.current.slashes).toBe(undefined);
  });

  it("should memoize hover handlers", () => {
    const { result, rerender } = renderHook(() =>
      useSponsorsHook({ numberOfSlashGroups: 2 }),
    );

    // Store initial handlers
    const initialHandleHover = result.current.handleHover;
    const initialHandleUnHover = result.current.handleUnHover;

    // Rerender
    rerender();

    // Handlers should remain the same (memoized)
    expect(result.current.handleHover).toBe(initialHandleHover);
    expect(result.current.handleUnHover).toBe(initialHandleUnHover);
  });
});
