import "./App.css";
import { Content } from "./Components/Content";
import { Header } from "./Components/Header";
import { Slidebar } from "./Components/Slidebar";

function App() {
  return (
    <div className="grid">
      <Header />
      <Slidebar />
      <Content />
    </div>
  );
}

export default App;
