import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { HomeWrapper } from "./views/Home/HomeWrapper";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={HomeWrapper} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
