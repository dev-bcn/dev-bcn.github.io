import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About } from './views/About/About';
import { CodeOfConduct } from './views/CodeOfConduct/CodeOfConduct';
import Footer from './components/Footer/Footer';
import { HomeWrapper } from './views/Home/HomeWrapper';
import JobOffers from './views/JobOffers/JobOffers';
import MeetingDetailContainer from './views/MeetingDetail/MeetingDetailContainer';
import Navigation from './components/Navigation/Navigation';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Schedule from './views/Schedule/Schedule';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SpeakerDetailContainer from './views/SpeakerDetail/SpeakerDetailContainer';
import Speakers from './views/Speakers/Speakers';
import { Talks } from './views/Talks/Talks';
import styled from 'styled-components';

const StyledAppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

function App() {
  return (
    <StyledAppWrapper className='AppWrapperAll'>
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route path='/jbcn-conf/talks' component={Talks} />
          <Route path='/jbcn-conf/codeOfConduct' component={CodeOfConduct} />
          <PageWrapper>
            <Route path='/jbcn-conf/jobOffers' component={JobOffers} />
            <Route path='/jbcn-conf/schedule' component={Schedule} />
            <Route path='/jbcn-conf/speakers' component={Speakers} />
            <Route path='/jbcn-conf/aboutUs' component={About} />
            <Route
              path='/jbcn-conf/meetingDetail/:name'
              component={MeetingDetailContainer}
            />
            <Route
              path='/jbcn-conf/speakerDetail/:name'
              component={SpeakerDetailContainer}
            />
            <Route path='/jbcn-conf' component={HomeWrapper} exact />
          </PageWrapper>
        </Switch>
        <Footer />
      </BrowserRouter>
    </StyledAppWrapper>
  );
}

export default App;
