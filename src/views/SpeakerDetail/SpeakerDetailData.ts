export interface ISpeakerDetail {
  urlName: string;
  name: string;
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  photoUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
}

export const speakerDetailData: ISpeakerDetail[] = [
  {
    urlName: 'grace-jansen',
    name: 'Grace Jansen',
    title1: 'Developer Advocate',
    description1: `Grace is a Developer Advocate at IBM, working with Open Liberty and Reactive Technologies. She has
      been with IBM since graduating from Exeter University with a Degree in Biology. Grace enjoys bringing
      a varied perspective to her projects and using her knowledge of biological systems to simplify
      complex software patterns and architectures. As a developer advocate, Grace builds POC’s, demos
      and sample applications, and writes guides and tutorials. She is a regular presenter at international
      technology conferences and has recently authored a book on reactive systems. Grace also has a
      keen passion for encouraging more women into STEM and especially Technology careers.`,
    title2:
      'Replicating production on your laptop using the magic of containers',
    description2: `(talk) Containers are an amazing technology that are revolutionising how we deploy and create
    applications. Docker and Kubernetes are helping developers and organisations realise the magical
    potential that container technology and orchestration offer. Enter MicroShed and the Testcontainers
    framework enabling local test automation that leverages that magical portability containers offer. In
    this session we'll explore how Testcontainers can help you run and test with true-to-production
    environments in development with minimal re-writing of your test code.`,
    photoUrl:
      'https://www.incimages.com/uploaded_files/image/1920x1080/amycuddyTED_100105-cc_100105.jpg',
    twitterUrl: 'https://www.twitter.com',
    linkedinUrl: 'https://www.linkedin.com',
  },
];

export function findSpeaker(urlName: string) {
  return speakerDetailData.find((meet) => meet.urlName === urlName);
}
