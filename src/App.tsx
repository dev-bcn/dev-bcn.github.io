import { BrowserRouter, Route } from "react-router-dom";
import { HomeWrapper } from "./views/Home/HomeWrapper";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomeWrapper} />
    </BrowserRouter>
  );
}

export default App;
