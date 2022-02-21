import { BrowserRouter } from 'react-router-dom';
import Faqs from './views/Faqs/Faqs';
import Home from './views/Home/Home';
import Speakers from './views/Speakers/Speakers';

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Faqs />
      <Speakers />
    </BrowserRouter>
  );
}

export default App;
