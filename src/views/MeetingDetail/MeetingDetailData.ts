export interface IMeeting {
  urlName: string;
  meetingTitle: string;
  meetingDescription: string;
  videoUrl: string;
  videoTags: string[];
  speakerName: string;
  speakerTitle: string;
  speakerDescription: string;
  speakerPhotoUrl: string;
  speakerTwitterUrl: string;
  speakerLinkedinUrl: string;
}

export const meetingDetailData: IMeeting[] = [
  {
    urlName: 'grace-jansen',
    meetingTitle:
      'REPLICATING PRODUCTION ON YOUR LAPTOP USING THE MAGIC OF CONTAINERS',
    meetingDescription:
      "Containers are an amazing technology that are revolutionising how we deploy and create applications. Docker and Kubernetes are helping developers and organisations realise the magical potential that container technology and orchestration offer. Enter MicroShed and the Testcontainers framework enabling local test automation that leverages that magical portability containers offer. In this session we'll explore how Testcontainers can help you run and test with true-to-production environments in development with minimal re-writing of your test code.",
    videoUrl:
      'https://www.youtube.com/embed/lQWQz3ftazo?list=PLo0fJV3LkR3xSBqFVCYSpsyuO7-etDpvu',
    videoTags: ['Testing', 'Java', 'Testcontainers'],
    speakerName: 'Grace Jansen',
    speakerTitle: 'Developer Advocate',
    speakerDescription: `Grace is a Developer Advocate at IBM, working with Open Liberty and Reactive Technologies. She has
    been with IBM since graduating from Exeter University with a Degree in Biology. Grace enjoys bringing
    a varied perspective to her projects and using her knowledge of biological systems to simplify
    complex software patterns and architectures. As a developer advocate, Grace builds POC’s, demos
    and sample applications, and writes guides and tutorials. She is a regular presenter at international
    technology conferences and has recently authored a book on reactive systems. Grace also has a
    keen passion for encouraging more women into STEM and especially Technology careers.`,
    speakerPhotoUrl:
      'https://www.incimages.com/uploaded_files/image/1920x1080/amycuddyTED_100105-cc_100105.jpg',
    speakerTwitterUrl: 'https://www.twitter.com',
    speakerLinkedinUrl: 'https://www.linkedin.com',
  },
];

export function findMeeting(urlName: string) {
  return meetingDetailData.find((meet) => meet.urlName === urlName);
}
