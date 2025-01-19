import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contect/Contect";
import PrimarySearchAppBar from "./layout/PrimarySearchAppBar";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrimarySearchAppBar />}>
          {routes.map(({ component, path }) => (
            <>
              <Route path={path} element={component} key={Math.random()} />
            </>
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
