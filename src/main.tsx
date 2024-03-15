import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Codequest } from "./codequest";
import "./main.css";
import Stars from "./components/starts/stars";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Stars />
    <Codequest />
  </BrowserRouter>
);
