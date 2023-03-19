import {
  extractSessionCategoryInfo,
  extractSessionTags,
  sessionAdapter,
} from "./UseFetchTalks";
import {
  CategoryItemEnum,
  QuestionAnswers,
  Session,
  SessionCategory,
} from "./Talk.types";
import { IMeeting } from "../MeetingDetail/MeetingDetail.Type";

describe("sessionAdapter", () => {
  test("returns empty strings when session is undefined", () => {
    expect(sessionAdapter(undefined)).toBeUndefined();
  });

  test("returns the expected output when session is defined", () => {
    const session: Session = {
      id: 5000,
      description: "Session description",
      startAt: "",
      endsAt: "",
      title: "Session title",
      speakers: [
        {
          id: "6f672350-1c71-4a6e-a382-2b1db6e631fd",
          name: "Eric Deandrea",
        },
        {
          id: "4452d53b-603f-4185-beab-766a19258c0f",
          name: "Holly Cummins",
        },
      ],
      recordingUrl: "https://example.com/video.mp4",
      questionAnswers: [
        {
          id: 47395,
          question: "Tags/Topics",
          questionType: "Short_Text",
          answer: "java,openjdk",
        },
      ],
      categories: [
        {
          id: 45078,
          name: CategoryItemEnum.Format,
          categoryItems: [
            {
              id: 149212,
              name: "Session",
            },
          ],
        },
        {
          id: 45079,
          name: CategoryItemEnum.Track,
          categoryItems: [
            {
              id: 159116,
              name: "Java ( core frameworks & libraries )",
            },
          ],
        },
        {
          id: 45080,
          name: CategoryItemEnum.Level,
          categoryItems: [
            {
              id: 149217,
              name: "Introductory and overview",
            },
          ],
        },
        {
          id: 45081,
          name: CategoryItemEnum.Language,
          categoryItems: [
            {
              id: 149221,
              name: "English",
            },
          ],
        },
      ],
    };
    const expected: IMeeting = {
      description: "Session description",
      title: "Session title",
      speakers: [
        {
          id: "6f672350-1c71-4a6e-a382-2b1db6e631fd",
          name: "Eric Deandrea",
        },
        {
          id: "4452d53b-603f-4185-beab-766a19258c0f",
          name: "Holly Cummins",
        },
      ],
      videoUrl: "https://example.com/video.mp4",
      videoTags: ["java", "openjdk"],
      level: "Introductory and overview",
      language: "English",
      type: "Session",
      track: "Java ( core frameworks & libraries )",
    };

    expect(sessionAdapter(session)).toEqual(expected);
  });
});

describe("extractSessionTags", () => {
  test("returns undefined when questionAnswers is empty", () => {
    expect(extractSessionTags([])).toBeUndefined();
  });

  test("returns undefined when questionAnswers do not have a Tags/Topics question", () => {
    const questionAnswers: QuestionAnswers[] = [
      {
        id: 45775,
        question: "Question 1",
        answer: "Answer 1",
        questionType: "Short_Text",
      },
      {
        id: 999,
        question: "Question 2",
        answer: "Answer 2",
        questionType: "Short_Text",
      },
    ];

    expect(extractSessionTags(questionAnswers)).toBeUndefined();
  });

  test("returns the expected output when questionAnswers have a Tags/Topics question", () => {
    const questionAnswers: QuestionAnswers[] = [
      {
        id: 1,
        question: "Question 1",
        answer: "Answer 1",
        questionType: "Short_Text",
      },
      {
        id: 2,
        question: "Tags/Topics",
        answer: "tag1, tag2, tag3",
        questionType: "Short_Text",
      },
      {
        id: 3,
        question: "Question 2",
        answer: "Answer 2",
        questionType: "Short_Text",
      },
    ];

    expect(extractSessionTags(questionAnswers)).toEqual([
      "tag1",
      " tag2",
      " tag3",
    ]);
  });
});

describe("extractSessionCategoryInfo", () => {
  const categories: SessionCategory[] = [
    {
      id: 4,
      name: CategoryItemEnum.Level,
      categoryItems: [
        { id: 1, name: "Beginner" },
        { id: 2, name: "Intermediate" },
      ],
    },
    {
      id: 8,
      name: CategoryItemEnum.Language,
      categoryItems: [
        { id: 3, name: "English" },
        { id: 4, name: "Spanish" },
      ],
    },
  ];

  test("returns undefined when categories is empty", () => {
    expect(extractSessionCategoryInfo([], "Level")).toBeUndefined();
  });

  test("returns undefined when the requested item is not present in categories", () => {
    expect(extractSessionCategoryInfo(categories, "Track")).toBeUndefined();
  });

  test("returns the expected output when the requested item is present in categories", () => {
    expect(extractSessionCategoryInfo(categories, "Level")).toEqual("Beginner");
  });

  test("returns the expected output when the requested item is present in categories with a different name", () => {
    expect(extractSessionCategoryInfo(categories, "Language")).toEqual(
      "English"
    );
  });
});
