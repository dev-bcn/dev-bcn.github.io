import {FC} from 'react';
import { Link } from 'react-router-dom';
import { COLOR_PINK } from '../../../styles/colors';
import {StyledAvatarContainer,StyledAvatarImage, StyledWelcomerTextContainer, StyledWelcomerTextLink, StyledWelcomerText } from '../Schedule';

type AvatarCardProps = { }
// textColorTitle
// textColorSubtitle
// textTitle
// textAuthor
// textHours
// meetingLink
// authorLink

export const AvatarCard: FC<AvatarCardProps> = ({}) => {
    return (
        <StyledAvatarContainer>
              <StyledAvatarImage src={ScheduleAvatar1} />
              <StyledWelcomerTextContainer>
              <Link to='/meetingDetail' className='link--text'>
                <StyledWelcomerTextLink color={COLOR_PINK}>
                  THE FUTURE IS KUBERNETES-NATIVE
                </StyledWelcomerTextLink>
              </Link>
              <Link to='/speakerDetail' className='link--text'>
                <StyledWelcomerTextLink color={COLOR_BLUE}>
                  Grace Jansen
                </StyledWelcomerTextLink>
              </Link>
              <StyledWelcomerText color={COLOR_PINK}>
                08:40 - 09:00
              </StyledWelcomerText>
            </StyledWelcomerTextContainer>
            </StyledAvatarContainer>
    )
}
