import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomeWrapper } from './views/Home/HomeWrapper';
import JobOffers from './views/JobOffers/JobOffers';
import Navigation from './components/Navigation/Navigation';
import Schedule from './views/Schedule/Schedule';
import Speakers from './views/Speakers/Speakers';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/jobOffers' component={JobOffers} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/speakers' component={Speakers} />
        <Route path='/' component={HomeWrapper} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
