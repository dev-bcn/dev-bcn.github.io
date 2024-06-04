import { formatDateWithOrdinal, getOrdinalSuffix } from "./dateUtils";

describe("getOrdinalSuffix", () => {
  it('should return "st" for 1', () => {
    expect(getOrdinalSuffix(1)).toBe("st");
  });

  it('should return "nd" for 2', () => {
    expect(getOrdinalSuffix(2)).toBe("nd");
  });

  it('should return "rd" for 3', () => {
    expect(getOrdinalSuffix(3)).toBe("rd");
  });

  it('should return "th" for 4', () => {
    expect(getOrdinalSuffix(4)).toBe("th");
  });

  it('should return "th" for 11', () => {
    expect(getOrdinalSuffix(11)).toBe("th");
  });

  it('should return "th" for 12', () => {
    expect(getOrdinalSuffix(12)).toBe("th");
  });

  it('should return "th" for 13', () => {
    expect(getOrdinalSuffix(13)).toBe("th");
  });

  it('should return "st" for 21', () => {
    expect(getOrdinalSuffix(21)).toBe("st");
  });

  it('should return "nd" for 22', () => {
    expect(getOrdinalSuffix(22)).toBe("nd");
  });

  it('should return "rd" for 23', () => {
    expect(getOrdinalSuffix(23)).toBe("rd");
  });

  it('should return "th" for 24', () => {
    expect(getOrdinalSuffix(24)).toBe("th");
  });
});

describe("formatDateWithOrdinal", () => {
  it("should format date with ordinal day suffix", () => {
    const date = new Date(2024, 5, 1); // June 1, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 1st, 2024");
  });

  it("should format date with ordinal day suffix for 2nd", () => {
    const date = new Date(2024, 5, 2); // June 2, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 2nd, 2024");
  });

  it("should format date with ordinal day suffix for 3rd", () => {
    const date = new Date(2024, 5, 3); // June 3, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 3rd, 2024");
  });

  it("should format date with ordinal day suffix for 4th", () => {
    const date = new Date(2024, 5, 4); // June 4, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 4th, 2024");
  });

  it("should format date with ordinal day suffix for 11th", () => {
    const date = new Date(2024, 5, 11); // June 11, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 11th, 2024");
  });

  it("should format date with ordinal day suffix for 12th", () => {
    const date = new Date(2024, 5, 12); // June 12, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 12th, 2024");
  });

  it("should format date with ordinal day suffix for 13th", () => {
    const date = new Date(2024, 5, 13); // June 13, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 13th, 2024");
  });

  it("should format date with ordinal day suffix for 21st", () => {
    const date = new Date(2024, 5, 21); // June 21, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 21st, 2024");
  });

  it("should format date with ordinal day suffix for 22nd", () => {
    const date = new Date(2024, 5, 22); // June 22, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 22nd, 2024");
  });

  it("should format date with ordinal day suffix for 23rd", () => {
    const date = new Date(2024, 5, 23); // June 23, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 23rd, 2024");
  });

  it("should format date with ordinal day suffix for 24th", () => {
    const date = new Date(2024, 5, 24); // June 24, 2024
    expect(formatDateWithOrdinal(date)).toBe("June 24th, 2024");
  });
});
