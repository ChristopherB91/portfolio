import "./App.css";
import { Navbar } from "./components/navbar.tsx";
import { Footer } from "./components/footer.tsx";
import { Content } from "./components/content.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default App;
