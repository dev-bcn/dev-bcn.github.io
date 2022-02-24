import { FC } from 'react';
import Home from './components/Home/Home';
import SpeakersCarousel from './components/SpeakersCarousel/SpeakersCarousel';
import Faqs from './components/Faqs/Faqs';
import Navigation from '../../components/Navigation/Navigation';

export const HomeWrapper: FC = () => {
  return (
    <>
      <Navigation />
      <Home />
      <Faqs />
      <SpeakersCarousel />
    </>
  );
};
