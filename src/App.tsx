import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { HomeWrapper } from './views/Home/HomeWrapper';
import JobOffers from './views/JobOffers/JobOffers';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/jobOffers' component={JobOffers} />
        <Route path='/' component={HomeWrapper} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
