import {IMeeting} from "../views/MeetingDetail/MeetingDetail.Type";
import {
    CategoryItemEnum,
    QuestionAnswers,
    Session,
    SessionCategory
} from "../types/sessions";

export const extractSessionTags = (
    questionAnswers: QuestionAnswers[],
): string[] | undefined => {
    let tags = questionAnswers
        .filter((question) => question.question === "Tags/Topics")
        .map((question) => question.answer)
        .at(0);
    return tags?.split(",");
};
export const extractSessionSlides = (
    questionAnswers: QuestionAnswers[],
): string => {
    let slides = questionAnswers
        .filter((question) => question.question === "Slides")
        .map((question) => question.answer)
        .at(0);
    return slides ?? "";
};
const sessionEmojis: Record<string, string> = {
    Session: "🗣",
    Workshop: "💻",
    "Lightning talk": "⚡️",
};
const sessionLevel: Record<string, string> = {
    "Introductory and overview": "⭐",
    Intermediate: "⭐⭐",
    Advanced: "⭐⭐⭐",
};
export const extractSessionCategoryInfo = (
    categories: SessionCategory[],
    item: CategoryItemEnum = CategoryItemEnum.Level,
): string | undefined => {
    const info = categories.find((category) => category.name === item)
        ?.categoryItems?.[0]?.name;

    if (!info) {
        return undefined;
    }

    const emojis =
        item === CategoryItemEnum.Format ? sessionEmojis : sessionLevel;

    for (const [key, value] of Object.entries(emojis)) {
        if (info.includes(key)) {
            return `${info} ${value}`;
        }
    }

    if (item === CategoryItemEnum.Language && info === "Spanish") {
        return `${info} 🇪🇸`;
    }
    if (item === CategoryItemEnum.Language && info === "English") {
        return `${info} 🇬🇧`;
    }

    return `${info}`;
};
export const sessionAdapter = (
    session: Session | undefined,
): IMeeting | undefined => {
    if (session === undefined) {
        return undefined;
    }
    return {
        description: session.description,
        endDate: Array.isArray(session.endsAt) ? session.endsAt.split("T")[0] : "",
        endTime: Array.isArray(session.endsAt) ? session.endsAt.split("T")[1] : "",
        id: session.id,
        language: extractSessionCategoryInfo(
            session.categories,
            CategoryItemEnum.Language,
        ),
        level: extractSessionCategoryInfo(session?.categories),
        slidesURL: extractSessionSlides(session.questionAnswers),
        speakers: session.speakers,
        startDate: Array.isArray(session.startsAt) ? session.startsAt.split("T")[0] : "",
        startTime: Array.isArray(session.startsAt) ? session.startsAt.split("T")[1] : "",
        title: session.title,
        track: extractSessionCategoryInfo(
            session.categories,
            CategoryItemEnum.Track,
        ),
        type: extractSessionCategoryInfo(
            session.categories,
            CategoryItemEnum.Format,
        ),
        videoTags: extractSessionTags(session.questionAnswers),
        videoUrl: session.recordingUrl,
    };
};