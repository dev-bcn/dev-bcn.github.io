import { IGroup, SessionSpeaker } from "@types/sessions";

export interface AdaptedProps {
  events: AdaptedEvent[];
  resources: AdaptedResource[];
}

export interface AdaptedEvent {
  id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
  resourceId?: number;
  roomName: string;
  speakers: Array<SessionSpeaker>;
}

interface AdaptedResource {
  resourceId: number;
  resourceTitle: string;
}

export const reactCalendarAdapter = (
  groups: IGroup[] | undefined,
): AdaptedProps => {
  if (!groups || groups.length === 0) return { events: [], resources: [] };

  const uniqueRoomsMap = new Map<number, { room: string; roomId: number }>();
  groups.forEach((group) => {
    group.sessions.forEach((session) => {
      if (session.room && session.roomId) {
        uniqueRoomsMap.set(session.roomId, {
          room: session.room,
          roomId: session.roomId,
        });
      }
    });
  });

  const uniqueRooms = Array.from(uniqueRoomsMap.values());

  const resources = Array.from(uniqueRooms)
    .map((roomInfo) => ({
      resourceId: roomInfo.roomId,
      resourceTitle: roomInfo.room,
    }))
    .toSorted((a, b) => a.resourceId - b.resourceId);

  // Create events from sessions
  const events = groups.flatMap((group) =>
    group.sessions.map((session) => {
      const roomResource = resources.find(
        (r) => r.resourceTitle === session.room,
      );
      return {
        id: session.id,
        title: session.title,
        description: session.description,
        start: new Date(session.startsAt),
        end: new Date(session.endsAt),
        resourceId: roomResource ? roomResource.resourceId : undefined,
        roomName: session.room,
        speakers: session.speakers,
      };
    }),
  );

  return { events, resources };
};
