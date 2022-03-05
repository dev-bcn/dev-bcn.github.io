import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import { HomeWrapper } from './views/Home/HomeWrapper';
import JobOffers from './views/JobOffers/JobOffers';
import Navigation from './components/Navigation/Navigation';
import Schedule from './views/Schedule/Schedule';
import Speakers from './views/Speakers/Speakers';
import { Talks } from './views/Talks/Talks';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/talks' component={Talks} />
        <Route path='/jobOffers' component={JobOffers} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/speakers' component={Speakers} />
        <Route path='/' component={HomeWrapper} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
