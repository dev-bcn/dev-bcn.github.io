import { talkCardAdapter } from "./TalkCardAdapter";
import { UngroupedSession } from "./liveView.types";
import { faker } from "@faker-js/faker";

describe("talkCardAdapter", () => {
  it("should return the correct TalkCardProps object", () => {
    const session: UngroupedSession = {
      id: "1",
      title: faker.lorem.words(5),
      speakers: [{ id: "1", name: faker.person.fullName() }],
      room: "Frontend Track",
      startsAt: faker.date.past().toLocaleString(),
      endsAt: faker.date.future().toLocaleString(),
      description: faker.lorem.lines(1),
      isServiceSession: false,
      isPlenumSession: false,
      status: "Accepted",
      liveURL: null,
      recordingURL: null,
      isInformed: true,
      isConfirmed: true,
      roomID: faker.number.int(),
      categories: [
        {
          id: 1,
          name: "Session format",
          sort: 1,
          categoryItems: [
            {
              id: 1,
              name: "Category 1",
            },
          ],
        },
      ],
      questionAnswers: [
        {
          id: 1,
          sort: 0,
          question: "Tags/Topics",
          answer: "Answer 1",
          answerExtra: null,
          questionType: "Short_Text",
        },
      ],
    };

    const result = talkCardAdapter(session);

    expect(result.talk.title).toBe(session.title);
    expect(result.talk.speakers.at(0)?.name).toBe(session.speakers[0].name);
  });
});
