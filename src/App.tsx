import { Route, Switch } from "react-router";

import ROUTES from "./shared/utils/routes";
import "./App.css";
import Menu from "./shared/components/user/menu/Menu";
import Item from "./shared/utils/item";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <main className={`Main`}>
        <Switch>
          <Route path={ROUTES["home"].path} exact>
            <Home />
          </Route>
          <Route path={ROUTES["about"].path} exact>
            <div>
              <Item />
            </div>
          </Route>
          <Route path={ROUTES["skills"].path} exact>
            <div>
              <Item />
            </div>
          </Route>
          <Route path={ROUTES["work"].path} exact>
            <div>
              <Item />
            </div>
          </Route>
          <Route path={ROUTES["contact"].path} exact>
            <div>
              <Item />
            </div>
          </Route>
          {/* {Object.keys(ROUTES).map((r) => (
            <Route key={ROUTES[r].name} path={ROUTES[r].path} exact>
              <div><Item/></div>
            </Route>
          ))} */}
        </Switch>
      </main>
      <aside className={`Sidebar`}>
        <Menu />
      </aside>
    </div>
  );
}

export default App;
