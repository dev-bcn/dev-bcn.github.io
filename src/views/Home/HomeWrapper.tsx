import { FC } from 'react';
import Faqs from './components/Faqs/Faqs';
import Home from './components/Home/Home';
import SpeakersCarousel from './components/SpeakersCarousel/SpeakersCarousel';
import Sponsors from './components/Sponsors/Sponsors';

export const HomeWrapper: FC = () => {
  return (
    <>
      <Home />
      <Faqs />
      <SpeakersCarousel />
      <Sponsors />
    </>
  );
};
