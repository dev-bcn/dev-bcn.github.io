import {FC, useEffect} from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import {Color} from "../../styles/colors";
import data from "../../data/2023.json";
import Logo from "../../assets/sponsorIcons/redhatLogo.svg";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: 65%;
`;
export const
    Diversity: FC = () => {
        useEffect(() => {
            document.title = `Diversity - DevBcn ${data.edition}`;
        });

        return (<SectionWrapper color={Color.WHITE} marginTop={5}>
            <h1>Diversity Sponsorship</h1>

            <p>DevBcn, its volunteers, and staff consider that understanding, respecting, valuing and promoting
                differences is an essential part of our core values. Since we believe that everyone is unique, in our
                events
                we actively encourage collaborative environments where individuals can confidently share their different
                ideas. We are also committed to embrace the rich diversity of our society and the world around us.
                People
                who are diverse in nationality, age, race, ethnic origin, spiritual beliefs and practices, gender,
                gender
                identity, sexual orientation, work and life status are critical for constant improvement and innovation
                in
                our profession.</p>

            <p>That’s why we are running again the diversity sponsorship for DevBcn {data.edition} 🎉</p>

            <p>We must thank <a href="https://www.redhat.com/" target="_blank" rel="noreferrer">Red Hat</a> for making this possible!</p>
            <StyledLogo alt="Diversity Sponsorship" src={Logo}/>
        </SectionWrapper>);
    }
