import { BIG_BREAKPOINT } from '../../constants/BreakPoints';
import { FC } from 'react';
import LessThanYellowIcon from '../../assets/images/LessThanYellowIcon.svg';
import emailIcon from '../../assets/images/emailIcon.svg';
import eventsIcon from '../../assets/images/eventsIcon.svg';
import facebookIcon from '../../assets/images/facebookIcon.svg';
import githubIcon from '../../assets/images/githubIcon.svg';
import linkedinIcon from '../../assets/images/linkedinIcon.svg';
import logo from '../../assets/images/NavigationLogo.svg';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import { useHistory } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import youtubeIcon from '../../assets/images/youtubeIcon.svg';
import {
  StyledAbsoluteImg, StyledFlexCol,
  StyledFlexRow,
  StyledFooterAbsoluteContainer, StyledFooterContainer,
  StyledFooterIcon,
  StyledFooterItem,
  StyledImg,
  StyledLink, StyledSpan
} from "./Styles.Footer";

const Footer: FC = () => {
  const { width } = useWindowSize();

  const history = useHistory();

  function handleLogoClick() {
    history.push('/');
    window.scrollTo(0, 0);
  }

  return (
    <StyledFooterAbsoluteContainer className='Footer'>
      <StyledFooterContainer>
        <StyledFooterItem>
          <StyledAbsoluteImg src={LessThanYellowIcon} />
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFlexCol>
            <StyledFlexRow
              justify={width < BIG_BREAKPOINT ? 'center' : 'flex-start'}
            >
              <StyledLink target={'_blank'} href='www.google.com'>
                <StyledFooterIcon src={twitterIcon} />
              </StyledLink>
              <StyledLink target={'_blank'} href='www.google.com'>
                <StyledFooterIcon src={youtubeIcon} />
              </StyledLink>
              <StyledLink target={'_blank'} href='www.google.com'>
                <StyledFooterIcon src={facebookIcon} />
              </StyledLink>
              <StyledLink target={'_blank'} href='www.google.com'>
                <StyledFooterIcon src={githubIcon} />
              </StyledLink>
              <StyledLink target={'_blank'} href='www.google.com'>
                <StyledFooterIcon src={linkedinIcon} />
              </StyledLink>
            </StyledFlexRow>
            <StyledFlexRow>
              <StyledLink href='mailto:info@barcelonajug.com'>
                <StyledFooterIcon src={emailIcon} />
                info@barcelonajug.com
              </StyledLink>
            </StyledFlexRow>
          </StyledFlexCol>
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledImg src={logo} onClick={handleLogoClick} />
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFlexCol>
            <StyledFlexRow>
              <StyledFooterIcon src={eventsIcon} />
              <StyledSpan>EVENTS</StyledSpan>
            </StyledFlexRow>
            <StyledFlexRow>
              <StyledLink
                target={'_blank'}
                href='https://meetup.com/BarcelonaJUG'
              >
                meetup.com/BarcelonaJUG
              </StyledLink>
            </StyledFlexRow>
            <StyledFlexRow>
              <StyledLink target={'_blank'} href='https://barcelonajug.org'>
                barcelonajug.org
              </StyledLink>
            </StyledFlexRow>
          </StyledFlexCol>
        </StyledFooterItem>
        <StyledFooterItem></StyledFooterItem>
      </StyledFooterContainer>
    </StyledFooterAbsoluteContainer>
  );
};

export default Footer;
