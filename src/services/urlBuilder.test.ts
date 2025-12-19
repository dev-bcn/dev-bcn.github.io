```typescript
import { useUrlBuilder } from "./urlBuilder";

// Mock window.location for the test
const originalLocation = window.location;
delete (window as Partial<Window>).location;
window.location = {
  origin: "http://localhost",
  search: "?query=123",
} as Location;

describe("useUrlBuilder", () => {
  afterAll(() => {
    // Restore original window.location after tests
    window.location = originalLocation;
  });

  it("should append the current search params to the URL", () => {
    const url = "http://example.com/path";
    const result = useUrlBuilder(url);
    expect(result).toBe("http://example.com/path?query=123");
  });

  it("should handle URLs without a path", () => {
    const url = "http://example.com";
    const result = useUrlBuilder(url);
    expect(result).toBe("http://example.com/?query=123");
  });
});
