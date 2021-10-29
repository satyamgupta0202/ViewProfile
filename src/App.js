import ProfileData from "./Components/ProfileData";
import Displaytable from "./Components/displayTable";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Displaytable}></Route>
      <Route path="/profile:id" exact component={ProfileData}></Route>
    </Router>
    // <div className="App">
    //   {/* <ProfileData /> */}
    //   <Displaytable />
    // </div>
  );
}

export default App;
