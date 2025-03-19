import { FC } from 'react';
import { Link } from 'react-router';
import {
    StyledAvatarContainer,
    StyledAvatarImage,
    StyledWelcomerText,
    StyledWelcomerTextContainer,
    StyledWelcomerTextLink
} from "../../../styles/Schedule/Schedule.style";

type AvatarCardProps = {
  meet: {
    title: string;
    author: string;
    date: string;
    meetingLink: string;
    authorProfile: string;
    meetImageNumber: number;
    titleAndDateColor: string;
    authorNameColor: string;
  };
};

export const AvatarCard: FC<React.PropsWithChildren<AvatarCardProps>> = ({ meet }) => {
  return (
    <StyledAvatarContainer className='AvatarCard'>
      <StyledAvatarImage
        src={require(`../../../assets/images/ScheduleAvatar${meet.meetImageNumber}.jpg`)}
      />
      <StyledWelcomerTextContainer>
        <Link to={meet.meetingLink} className='link--text'>
          <StyledWelcomerTextLink color={meet.titleAndDateColor}>
            {meet.title}{' '}
          </StyledWelcomerTextLink>
        </Link>
        <Link to={meet.authorProfile} className='link--text'>
          <StyledWelcomerTextLink color={meet.authorNameColor}>
            {meet.author}
          </StyledWelcomerTextLink>
        </Link>
        <StyledWelcomerText color={meet.titleAndDateColor}>
          {meet.date}
        </StyledWelcomerText>
      </StyledWelcomerTextContainer>
    </StyledAvatarContainer>
  );
};
