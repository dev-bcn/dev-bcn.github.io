import { renderHook } from "@testing-library/react-hooks";

import { useDateInterval } from "./useDateInterval";

describe("useDateInterval", () => {
  // Complete edition object with all required properties
  const createEdition = (overrides = {}) => ({
    tickets: {
      startDay: "2023-10-01",
      endDay: "2023-10-15",
    },
    cfp: {
      startDay: "2023-09-01",
      endDay: "2023-09-30",
    },
    sponsors: {
      startDate: "2023-10-05",
      endDate: "2023-10-20",
    },
    startDay: "2023-10-25",
    endDay: "2023-10-27",
    ...overrides,
  });

  it("should return correct states during the conference", () => {
    const today = new Date("2023-10-26");
    const edition = createEdition();
    const { result } = renderHook(() => useDateInterval(today, edition));

    expect(result.current.isTicketsDisabled).toBe(true);
    expect(result.current.isCfpDisabled).toBe(true);
    expect(result.current.isSponsorDisabled).toBe(true);
    expect(result.current.isConferenceActive).toBe(true);
  });

  it("should return correct states during ticket sales period", () => {
    const today = new Date("2023-10-10");
    const edition = createEdition();
    const { result } = renderHook(() => useDateInterval(today, edition));

    expect(result.current.isTicketsDisabled).toBe(false);
    expect(result.current.isCfpDisabled).toBe(true);
    expect(result.current.isSponsorDisabled).toBe(false);
    expect(result.current.isConferenceActive).toBe(false);
  });

  it("should return correct states during CFP period", () => {
    const today = new Date("2023-09-15");
    const edition = createEdition();
    const { result } = renderHook(() => useDateInterval(today, edition));

    expect(result.current.isTicketsDisabled).toBe(true);
    expect(result.current.isCfpDisabled).toBe(false);
    expect(result.current.isSponsorDisabled).toBe(true);
    expect(result.current.isConferenceActive).toBe(false);
  });

  it("should return correct states during sponsor registration period", () => {
    const today = new Date("2023-10-18");
    const edition = createEdition();
    const { result } = renderHook(() => useDateInterval(today, edition));

    expect(result.current.isTicketsDisabled).toBe(true);
    expect(result.current.isCfpDisabled).toBe(true);
    expect(result.current.isSponsorDisabled).toBe(false);
    expect(result.current.isConferenceActive).toBe(false);
  });

  it("should return all disabled states before any period starts", () => {
    const today = new Date("2023-08-15");
    const edition = createEdition();
    const { result } = renderHook(() => useDateInterval(today, edition));

    expect(result.current.isTicketsDisabled).toBe(true);
    expect(result.current.isCfpDisabled).toBe(true);
    expect(result.current.isSponsorDisabled).toBe(true);
    expect(result.current.isConferenceActive).toBe(false);
  });

  it("should return all disabled states after all periods end", () => {
    const today = new Date("2023-11-01");
    const edition = createEdition();
    const { result } = renderHook(() => useDateInterval(today, edition));

    expect(result.current.isTicketsDisabled).toBe(true);
    expect(result.current.isCfpDisabled).toBe(true);
    expect(result.current.isSponsorDisabled).toBe(true);
    expect(result.current.isConferenceActive).toBe(false);
  });

  it("should handle edge case: exactly on start date", () => {
    const today = new Date("2023-10-01");
    const edition = createEdition();
    const { result } = renderHook(() => useDateInterval(today, edition));

    expect(result.current.isTicketsDisabled).toBe(false); // Should be enabled on start date
    expect(result.current.isCfpDisabled).toBe(true);
    expect(result.current.isSponsorDisabled).toBe(true);
    expect(result.current.isConferenceActive).toBe(false);
  });

  it("should handle edge case: exactly on end date", () => {
    const today = new Date("2023-10-15");
    const edition = createEdition();
    const { result } = renderHook(() => useDateInterval(today, edition));

    expect(result.current.isTicketsDisabled).toBe(false); // Should be enabled on end date
    expect(result.current.isCfpDisabled).toBe(true);
    expect(result.current.isSponsorDisabled).toBe(false);
    expect(result.current.isConferenceActive).toBe(false);
  });
});
