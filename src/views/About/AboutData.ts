import {Color} from '../../styles/colors';

type Member = {
    imageNumber: number;
    name: string;
    nameColor: Color;
    job: string;
    jobColor: Color;
    twitterUrl: URL;
    linkedinUrl: URL;
}

export const aboutData: Member[] = [
    {
        imageNumber: 1,
        name: 'Jonathan Vila',
        nameColor: Color.BLUE,
        job: 'Java developer',
        jobColor: Color.PINK,
        twitterUrl: new URL('https://twitter.com/vilojona'),
        linkedinUrl: new URL('https://linkedin.com/vilojona'),
    },
    {
        imageNumber: 1,
        name: 'Nacho Cougil',
        nameColor: Color.GREEN,
        job: 'Java engineer',
        jobColor: Color.BLUE,
        twitterUrl: new URL('https://twitter.com/icougil'),
        linkedinUrl: new URL('https://linkedin.com/icougil'),
    }
];
