import { Route, Switch } from "react-router";

import ROUTES from "./shared/utils/routes";
import "./App.css";
import Menu from "./shared/components/user/menu/Menu";
import Item from "./shared/utils/item";

function App() {
  return (
    <div className="App">
      <main className={`Main`}>
        <Switch>
          {Object.keys(ROUTES).map((r) => (
            <Route key={ROUTES[r].name} path={ROUTES[r].path} exact>
              <div><Item/></div>
            </Route>
          ))}
        </Switch>
      </main>
      <aside className={`Sidebar`}>
        <Menu />
      </aside>
    </div>
  );
}

export default App;
