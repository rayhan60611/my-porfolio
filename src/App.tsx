// import { useRef, useState } from "react";
import "./App.css";
// import Logo from "./shared/components/ui/logo/Logo";
import Menu from "./shared/components/user/menu/Menu";

// import Button from "./shared/components/ui/button/Button";
// import Input from "./shared/components/ui/input/Input";

function App() {
  // const [state, setState] = useState("");
  // const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="App">
      <Menu />
      {/* <div
        style={{ padding: "10px", background: "red", display: "inline-block" }}
      >
        <Logo classes={{ root: "Logo" }} />
      </div> */}
      {/* <Input
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
      </Button> */}
    </div>
  );
}

export default App;
