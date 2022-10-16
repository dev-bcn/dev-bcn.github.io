import Countdown from 'react-countdown';
import {FC} from 'react';
import data from '../../../../data/2023.json';
import LessThanYellowIcon from '../../../../assets/images/LessThanYellowIcon.svg';
import SectionWrapper from '../../../../components/SectionWrapper/SectionWrapper';
import {TABLET_BREAKPOINT} from '../../../../constants/BreakPoints';
import TimeCountDown from './components/TimeCountdown';
import {useWindowSize} from 'react-use';
import {
    StyledBlueSlash,
    StyledBottomSlash,
    StyledGreenSlash,
    StyledHomaImage,
    StyledLessThan,
    StyledSubtitle,
    StyledTitle,
    StyledTitleContainer,
    StyledTopSlash,
    StyleHomeContainer
} from "./Style.Home";

const Home: FC = () => {
    const {width} = useWindowSize();
    const startDay = data.startDay;

    return (
        <StyledHomaImage>
            <SectionWrapper color='transparent'>
                <StyleHomeContainer>
                    <StyledTitleContainer>
                        <StyledTitle>DevBcn 2023</StyledTitle>
                    </StyledTitleContainer>
                    <StyledSubtitle>July 3rd-5th</StyledSubtitle>
                    <StyledSubtitle>{data.tracks}</StyledSubtitle>
                    <Countdown date={startDay} renderer={TimeCountDown}/>

                    {width > TABLET_BREAKPOINT && (
                        <StyledLessThan src={LessThanYellowIcon}/>
                    )}
                    <StyledTopSlash
                        initial={{x: '100%'}}
                        animate={{x: 0}}
                        transition={{duration: 4}}
                    >
                        <StyledGreenSlash>
                            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
                            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
                        </StyledGreenSlash>
                    </StyledTopSlash>
                    <StyledBottomSlash
                        initial={{x: '-100%'}}
                        animate={{x: 0}}
                        transition={{duration: 6}}
                    >
                        <StyledBlueSlash>
                            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
                            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
                        </StyledBlueSlash>
                    </StyledBottomSlash>
                </StyleHomeContainer>
            </SectionWrapper>
        </StyledHomaImage>
    );
};

export default Home;
