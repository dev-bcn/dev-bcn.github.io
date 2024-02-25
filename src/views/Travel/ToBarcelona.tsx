import { FC, Suspense } from "react";
import Photo from "../../assets/images/after-hours.jpg";
import styled from "styled-components";
import { Color } from "../../styles/colors";
import Logo from "../../assets/images/logo.svg";
import { StyledLoadingImage } from "../../components/Loading/Loading";

const StyledSection = styled.div`
  text-align: justify;
  padding: 20px 40px;
  background-color: ${Color.DARK_BLUE};
  color: ${Color.WHITE};

  h2 {
    margin-bottom: 10px;
    color: ${Color.YELLOW};
  }

  h3 {
    color: ${Color.GREEN};
  }

  img {
    float: left;
    margin: 20px;
    width: 35%;
  }

  p {
    line-height: 1.5em;
    margin-bottom: 10px;
  }
`;

export const ToBarcelona: FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <StyledSection>
      <h2>Travel to Barcelona</h2>
      <p>
        Few European cities can offer you the wide diversity of cultural
        experience that you'll find here in Barcelona, attracting millions of
        travellers year on year, many of which decide to stay. The mild climate,
        beautiful coastline, small and winding streets, charming architecture
        that takes you back in time, delicious and affordable food make it a
        perfect place to host such a conference. Couple that with the luxury of
        4.2 km of beach only a short walk from the city centre, warm sunshine
        most of the year, you have have the perfect setting for an enriching and
        relaxing experience.
      </p>

      <p>
        Barcelona has undergone a transformation in recent years. It’s always
        been looked upon as a city of great thinkers, artists and architects,
        but now it can add “smart city” and “innovative startup hub” to its
        repertoire, rendering it a prime location for technology and attracting
        increasing numbers of international talent to its shores.
      </p>
      <Suspense fallback={<StyledLoadingImage src={Logo} />}>
        <img
          style={{ borderRadius: "1rem", aspectRatio: "602/367" }}
          src={Photo}
          alt="Barcelona beach"
        />
      </Suspense>
      <h2>Where to go after-hours?</h2>
      <h3>Plaça de Catalunya & El Barri Gòtic</h3>
      <p>
        The quarter is the centre of the old city of Barcelona, built primarily
        in the late 19th and early 20th century, though several buildings date
        from medieval times. The Barri Gòtic retains a labyrinthine street plan,
        with many small streets opening out into squares. It stretches from
        Plaça de Catalunya to the marina (near the seafront), edged the famous
        La Rambla street.
      </p>
      <h3>Platja de la Barceloneta</h3>
      <p>
        This beach is inextricably linked to the fishing quarter of the same
        name, Barceloneta, Barcelona's classic neighbourhood by the sea, where
        the people of Barcelona love to come and eat fish and seafood dishes and
        "tapas". Within walking distance from the above Barri Gòtic and La
        Rambla street (across the marina).
      </p>
    </StyledSection>
  );
};
