import { useState } from "react";
import "./App.css";

import Input from "./shared/components/input/Input";

function App() {
  const [state, setState] = useState("");
  return (
    <div className="App">
      line
      <Input
        placeholder="Name"
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={state}
        id="name"
        name="name"
        type="multiline"
        valid={false}
      />
    </div>
  );
}

export default App;
