import { useRef, useState } from "react";
import "./App.css";

import Button from "./shared/components/button/Button";
import Input from "./shared/components/input/Input";

function App() {
  const [state, setState] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="App">
      <Input
        ref={ref}
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
      <br />
      <Button type="button" disabled pending>
        Contact Me!
      </Button>
    </div>
  );
}

export default App;
