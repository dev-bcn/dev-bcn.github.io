import { BrowserRouter } from 'react-router-dom';
import Faqs from './views/Faqs/Faqs';
import Home from './views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Faqs />
    </BrowserRouter>
  );
}

export default App;
