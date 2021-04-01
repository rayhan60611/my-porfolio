import { useState } from "react";
// import Logo from "./shared/components/ui/logo/Logo";
// import Button from "./shared/components/ui/button/Button";
// import Input from "./shared/components/ui/input/Input";
// import WorkCard from "../../pages/works/components/work-card/WorkCard";

import Modal from "../components/ui/modal/Modal";

const Item = () => {
  const [state, setState] = useState<boolean>(false);
  // const ref = useRef<HTMLInputElement>(null);
  return (
    <div style={{ padding: "10px" }}>
      <button onClick={() => setState(true)}>Show</button>
      <Modal show={state} onCancel={() => setState(false)} title="Header" />
      {/* <WorkCard /> */}
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
};

export default Item;
