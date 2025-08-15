import { MainSection } from "./MainSection";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header.jsx"

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
  return (
    <BrowserRouter>
      <Header />
        <MainSection />
    </BrowserRouter>
  );
}
