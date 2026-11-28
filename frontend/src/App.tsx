import "./App.css";
import NavBar from "./components/NavBar";
import Form from "./components/Form";

function App() {
  // Lógica de detección de teclas
  // En un futuro...

  return (
    <>
      <div className="h-screen py-6">
        <div>
          <NavBar />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
