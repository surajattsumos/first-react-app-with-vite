import { createRoot } from "react-dom/client";

import "./index.css";
import { MyAwesomeNavbar } from "./MyAwesomeNavbar";
import { Bodybox } from "./Bodybox";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <MyAwesomeNavbar />
    <Bodybox />
  </>
);
