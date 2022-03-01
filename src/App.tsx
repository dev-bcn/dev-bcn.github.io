import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { HomeWrapper } from './views/Home/HomeWrapper';
import JobOffers from './views/JobOffers/JobOffers';
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
        <Route path='/' component={HomeWrapper} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
