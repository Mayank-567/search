import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Chat } from "./Chat";

const App = () => (
  <main>
    <header>
      <a href="https://gadget.dev" className="logo">
        <img src="https://assets.gadget.dev/assets/icon.svg" height="52" alt="Gadget" />
      </a>
      <h1>AI Product Recommender Chatbot</h1>
    </header>
    <Routes>
      <Route path="/" element={<Chat />} />
    </Routes>
    <br />
    <footer>
      Running in <span className={window.gadgetConfig.environment}>{window.gadgetConfig.environment}</span>
    </footer>
  </main>
);

export default App;