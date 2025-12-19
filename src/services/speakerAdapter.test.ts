import { speakerAdapter } from "./speakerAdapter";

import type { IResponse, ISpeaker } from "../types/speakers";

describe("speakerAdapter", () => {
  it("should correctly adapt a single response to a speaker", () => {
    const response: IResponse[] = [
      {
        id: "1",
        fullName: "John Doe",
        profilePicture: "john.jpg",
        tagLine: "Tech Enthusiast",
        bio: "A passionate developer",
        sessions: [
          { id: 1, name: "Session 1" },
          {
            id: 2,
            name: "Session 2",
          },
        ],
        links: [
          {
            title: "",
            linkType: "Twitter",
            url: "https://twitter.com/johndoe",
          },
          {
            title: "",
            linkType: "LinkedIn",
            url: "https://linkedin.com/in/johndoe",
          },
        ],
      },
    ];

    const expectedSpeaker: ISpeaker[] = [
      {
        id: "1",
        fullName: "John Doe",
        speakerImage: "john.jpg",
        tagLine: "Tech Enthusiast",
        bio: "A passionate developer",
        sessions: [
          { id: 1, name: "Session 1" },
          {
            id: 2,
            name: "Session 2",
          },
        ],
        twitterUrl: {
          linkType: "Twitter",
          url: "https://twitter.com/johndoe",
          title: "",
        },
        linkedInUrl: {
          linkType: "LinkedIn",
          url: "https://linkedin.com/in/johndoe",
          title: "",
        },
      },
    ];

    const result = speakerAdapter(response);
    expect(result).toEqual(expectedSpeaker);
  });

  it("should correctly adapt multiple responses to speakers", () => {
    const response: IResponse[] = [
      {
        id: "1",
        fullName: "John Doe",
        profilePicture: "john.jpg",
        tagLine: "Tech Enthusiast",
        bio: "A passionate developer",
        sessions: [
          { id: 1, name: "Session 1" },
          {
            id: 2,
            name: "Session 2",
          },
        ],
        links: [
          {
            linkType: "Twitter",
            url: "https://twitter.com/johndoe",
            title: "",
          },
          {
            linkType: "LinkedIn",
            url: "https://linkedin.com/in/johndoe",
            title: "",
          },
        ],
      },
      {
        id: "2",
        fullName: "Jane Smith",
        profilePicture: "jane.jpg",
        tagLine: "AI Expert",
        bio: "Specialized in AI",
        sessions: [{ id: 3, name: "Session 3" }],
        links: [
          {
            linkType: "Twitter",
            url: "https://twitter.com/janesmith",
            title: "",
          },
          {
            linkType: "LinkedIn",
            url: "https://linkedin.com/in/janesmith",
            title: "",
          },
        ],
      },
    ];

    const expectedSpeakers: ISpeaker[] = [
      {
        id: "1",
        fullName: "John Doe",
        speakerImage: "john.jpg",
        tagLine: "Tech Enthusiast",
        bio: "A passionate developer",
        sessions: [
          { id: 1, name: "Session 1" },
          {
            id: 2,
            name: "Session 2",
          },
        ],
        twitterUrl: {
          linkType: "Twitter",
          url: "https://twitter.com/johndoe",
          title: "",
        },
        linkedInUrl: {
          linkType: "LinkedIn",
          url: "https://linkedin.com/in/johndoe",
          title: "",
        },
      },
      {
        id: "2",
        fullName: "Jane Smith",
        speakerImage: "jane.jpg",
        tagLine: "AI Expert",
        bio: "Specialized in AI",
        sessions: [{ id: 3, name: "Session 3" }],
        twitterUrl: {
          linkType: "Twitter",
          url: "https://twitter.com/janesmith",
          title: "",
        },
        linkedInUrl: {
          linkType: "LinkedIn",
          url: "https://linkedin.com/in/janesmith",
          title: "",
        },
      },
    ];

    const result = speakerAdapter(response);
    expect(result).toEqual(expectedSpeakers);
  });

  it("should handle missing Twitter URL", () => {
    const response: IResponse[] = [
      {
        id: "1",
        fullName: "John Doe",
        profilePicture: "john.jpg",
        tagLine: "Tech Enthusiast",
        bio: "A passionate developer",
        sessions: [
          { id: 1, name: "Session 1" },
          {
            id: 2,
            name: "Session 2",
          },
        ],
        links: [
          {
            linkType: "LinkedIn",
            url: "https://linkedin.com/in/johndoe",
            title: "",
          },
        ],
      },
    ];

    const expectedSpeaker: ISpeaker[] = [
      {
        id: "1",
        fullName: "John Doe",
        speakerImage: "john.jpg",
        tagLine: "Tech Enthusiast",
        bio: "A passionate developer",
        sessions: [
          { id: 1, name: "Session 1" },
          {
            id: 2,
            name: "Session 2",
          },
        ],
        twitterUrl: undefined,
        linkedInUrl: {
          linkType: "LinkedIn",
          url: "https://linkedin.com/in/johndoe",
          title: "",
        },
      },
    ];

    const result = speakerAdapter(response);
    expect(result).toEqual(expectedSpeaker);
  });

  it("should handle missing LinkedIn URL", () => {
    const response: IResponse[] = [
      {
        id: "1",
        fullName: "John Doe",
        profilePicture: "john.jpg",
        tagLine: "Tech Enthusiast",
        bio: "A passionate developer",
        sessions: [
          { id: 1, name: "Session 1" },
          {
            id: 2,
            name: "Session 2",
          },
        ],
        links: [
          {
            linkType: "Twitter",
            url: "https://twitter.com/johndoe",
            title: "",
          },
        ],
      },
    ];

    const expectedSpeaker: ISpeaker[] = [
      {
        id: "1",
        fullName: "John Doe",
        speakerImage: "john.jpg",
        tagLine: "Tech Enthusiast",
        bio: "A passionate developer",
        sessions: [
          { id: 1, name: "Session 1" },
          {
            id: 2,
            name: "Session 2",
          },
        ],
        twitterUrl: {
          linkType: "Twitter",
          url: "https://twitter.com/johndoe",
          title: "",
        },
        linkedInUrl: undefined,
      },
    ];

    const result = speakerAdapter(response);
    expect(result).toEqual(expectedSpeaker);
  });

  it("should handle empty links array", () => {
    const response: IResponse[] = [
      {
        id: "1",
        fullName: "John Doe",
        profilePicture: "john.jpg",
        tagLine: "Tech Enthusiast",
        bio: "A passionate developer",
        sessions: [
          { id: 1, name: "Session 1" },
          {
            id: 2,
            name: "Session 2",
          },
        ],
        links: [],
      },
    ];

    const expectedSpeaker: ISpeaker[] = [
      {
        id: "1",
        fullName: "John Doe",
        speakerImage: "john.jpg",
        tagLine: "Tech Enthusiast",
        bio: "A passionate developer",
        sessions: [
          { id: 1, name: "Session 1" },
          {
            id: 2,
            name: "Session 2",
          },
        ],
        twitterUrl: undefined,
        linkedInUrl: undefined,
      },
    ];

    const result = speakerAdapter(response);
    expect(result).toEqual(expectedSpeaker);
  });

  it("should handle an empty response array", () => {
    const response: IResponse[] = [];
    const expectedSpeaker: ISpeaker[] = [];

    const result = speakerAdapter(response);
    expect(result).toEqual(expectedSpeaker);
  });
});
