import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <div className="app-transition-all ease-in">
        <Home />
        <Canvas />
        <Customizer />
      </div>
    </>
  );
}

export default App;
