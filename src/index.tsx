/* @refresh reload */
import { render } from "solid-js/web";

// tailwind setup
import "./assets/index.css";
import "simple-notify/dist/simple-notify.min.css";

// app setup
import { Router, Routes, Route } from "@solidjs/router";
import App from "./App";
import Login from "./Login";

// Check root element
const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
      </Routes>
    </Router>
  ),

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  root!,
);
