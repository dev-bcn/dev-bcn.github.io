import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { HomeWrapper } from "./views/Home/HomeWrapper";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" component={HomeWrapper} />
    </BrowserRouter>
  );
}

export default App;
