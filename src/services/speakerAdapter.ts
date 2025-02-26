import {IResponse, ISpeaker} from "../types/speakers";

export const speakerAdapter = (response: IResponse[]): ISpeaker[] =>
    response.map((response) => ({
        id: response.id,
        fullName: response.fullName,
        speakerImage: response.profilePicture,
        tagLine: response.tagLine,
        bio: response.bio,
        sessions: response.sessions,
        twitterUrl: response.links.filter((link) => link.linkType === "Twitter")[0],
        linkedInUrl: response.links.filter(
            (link) => link.linkType === "LinkedIn",
        )[0],
    }));