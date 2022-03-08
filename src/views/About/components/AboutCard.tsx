import {FC} from 'react';
import styled from 'styled-components';

type AboutCardProps = {
    person: {
        imageUrl:string;
        name: string;
        job:string;
        linkedinUrl: string;
        twitterUrl: string;
    }
 }

 const StyledAboutCard = styled.div`
 display:flex;
 flex-direction: column;
 alig-items: flex-start;
 `;


export const AboutCard: FC<AboutCardProps> = ({person}) => {
     return (
     <StyledAboutCard>
{/* imagen */}
</StyledAboutCard>
)
}
